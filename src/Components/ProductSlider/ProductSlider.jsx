import React from "react";
import Carousel from "react-bootstrap/Carousel";

import Styles from "./ProductSlider.module.css";

import slide1 from "../../Assets/Portfolio/DashBoard.png";
import slide2 from "../../Assets/Portfolio/dashboard2.png";
import slide3 from "../../Assets/Portfolio/new_order.png";
import slide4 from "../../Assets/Portfolio/rs1.png";
import slide5 from "../../Assets/Portfolio/salary.png";
import slide6 from "../../Assets/Portfolio/shift_shedular.png";
import slide7 from "../../Assets/Portfolio/sp1.png";
import slide8 from "../../Assets/Portfolio/zt6.png";

import { Container, Row, Col } from "react-bootstrap";

const ProductSlider = () => {
  return (
    <Container className={Styles.space_above}>
      <Row>
        <Col md={12} className="text-dark">
          <Carousel>
            <Carousel.Item>
              <img src={slide1} alt="" />
            </Carousel.Item>
            <Carousel.Item>
              <img src={slide2} alt="" />
            </Carousel.Item>
            <Carousel.Item>
              <img src={slide3} alt="" />
            </Carousel.Item>
            <Carousel.Item>
              <img src={slide4} alt="" />
            </Carousel.Item>
            <Carousel.Item>
              <img src={slide5} alt="" />
            </Carousel.Item>
            <Carousel.Item>
              <img src={slide6} alt="" />
            </Carousel.Item>
            <Carousel.Item>
              <img src={slide7} alt="" />
            </Carousel.Item>
            <Carousel.Item>
              <img src={slide8} alt="" />
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductSlider;
