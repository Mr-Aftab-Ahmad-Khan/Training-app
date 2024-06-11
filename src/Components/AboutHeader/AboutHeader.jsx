import React from "react";
import "./AboutHeader.css";
import Slider from "react-slick";

import success from "../../Assets/Pics/successStairs.jpeg";
import papil from "../../Assets/Pics/students.jpeg";
import { CiCircleCheck } from "react-icons/ci";
import { Container, Row, Col } from "react-bootstrap";
import { IoAnalyticsOutline } from "react-icons/io5";
import AboutFeatureSlider from "./AboutFeatureSlider";

const AboutHeader = () => {
  return (
    <div>
      <div className="parent_container">
        <div className="left_side">
          <img src={success} alt="" />
        </div>
        <div className="right_side">
          <div className="content">
            <h1>Preparing for your Success Stairs in BZsofttech </h1>
            <p>
              We believe in learning by doing. Our practical, hands-on approach
              means that you'll be working on real projects and gaining
              practical experience that employers value. This not only helps you
              understand the theoretical concepts better but also builds a
              strong portfolio..
            </p>
            <p>
              <CiCircleCheck size={25} /> Empower Your Future
            </p>
            <p>
              <CiCircleCheck size={25} /> Learn from the Best
            </p>
            <p>
              <CiCircleCheck size={25} /> Hands-On Experience
            </p>
            <p>
              <CiCircleCheck size={25} /> Support and Resources
            </p>
            <p>
              <CiCircleCheck size={25} /> Stay Motivated
            </p>
            <p>
              <CiCircleCheck size={25} /> Believe in Yourself
            </p>
          </div>
          <div className="papil-card">
            <div className="papil_left">
              <div className="papil_content">
                <h1>FEW</h1>
                <p>Stories from our Past Pupils</p>
              </div>
            </div>
            <div className="papil_right">
              <img src={papil} alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className="expertise_section">
        <div className="expertise-left">
          <b>
            <IoAnalyticsOutline /> WHAT WE’RE OFFERING
          </b>
          <h1>Why should you study in BZSOFTTECH </h1>
        </div>
        <div className="expertise-right">
          <p>
            We are excited to see what you will accomplish during your time at
            BZSOFTTECH and beyond. Remember, the journey of a thousand miles
            begins with a single step. You've already taken that first step by
            enrolling, and we can't wait to see you reach your destination.Stay
            Curious, Stay Motivated, and Never Stop Learning.
          </p>
        </div>
      </div>
      <section className="features">
      <h1 >Features</h1>
      <Container>
        <Row>
          <Col md={12}>
            <AboutFeatureSlider />
          </Col>
        </Row>
      </Container>
      </section>
    </div>
  );
};

export default AboutHeader;
