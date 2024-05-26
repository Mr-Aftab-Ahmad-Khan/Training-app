import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import CourseSlider from "./CourseSlider";
import Styles from './FeaturedCourses.module.css'
import profileImage from '../../Assets/Pics/profile.jpg'
const FeaturedCourses = () => {
  return (
    <Container>
      <div className={Styles.founderContainer}>
        <img
          src={profileImage}
          alt="Adeel Javaid"
          className={Styles.profileImage}
        />
        <div className={Styles.textBlock}>
          <p>
            Our mission is to educate and empower enterprise leaders. We firmly
            believe that the leaders nurtured by our institute play a crucial
            role in effecting positive change within their organizations and on
            a global scale.
          </p>
          <p>
            <b>Owais Majeed - Founder & CEO</b>
          </p>
        </div>
      </div>
      <h1>Featured Courses</h1>
      <p >
        Elevate Your Skills and Land Your Dream Job - Whether you prefer the
        convenience of learning from home or the advantages of direct sessions
        on campus with our expert instructors, we've got you covered!
      </p>
      <Container>
        <CourseSlider />
      </Container>
    </Container>
  );
};

export default FeaturedCourses;
