import React from "react";
import Slider from "react-slick";
import courses from "../../Assets/Data/Coursedetail";
import Styles from "./CourseSlider.module.css";
import { FaChalkboardTeacher } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

function CourseSlider() {
  var settings = {
    dots: true,
    className: "slider variable-width",
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 2500,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="slider-container">
      <Container>
        <Row>
          <Col>
            <Slider {...settings}>
              {courses.map((course) => {
                return (
                  <div key={course.id} className={Styles.courseDetail}>
                    <div className={Styles.glossyEffects}>
                      <img src={course.img} alt="" />
                      <div className={Styles.content}>
                        <h3>{course.title}</h3>
                        <p>Category: {course.Category}</p>
                        <div className={Styles.iconContainer}>
                          <span>
                            <SlCalender /> <b>{course.duration}</b>
                          </span>
                          <span>
                            <FaChalkboardTeacher /> <b>{course.enviroment}</b>
                          </span>
                        </div>
                        <Link to={`/Detail/${course.id}`}>More Detail</Link>
                      </div>
                    </div>
                  </div>
                );
              })}
            </Slider>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default CourseSlider;
