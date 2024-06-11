import React from "react";
import Styles from "./HeroSection.module.css";
import StyleHandler from "./StyleHandler.css";
import Carousel from "react-bootstrap/Carousel";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div>
      <Container fluid>
        <Carousel>
          <Carousel.Item>
            <div
              className={`${Styles.slide_1} ${Styles.skewed} ${Styles.splitview}`}
            >
              <div className={`${Styles.panel} ${Styles.top}`}>
                <div className={Styles.content}>
                  <div className={Styles.description}>
                    <h3>Built Your future In AI</h3>
                    <p>
                      "We are thrilled to announce that enrollment for our
                      upcoming courses is now open! Don't miss this opportunity
                      to join a vibrant learning community and take your skills
                      to the next level. Secure your spot today and embark on a
                      journey of growth and discovery with us. Enroll now and be
                      a part of our success story!"
                    </p>
                    
                    <Link to='/courses'><button className={Styles.button}>
                      Apply Now
                      <svg
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        className={Styles.icon}
                      >
                        <path
                          clip-rule="evenodd"
                          d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
                          fill-rule="evenodd"
                        ></path>
                      </svg>
                    </button></Link>
                  </div>
                </div>
              </div>
              <div className={Styles.handle} />
            </div>
          </Carousel.Item>
      
          <Carousel.Item>
            <div
              className={`${Styles.slide_2} ${Styles.skewed} ${Styles.splitview}`}
            >
              <div className={`${Styles.panel} ${Styles.top}`}>
                <div className={Styles.content}>
                  <div className={Styles.description}>
                    <h1>Eager To Learn</h1>
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
            <div
              className={`${Styles.slide_3} ${Styles.skewed} ${Styles.splitview}`}
            >
              <div className={`${Styles.panel} ${Styles.top}`}>
                <div className={Styles.content}>
                  <div className={Styles.description}>
                    <h1>Eager To Learn</h1>
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
