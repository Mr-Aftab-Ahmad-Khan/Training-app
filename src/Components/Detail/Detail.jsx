import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { FaChalkboardTeacher } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import courses from "../../Assets/Data/Coursedetail";
import Styles from "./Detail.module.css";

const Detail = () => {
  const { courseId } = useParams();
  const courseDetail = courses.find((course) => course.id === courseId);

  if (!courseDetail) {
    return <div>Course not found</div>;
  }

  return (
    <Container>
      <Row className={Styles.space_top}>
        <Col lg={6} className={Styles.course_img}>
          <img src={courseDetail.img} alt={courseDetail.title} />
        </Col>
        <Col lg={5} className="side-content mt-md-4">
          <h2 className={Styles.underborder}>{courseDetail.title}</h2>
          <hr className={Styles.headingLine} />
          <div className={Styles.fontSizer}>
            <h3>Course Description</h3>
            <p>{courseDetail.Desc}</p>
          </div>
          <h5>Features:</h5>
          <ul className={Styles.featuresList}>
            <li>
              <FaChalkboardTeacher /> {courseDetail.enviroment}
            </li>
            <li>
              <SlCalender /> {courseDetail.duration}
            </li>
            <li>Topics Covered</li>
          </ul>
          <small>Course Category :</small>
          <p><strong>{courseDetail.Category}</strong></p>
          <Link to="/Courses">Back to Courses</Link>
          <p></p>
          <Link
            to={`/ContactUs?id=${courseDetail.id}&title=${courseDetail.title}`}
          >
            Enroll Now
          </Link>
        </Col>
      </Row>
    </Container>
  );
};

export default Detail;
