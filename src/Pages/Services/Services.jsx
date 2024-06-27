import React from "react";
import ProductSlider from "../../Components/ProductSlider/ProductSlider";
import ServiceCard from "../../Components/ServicesCard/ServicesCard";
import { Container, Row, Col, Carousel, Button } from "react-bootstrap";
import Styles from "./Services.module.css";
import Projects from "../../Assets/Data/Projects";
import { Link } from "react-router-dom";
import ProjectsTab from "../../Components/Projects/ProjectsTab";

const Services = () => {
  return (
    <div className={Styles.overflowHiden}>
     <section className={Styles.page_header}>
        <h1>Our Portfolio</h1>
      </section>
      <div>
        <ProductSlider />
      </div>
      <ServiceCard />

      <Container className={Styles.methodology}>
        <Row>
          <Col md={4} className={Styles.right_text}>
            <span>
              <h1>Working process</h1>
              <p>
                Our IT consulting process is a systematic journey comprising
                four stages: Assessment and Analysis, Planning, Implementation
                and Execution, and Monitoring and Optimization.
              </p>
            </span>
          </Col>
          <Col md={8} className={Styles.circle_container}>
            <div className={Styles.circle_1}>
              <h4>01</h4>
              <h3>Analysis and Planning</h3>
              <p>
                The process begins by thoroughly understanding the client's
                objectives.
              </p>
            </div>
            <div className={Styles.circle_2}>
              <h4>02</h4>
              <h3>Analysis and Planning</h3>
              <p>
                The process begins by thoroughly understanding the client's
                objectives.
              </p>
            </div>
            <div className={Styles.circle_3}>
              <h4>03</h4>
              <h3>Analysis and Planning</h3>
              <p>
                The process begins by thoroughly understanding the client's
                objectives.
              </p>
            </div>
            <div className={Styles.circle_4}>
              <h4>04</h4>
              <h3>Analysis and Planning</h3>
              <p>
                The process begins by thoroughly understanding the client's
                objectives.
              </p>
            </div>
          </Col>
        </Row>
      </Container>

      <ProjectsTab />
    </div>
  );
};

export default Services;
