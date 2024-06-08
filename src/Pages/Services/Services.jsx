import React from "react";
import ProductSlider from "../../Components/ProductSlider/ProductSlider";
import ServiceCard from "../../Components/ServicesCard/ServicesCard";
import { Container, Row, Col, Carousel, Button } from "react-bootstrap";
import Styles from "./Services.module.css";
import Projects from "../../Assets/Data/Projects";
// import ProjectImg from '../../Assets/Portfolio/DashBoard.png'
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <div>
      <ProductSlider />
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

      <Container className="my-5">
      <Row className="my-5">
        <Col md={3} >
          <h1>Our Latest Projects</h1>
        </Col>
        <Col md={9} className={Styles.carouselContainer}>
          <Carousel indicators={false} nextLabel="" prevLabel="">
            {Projects.map((project, index) => (
              <Carousel.Item key={index}>
                <Row>
                  <Col md={6}>
                    <div className={Styles.project_card}>
                      <img src={project.img} alt={project.title} />
                      <h4>{project.title}</h4>
                      <p>{project.description}</p>
                      <Link  to={`/ProjectDetail/${project.id}`} className={Styles.linkButton}>Read More</Link>
                      <hr className={Styles.underline} />
                    </div>
                  </Col>
                  {index + 1 < Projects.length && (
                    <Col md={6}>
                      <div className={Styles.project_card}>
                        <img src={project.img} alt={Projects[index + 1].title} />
                        <h4>{Projects[index + 1].title}</h4>
                        <p>{Projects[index + 1].description}</p>
                        <Link to={`/ProjectDetail/${project.id}`} className={Styles.linkButton}>Read More</Link>
                        <hr className={Styles.underline} />
                      </div>
                    </Col>
                  )}
                </Row>
              </Carousel.Item>
            ))}
          </Carousel>
        </Col>
      </Row>
    </Container>
      {/* <div className={Styles.carouselControls}>
              <button
                className={`${Styles.prevButton} ${Styles.carouselButton}`}
                aria-label="Previous slide"
                onClick={() => document.querySelector('.carousel-control-prev').click()}
              >
                &lt;
              </button>
              <button
                className={`${Styles.nextButton} ${Styles.carouselButton}`}
                aria-label="Next slide"
                onClick={() => document.querySelector('.carousel-control-next').click()}
              >
                &gt;
              </button>
            </div> */}
    </div>
  );
};

export default Services;

