import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import ContactImg from "../../Assets/Pics/contact.jpeg";
import Avatar from "../../Assets/Pics/ava.png";
import Styles from "./Contact.module.css";
import { IoCall } from "react-icons/io5";
const ContactUs = () => {
  return (
    <div className={Styles.bg_wrapper}>
      <h1>Contact Us</h1>
      <Container>
        <Row>
          <Col md={6}>
            <Form className={Styles.form_handler}>
              
              <Form.Group className="mb-3" controlId="formBasicFName">
                <Form.Label>First Name</Form.Label>
                <Form.Control type="text" placeholder="First Name" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicLName">
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="text" placeholder="Last Name" />
              </Form.Group>
              
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicContact">
                <Form.Label>Contact</Form.Label>
                <Form.Control type="number" placeholder="Contact" />
              </Form.Group>

              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>More to Say </Form.Label>
                <Form.Control as="textarea" rows={3} />
              </Form.Group>

              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>

<Container className={Styles.contact_banner}>
    <Row>
        <Col md={4} className={Styles.padder}>
            <img src={Avatar} alt="" />
        </Col>
        <Col md={6}>
          <p>WE REALIZE THAT YOU LEAD A BUSY LIFE, SO WE HAVE MADE IT EASY FOR YOU TO DROP OFF YOUR VEHICLE 24/7.</p>
        <h2><IoCall /> +92-304-20434-34</h2>
        </Col>
    </Row>
</Container>

    </div>
  );
};

export default ContactUs;
