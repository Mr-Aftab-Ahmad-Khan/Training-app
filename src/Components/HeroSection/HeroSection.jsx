import React from "react";
import Styles from "./HeroSection.module.css";
import StyleHandler from './StyleHandler.css'
import Carousel from "react-bootstrap/Carousel";
import { Container, Row, Col } from "react-bootstrap";
const HeroSection = () => {
  return (
    <div>
      <Container fluid>
        <Carousel>
          <Carousel.Item>
            <div className= {`${Styles.bg} ${Styles.skewed} ${Styles.splitview}`}>
              <div className={`${Styles.panel} ${Styles.top}`}>
                <div className={Styles.content}>
                  <div className={Styles.description}>
                    <h1>The duotone image.</h1>
                    <p>
                      This is how the image looks like after applying a duotone
                      effect.
                    </p>
                  </div>
                </div>
              </div>
              <div className={Styles.handle} />
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className= {`${Styles.bg} ${Styles.skewed} ${Styles.splitview}`}>
              <div className={`${Styles.panel} ${Styles.top}`}>
                <div className={Styles.content}>
                  <div className={Styles.description}>
                    <h1>The duotone image.</h1>
                    <p>
                      This is how the image looks like after applying a duotone
                      effect.
                    </p>
                  </div>
                </div>
              </div>
              <div className={Styles.handle} />
            </div>
          </Carousel.Item>
        </Carousel>
      </Container>
    </div>
  );
};

export default HeroSection;
