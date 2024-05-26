import React from "react";
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
import { FaQuoteLeft } from "react-icons/fa";
import { FaQuoteRight } from "react-icons/fa";
import img from "../../Assets/Pics/slide1.jpg";
import { Link } from "react-router-dom";
import Services from "../../Components/Services/Services";
const Home = () => {
  return (
    <div>
      {/* ==============================Hero Section  */}
      <HeroSection />
      {/* ==============================Alumini Section  */}
      <section className={Styles.aluminiContainer}>
        <div md={3} className={Styles.aluminiCard}>
          <SiGooglescholar size={50} />
          <h1>150</h1>
          <h4>Alumni</h4>
        </div>
        <div md={3} className={Styles.aluminiCard}>
          <FaPeopleRoof size={50} />
          <h1>150</h1>
          <h4>Alumni</h4>
        </div>
        <div md={3} className={Styles.aluminiCard}>
          <GiTeacher size={50} />
          <h1>150</h1>
          <h4>Alumni</h4>
        </div>
        <div md={3} className={Styles.aluminiCard}>
          <HiMiniBuildingLibrary size={50} />
          <h1>150</h1>
          <h4>Alumni</h4>
        </div>
      </section>
      {/* ========================================Event */}
      <Container className={Styles.event_container}>
        <h1>Upcoming Events</h1>
        <Row>
          <Col md={3} className={Styles.event_date}>
            <div className="mb-2">
              <IoMdClock /> 10 am - 11 am
            </div>
            <div>
              <FaLocationDot /> VENICE, India
            </div>
            <h1>25</h1>
            <p>June</p>
          </Col>
          <Col md={6} className={Styles.event_details}>
            <h5>Summer School 2018.</h5>
            <p>
              Lorem ipsum dolor sit amet, tetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim aquis
              Lorem ipsum dolor sit amet, tetur adipiscing elit, sed do eiusmod
              tempor.
            </p>
            <a to="/" className={Styles.more_link}>
              More &gt;
            </a>
          </Col>
          <Col md={3}>
            <img
              src="https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dGVjaHxlbnwwfHwwfHx8MA%3D%3D"
              className={Styles.img_fluid}
              alt="Event Image"
            />
          </Col>
        </Row>
      </Container>

      {/* =======================================Excellence */}
      <section className={Styles.excellence_Wrapper}>
        <Container className={`${Styles.excellence} ${Styles.content}`}>
          <Row>
            <h1>Our Motive</h1>
            <Col md={6}>
              <Row className={Styles.content}>
                <Col md={6}>
                  <FaLeaf size={30} />
                  <h4>QUALITY PRODUCTS</h4>
                  <p>
                    We believe in Software Quality that is essential to deliver
                    the product on time and on the required quality.
                  </p>
                </Col>
                <Col md={6}>
                  <GoClockFill size={30} />
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
                  <TfiWorld size={30} />
                  <h4>RELIABILITY</h4>
                  <p>
                    Failure Free Products are our main target.We always develope
                    the most reliable Products without any failure issue on
                    future.
                  </p>
                </Col>
                <Col md={6}>
                  <FaAnchor size={30} />
                  <h4>MAINTAINABLE</h4>
                  <p>
                    Our Products are fully maintainable for the injection of any
                    new Functionality or Requirement.
                  </p>
                </Col>
              </Row>
            </Col>
            <Col md={6}>
              <img src={img} alt="" className={Styles.motive_img} />
            </Col>
          </Row>
        </Container>
      </section>
      {/* =================================================Services */}
      <Services />
      {/* =================================================Parallax */}
      <div className={Styles.parallax}></div>
      {/* =================================================Testimonial */}
      <section className={Styles.testimonial_container}>
        <div className={Styles.progress_bar} />

        <p className={Styles.testimonial}>
        <FaQuoteLeft />
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia
          repellendus, vitae suscipit culpa molestiae possimus voluptate
          consequuntur odit nulla saepe obcaecati dolorem laudantium praesentium
          aspernatur mollitia aperiam laborum rem cum commodi doloremque
          asperiores officia hic similique. Sint ad nobis quos? 
        <FaQuoteRight />
        </p>
        <div className={Styles.user}>
          <img
            src="https://randomuser.me/api/portraits/women/46.jpg"
            alt="user"
            className={Styles.user_image}
          />
          <div className={Styles.user_details}>
            <h4 className={Styles.username}>Lola Smith</h4>
            <p className={Styles.role}>Marketing</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
