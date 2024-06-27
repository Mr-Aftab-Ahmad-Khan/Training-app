import { React, useEffect, useState } from "react";
import HeroSection from "../../Components/HeroSection/HeroSection";
import { Container, Row, Col } from "react-bootstrap";
import Styles from "../../Styles/Home.module.css";
// import HomeHandler from "./";
import { SiGooglescholar } from "react-icons/si";
import { FaPeopleRoof } from "react-icons/fa6";
import { GiTeacher } from "react-icons/gi";
import { HiMiniBuildingLibrary } from "react-icons/hi2";
import { GoClockFill } from "react-icons/go";
import { TfiWorld } from "react-icons/tfi";
import { FaLeaf } from "react-icons/fa";
import { FaAnchor } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdClock } from "react-icons/io";
import homeMotiveImg from "../../Assets/Pics/homeMotive.jpeg";
import { Link } from "react-router-dom";
import Services from "../../Components/ServicesCard/ServicesCard";
import Testimonial from "../../Components/Testimonial/Testimonial";
import HomeTrainer from "../../Components/HomeTrainer/HomeTrainer";
import Detail from "../../Components/Detail/Detail";
import CourseSlider from "../../Components/FeaturedCourses/CourseSlider";
import SubscriptionForm from "../../Components/SubForm/SubscriptionForm";
import Events from "../../Components/EventsUpdate/Events";
import ProgramFeatures from "../../Components/ProgramFeature/ProgramFeature";
import HowItWorks from "../../Components/HowItWorks/HowItWorks";
import Collab from "../../Components/Collab/Collab";
import Ceo from "../../Components/CEO/Ceo";
import HomeBlog from "../../Components/HomeBlog/HomeBlog";

const Home = () => {
  // Set the count state for keep counting
  const [aluminiCount, setaluminiCount] = useState(1);
  const [programCount, setProgramCount] = useState(1);
  const [affiliations, setAffiliations] = useState(1);
  const [campuses, setCampuses] = useState(1);
  // will chnage the number without requiring rendering and as well termination
  useEffect(() => {
    const intervalId = setInterval(() => {
      //Alumini Count
      setaluminiCount((aCount) => {
        if (aCount >= 150) {
          clearInterval(intervalId);
          return 150; //
        } else {
          return aCount + 1;
        }
      });
      //program Count
      setProgramCount((pCount) => {
        if (pCount >= 20) {
          return 20; //
        } else {
          return pCount + 1;
        }
      });
      //Affiliations Count
      setAffiliations((e) => {
        if (e >= 50) {
          return 50; //
        } else {
          return e + 1;
        }
      });
      //campuses Count
      setCampuses((c) => {
        if (c >= 40) {
          return 40; //
        } else {
          return c + 1;
        }
      });
    }, 100);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      {/* ==============================Hero Section  */}
      <HeroSection />
      {/* ==============================Alumini Section  */}
      <section className={Styles.aluminiContainer}>
        <div md={3} className={Styles.aluminiCard}>
          <SiGooglescholar size={50} />
          <h1>{aluminiCount}</h1>
          <h4>Alumni</h4>
        </div>
        <div md={3} className={Styles.aluminiCard}>
          <FaPeopleRoof size={50} />
          <h1>{programCount}+</h1>
          <h4>Program</h4>
        </div>
        <div md={3} className={Styles.aluminiCard}>
          <GiTeacher size={50} />
          <h1>{affiliations}</h1>
          <h4>Affiliations</h4>
        </div>
        <div md={3} className={Styles.aluminiCard}>
          <HiMiniBuildingLibrary size={50} />
          <h1>{campuses}</h1>
          <h4>Incubator</h4>
        </div>
      </section>
      {/* ========================================Event */}
      <Events />
      <ProgramFeatures />
      <HowItWorks />
      {/* ========================================Courses */}

      <section className={Styles.home_courses}>
        <div className={Styles.heading_wrapper}>
          <h1>Our Courses</h1>
        </div>
        <CourseSlider />
      </section>
      <Container>
        <Row>
          <h1 className="text-center">
            <hr />
            Collaborations with leading <b> Organizations </b>
            <hr />
          </h1>
          <Col md={12}>
            <Collab />
          </Col>
        </Row>
      </Container>
      {/* =======================================Excellence */}
      <section className={Styles.excellence_Wrapper}>
        <Container className={`${Styles.excellence} ${Styles.content}`}>
          <Row>
            <Col md={6} className={Styles.text_col}>
              <h1>Our Motive</h1>
              <Row className={Styles.content}>
                <Col md={6}>
                  <FaLeaf size={30} color="#149092"/>
                  <h4>QUALITY PRODUCTS</h4>
                  <p>
                    We believe in Software Quality that is essential to deliver
                    the product on time and on the required quality.
                  </p>
                </Col>
                <Col md={6}>
                  <GoClockFill size={30} color="#149092"/>
                  <h4>TIMELY WORK</h4>
                  <p>
                    We always plan the Project Development schedule for
                    deploying the Project on time with all completed
                    requirements.
                  </p>
                </Col>
              </Row>
              <Row>
                <Col md={6}>
                  <TfiWorld size={30} color="#149092"/>
                  <h4>RELIABILITY</h4>
                  <p>
                    Failure Free Products are our main target. We always develop
                    the most reliable Products without any failure issue in
                    future.
                  </p>
                </Col>
                <Col md={6}>
                  <FaAnchor size={30} color="#149092"/>
                  <h4>MAINTAINABLE</h4>
                  <p>
                    Our Products are fully maintainable for the injection of any
                    new Functionality or Requirement.
                  </p>
                </Col>
              </Row>
            </Col>
            <Col md={6} className={Styles.image_col}>
              <img
                src={homeMotiveImg}
                alt="Motive"
                className={Styles.motive_img}
              />
            </Col>
          </Row>
        </Container>
      </section>

      {/* =================================================Services */}
      {/* <Services /> */}
      {/* ========================================Trainer */}
      {/* <HomeTrainer /> */}
      <Ceo/>
      {/* =================================================Testimonial */}
      <HomeBlog/>
      {/* =================================================Profile */}
    </div>
  );
};

export default Home;
