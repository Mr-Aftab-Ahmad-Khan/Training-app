import React from "react";
import styles from "./ServiceCard.module.css"; // Import the CSS module
import { Container, Row, Col } from "react-bootstrap";
import ui from "../../Assets/Pics/userinterface.png";
import oa from "../../Assets/Pics/oracleapex.png";
import seo from "../../Assets/Pics/SEO.png";
import wd from "../../Assets/Pics/WD.png";
import erp from "../../Assets/Pics/erp.png";
import eg from "../../Assets/Pics/egilesoft.png";

const ServicesCard = () => {
  return (
    <Container className={styles.container}>
      <h1 className={`text-center my-5 ${styles.title}`}>Our Services</h1>
      <Row>
        <Col md={4}>
          <div className={styles.flipCard}>
            <div className={styles.flipCardInner}>
              <div className={styles.flipCardFront}>
                <img
                  src={ui}
                  alt="UI/UX Design"
                  className={styles.cardImage}
                />
              </div>
              <div className={styles.flipCardBack}>
                <h1>UI/UX Design</h1>
                <p>Creating intuitive and beautiful user interfaces.</p>
              </div>
            </div>
          </div>
        </Col>
        <Col md={4}>
          <div className={styles.flipCard}>
            <div className={styles.flipCardInner}>
              <div className={styles.flipCardFront}>
                <img
                  src={oa}
                  alt="Oracle APEX"
                  className={styles.cardImage}
                />
              </div>
              <div className={styles.flipCardBack}>
                <h1>Oracle APEX</h1>
                <p>Developing robust applications with Oracle APEX.</p>
              </div>
            </div>
          </div>
        </Col>
        <Col md={4}>
          <div className={styles.flipCard}>
            <div className={styles.flipCardInner}>
              <div className={styles.flipCardFront}>
                <img
                  src={seo}
                  alt="SEO"
                  className={styles.cardImage}
                />
              </div>
              <div className={styles.flipCardBack}>
                <h1>SEO</h1>
                <p>Optimizing your site for search engines.</p>
              </div>
            </div>
          </div>
        </Col>
      </Row>
      <Row className="my-5">
        <Col md={4}>
          <div className={styles.flipCard}>
            <div className={styles.flipCardInner}>
              <div className={styles.flipCardFront}>
                <img
                  src={wd}
                  alt="Web Development"
                  className={styles.cardImage}
                />
              </div>
              <div className={styles.flipCardBack}>
                <h1>Web Development</h1>
                <p>Building modern and responsive websites.</p>
              </div>
            </div>
          </div>
        </Col>
        <Col md={4}>
          <div className={styles.flipCard}>
            <div className={styles.flipCardInner}>
              <div className={styles.flipCardFront}>
                <img
                  src={erp}
                  alt="ERP Systems"
                  className={styles.cardImage}
                />
              </div>
              <div className={styles.flipCardBack}>
                <h1>ERP Systems</h1>
                <p>Integrating enterprise resource planning solutions.</p>
              </div>
            </div>
          </div>
        </Col>
        <Col md={4}>
          <div className={styles.flipCard}>
            <div className={styles.flipCardInner}>
              <div className={styles.flipCardFront}>
                <img
                  src={eg}
                  alt="Agile Software Development"
                  className={styles.cardImage}
                />
              </div>
              <div className={styles.flipCardBack}>
                <h1>Agile Software Development</h1>
                <p>Delivering software solutions with agility.</p>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ServicesCard;
