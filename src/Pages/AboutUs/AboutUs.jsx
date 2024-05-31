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
import portfolioImg from "../../Assets/Pics/graphic-designing-min.jpg"; // Replace with your image path
import teamImg from "../../Assets/Pics/mobile-app-dev-min.jpg"; // Replace with your image path
import AboutHeader from "../../Components/AboutHeader/AboutHeader";
// import SubscriptionForm from "../../Components/SubForm/SubscriptionForm";

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
                advancements.
              </p>
            </Col>
            <Col md={6}>
              <img
                src={portfolioImg}
                alt="Journey to Learn"
                className="about-image"
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
                      <FaFacebookSquare size={30} color="#62041f" />
                      <FaInstagramSquare size={30} color="#62041f" />
                      <FaSquareXTwitter size={30} color="#62041f" />
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
                                <img src={portfolioImg} alt="Portfolio" className="portfolio-image" />
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
              <Card className="text-dark">
                <Card.Body>
                  <Card.Title className="mb-4">
                    Check Out Our Tuition Views
                  </Card.Title>
                  <Card.Text>
                    <h5>
                      <FiTarget /> Our Mission
                    </h5>
                    <p>
                      Our mission is to provide quality education of
                      international standards and childcare in a safe,
                      respectful, and inclusive environment that builds a
                      foundation for life-long learning.
                    </p>
                    <h5>
                      <TbTargetArrow /> Our Vision
                    </h5>
                    <p>
                      Our vision is for each child to develop a urge to learn,
                      discover their interests and grow in their love of
                      knowledge.
                    </p>
                    <h5>
                      <GiTargetShot /> Director Disk
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
            <Col md={6} className="text-center text-md-start">
              <Image src={teamImg} fluid className="students-image" />
            </Col>
          </Row>
        </Container>
      </section>
      <AboutHeader />
    </>
  );
};

export default About;
