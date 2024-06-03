import React from "react";
import Img from "../../Assets/Pics/SEO-Optimization-Illustration-min.jpg";
import Styles from "./Detail.module.css";
import { Container, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { FaChalkboardTeacher } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import courses from "../../Assets/Data/Coursedetail";
import CourseSlider from "../FeaturedCourses/CourseSlider";

const Detail = () => {
  const { courseId } = useParams(); // Destructure courseId from useParams
  const courseDetail = courses.find((course) => course.id === courseId);
  if (!courseDetail) {
    return <div>Course not found</div>;
  }
  return (
    <>
    <Container >
      <Row >
        <Col lg={6} className={Styles.course_img}>
          <img src={courseDetail.img} alt=""  />
        </Col>
        <Col lg={5} className="side-content mt-md-4">
          <h2 className={Styles.underborder}>{courseDetail.title} </h2>
          <hr className={Styles.headingLine} />
          <p className={Styles.fontSizer}>
            <h3>Course Description</h3>
            <p>{courseDetail.Desc}</p>
          </p>
          <h5> Features:</h5>
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
          <strong> {courseDetail.Category}</strong>
        </Col>
      </Row>

    </Container>
      <Container className={Styles.more_course}>
      <h1>More Course Offering</h1>
      <CourseSlider/>
      </Container>
      </>
  );
};

export default Detail;
