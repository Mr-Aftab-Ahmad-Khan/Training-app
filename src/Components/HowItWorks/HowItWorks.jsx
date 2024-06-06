import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import Styles from './HowItWorks.module.css';

const HowItWorks = () => {
  return (
    <Container className="py-5">
      <h1 className={`text-center mb-5 ${Styles.deco}`}>How does it work?</h1>
      <Row>
        <Col md={4}>
          <Card className={Styles.stepCard}>
            <Card.Body>
              
              <Card.Title className={Styles.stepTitle}><span className={Styles.stepNumber}>1</span>Apply for Enrollment</Card.Title>
              <Card.Text className={Styles.stepDescription}>
                With cohort sizes limited to 14, courses tend to fill 2 weeks before start dates. An application saves your spot while admissions processes your application, which typically takes three business days.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
        <Card className={`${Styles.stepCard} ${Styles.stepShape}`}>
            <Card.Body>
             
              <Card.Title className={Styles.stepTitle}> <span className={Styles.stepNumber}>2</span>Earn Your Certificate</Card.Title>
              <Card.Text className={Styles.stepDescription}>
                By completing your core coursework and your mentor coaching hours (a requirement for ICF and Health Board Certification included in every core coaching package), you will be on your way to an ICF or NBHWC credential.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
        <Card className={`${Styles.stepCard} ${Styles.stepShape2}`}>
            <Card.Body>
              <Card.Title className={Styles.stepTitle}> <span className={Styles.stepNumber}>3</span>Build Your Business</Card.Title>
              <Card.Text className={Styles.stepDescription}>
                Throughout your training and beyond, CTEDU offers support in helping you establish your coaching business or building a coaching department in house.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <div className="text-center mt-4">
        <Button variant="primary" className={Styles.getStartedButton}>Get Started for Free</Button>
      </div>
    </Container>
  );
};

export default HowItWorks;
