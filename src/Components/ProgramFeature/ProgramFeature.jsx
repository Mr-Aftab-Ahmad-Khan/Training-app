import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import Styles from "./ProgramFeatures.module.css";
import olearning from "../../Assets/Pics/organized.jpg"; // Replace with actual image paths
import research from '../../Assets/Pics/reseach.jpeg'
import certification from '../../Assets/Pics/certification.jpeg'
import coaches from '../../Assets/Pics/coaches.jpeg'
const ProgramFeatures = () => {
  return (
    <Container className="py-2">
      <h1 className={`mb-5 text-center ${Styles.deco}`}>Program Features</h1>
      <Row className="g-4">
        <Col md={5} className="d-flex align-items-stretch">
          <div className={Styles.featureBox}>
            <h3 className={Styles.featureTitle}>Organized Learning</h3>
            <p className={Styles.featureDescription}>
              Our curriculum at BZSOFTECH is crafted using the flipped-classroom
              model, an industry-leading approach for optimizing tech education.
              This method ensures that students engage actively with practical,
              hands-on learning during sessions, maximizing the educational
              experience and preparing them effectively for real-world tech
              challenges.
            </p>
            <Image
              src={olearning}
              alt="Organized Learning"
              className={Styles.featureImage}
              fluid
            />
          </div>
        </Col>
        <Col md={7} className="d-flex align-items-stretch">
          <div className={Styles.featureBox}>
            <h3 className={Styles.featureTitle}>Research-based Curriculum</h3>
            <p className={Styles.featureDescription}>
              Our curriculum emphasizes inquiry-based learning, collaboration,
              and creativity, empowering students to become lifelong learners
              and leaders in an ever-evolving world. With a focus on innovation
              and excellence, BZSoftech's research-based curriculum ensures that
              every student receives a high-quality education that prepares them
              for success in the 21st century.
            </p>
            <Image
              src={research}
              alt="Research-based Curriculum"
              className={Styles.featureImage}
              fluid
            />
          </div>
        </Col>
        <Col md={7} className="d-flex align-items-stretch">
          <div className={Styles.featureBox}>
            <h3 className={Styles.featureTitle}>
              Streamlined path to ICF Credentialing
            </h3>
            <p className={Styles.featureDescription}>
              Discover the express lane to ICF credentialing with BZSoftech. Our
              program is meticulously designed to guide students efficiently
              towards certification, providing the tools and support needed for
              success. Join us and accelerate your coaching career confidently.
              Your pathway to professional achievement starts here, at
              BZSoftech.
            </p>
            <Image
              src={certification}
              alt="Streamlined path to ICF Credentialing"
              className={Styles.featureImage}
              fluid
            />
          </div>
        </Col>
        <Col md={5} className="d-flex align-items-stretch">
          <div className={Styles.featureBox}>
            <h3 className={Styles.featureTitle}>
              Trained by Certified Tech Coaches
            </h3>
            <p className={Styles.featureDescription}>
              Experience firsthand the guidance of certified tech coaches at
              BZSoftech. Our instructors bring real-world expertise to the
              classroom, offering personalized support tailored to your learning
              journey. With their mentorship, you'll master the latest
              technologies and cultivate the skills needed to thrive in the
              digital landscape. Join us and elevate your tech education with
              BZSoftech's expert coaching.
            </p>
            <Image
              src={coaches}
              alt="Trained by Certified Life Coaches"
              className={Styles.featureImage}
              fluid
            />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ProgramFeatures;
