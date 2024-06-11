import React from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import  Styles from './SubscriptionForm.module.css'; // Custom CSS for additional styling

const SubscriptionForm = () => {
  return (
    <Container className={Styles.subscription_form_container}>
      <Row className="justify-content-center align-items-center">
        <Col md={4} className={Styles.text_center}>
          <Card className="p-3">
            <Card.Img 
              variant="top" 
              src="https://cdn-icons-png.flaticon.com/512/281/281769.png" 
              className="img-fluid subscription_img" 
              alt="Subscribe" 
            />
          </Card>
        </Col>
        <Col md={4}>
          <h2>Get Connected To US!</h2>
          <p>Ask For Qoute</p>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <div className="d-flex">
                <Form.Control 
                  type="email" 
                  placeholder="Your email" 
                  className="me-2"
                />
                <Button variant="primary" type="submit">
                  Send
                </Button>
              </div>
            </Form.Group>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default SubscriptionForm;
