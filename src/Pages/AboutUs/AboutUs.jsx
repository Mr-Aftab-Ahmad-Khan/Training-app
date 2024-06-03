import React from "react";
import { Container, Row, Col, Card, Image } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FiTarget } from "react-icons/fi";
import { TbTargetArrow } from "react-icons/tb";
import { GiTargetShot } from "react-icons/gi";
import "./About.css"; // Custom CSS file for additional styling
import aboutHeadImg from "../../Assets/Pics/abouthead.jpeg";
import teamImg from "../../Assets/Pics/ourMission.jpeg"; // Replace with your image path
import AboutHeader from "../../Components/AboutHeader/AboutHeader";

const About = () => {
  const Trainers = [
    {
      Avatar:
        "https://images.unsplash.com/photo-1500048993953-d23a436266cf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHBlcnNvbnxlbnwwfDB8MHx8fDA%3D",
      Name: "Aftab Ahmad",
      Bio: "His expertise spans a wide range of programming languages and frameworks, including JavaScript, React, Node.js.",
      Designation: "Full Stack",
    },
    {
      Avatar:
        "https://images.unsplash.com/photo-1504593811423-6dd665756598?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHBlcnNvbnxlbnwwfDB8MHx8fDA%3D",
      Name: "Zain Chaudhary",
      Bio: "Known for his collaborative spirit, Zain works closely with our development team to ensure that his designs are implemented flawlessly.",
      Designation: "UI/UX DESIGNER",
    },
    {
      Avatar:
        "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHBlcnNvbnxlbnwwfDB8MHx8fDA%3D",
      Name: "Usama Janbaz",
      Bio: "Beyond his technical skills, Usama is valued for his teamwork and communication . And master in the field",
      Designation: "ORACLE",
    },
  ];
  return (
    <>
      <section className="about-header">
        <h1>About Us</h1>
      </section>
      <section className="after-header">
        <Container>
          <Row>
            <Col md={6}>
              <h1>Journey to Learn</h1>
              <p>
                Welcome to BZSoftTech, where our journey to learn and innovate
                never ceases. Founded with a vision to empower individuals and
                businesses through cutting-edge technology solutions, BZSoftTech
                has grown from a small startup into a leading name in the
                software development industry. Our mission is to foster a
                culture of continuous learning, creativity, and excellence,
                ensuring that we stay at the forefront of technological
                advancements. Our mission is simple yet profound - to empower
                you to become confident, capable, and creative technologists. By
                providing personalized guidance, valuable resources, and
                unwavering support, I'm committed to helping you turn your tech
                dreams into reality.
              </p>
            </Col>
            <Col md={6}>
              <img
                src={aboutHeadImg}
                alt="Journey to Learn"
                className="afterHead_img"
              />
            </Col>
          </Row>
        </Container>
      </section>

      <section className="our-trainers">
        <h1>Our Best Trainers</h1>
        <Container className="mt-5">
          <Row className="justify-content-center">
            {Trainers.map((trainer) => (
              <Col md={4}>
                <Card className="team-card">
                  <Card.Img
                    variant="top"
                    src={trainer.Avatar}
                    className="team-image"
                  />
                  <Card.Body>
                    <Card.Title>{trainer.Name}</Card.Title>
                    <Card.Text>{trainer.Bio}</Card.Text>
                    <b>Designation: {trainer.Designation}</b>
                    <p>
                      <FaFacebookSquare size={30} color="#1eb2b4" />
                      <FaInstagramSquare size={30} color="#1eb2b4" />
                      <FaSquareXTwitter size={30} color="#1eb2b4" />
                    </p>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* <section className="our-portfolio">
        <h1>Our Portfolio</h1>
        <div className="portfolio-main">
                    {[...Array(3)].map((_, idx) => (
                        <div className="portfolio-row" key={idx}>
                            <div className="portfolio-column-image">
                                <img src={aboutHeadImg} alt="Portfolio" className="portfolio-image" />
                            </div>
                            <div className="portfolio-column-content">
                                <h3>My Work</h3>
                                <p>Lorem ipsum dolor sit amet, tempor prodesset eos no. Temporibus necessitatibus sea ei, at tantas oporteat nam.</p>
                            </div>
                        </div>
                    ))}
                </div>
      </section> */}

      <section className="tuition-view">
        <Container fluid className="gx-0">
          <Row className="align-items-center">
            <Col md={6} className="p-4">
              <Card>
                <Card.Body className="tuition-card">
                  <Card.Title className="mb-4">
                    <h2>Check Out Our Tuition Views</h2>
                  </Card.Title>
                  <Card.Text className="tuition-card">
                    <h5 style={{color:"#1EB2B4"}}>
                      <FiTarget size={30} color="#1EB2B4"/> Our Mission
                    </h5>
                    <p>
                      Our mission is to provide quality education of
                      international standards and childcare in a safe,
                      respectful, and inclusive environment that builds a
                      foundation for life-long learning.
                    </p>
                    <h5 style={{color:"#1EB2B4"}}>
                      <TbTargetArrow size={30} color="#1EB2B4"/> Our Vision
                    </h5>
                    <p>
                      Our vision is for each child to develop a urge to learn,
                      discover their interests and grow in their love of
                      knowledge.
                    </p>
                    <h5 style={{color:"#1EB2B4"}}>
                      <GiTargetShot size={30} color="#1EB2B4"/> Director Disk
                    </h5>
                    <p>
                      The origin of Solid Tuitions is rooted in the philosophy
                      of imparting expertise to the aspirants and creating
                      awareness amongst them about the relevance and quality of
                      learning.
                    </p>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} className="image-container">
              <Image src={teamImg} fluid className="mission-image" />
            </Col>
          </Row>
        </Container>
      </section>
      <AboutHeader />
    </>
  );
};

export default About;