import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ContactForm.css"; // Custom CSS file for additional styling
import { IoHomeSharp } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMail } from "react-icons/io5";

const ContactForm = () => {
<<<<<<< HEAD
 

  return (
    <Container className="contact-container">
      <Row className="contact-row">
        <Col md={6} className="contact-form-section">
          <h3>Send us a message</h3>
          <Form>
            <Row>
              <Col md={6} className="mb-3">
                <Form.Group controlId="formName">
                  <Form.Label>Name *</Form.Label>
                  <Form.Control type="text" placeholder="Your name" />
                </Form.Group>
              </Col>
              <Col md={6} className="mb-3">
                <Form.Group controlId="formEmail">
                  <Form.Label>Email *</Form.Label>
                  <Form.Control type="email" placeholder="Your email" />
                </Form.Group>
              </Col>
=======
    return (
        <Container className="contact-container">
            <Row className="contact-row">
                <Col md={6} className="contact-form-section">
                    <h3>Send us a message</h3>
                    <Form>
                        <Row>
                            <Col md={6} className="mb-3">
                                <Form.Group controlId="formName">
                                    <Form.Label>Name *</Form.Label>
                                    <Form.Control type="text" placeholder="Your name" />
                                </Form.Group>
                            </Col>
                            <Col md={6} className="mb-3">
                                <Form.Group controlId="formEmail">
                                    <Form.Label>Email *</Form.Label>
                                    <Form.Control type="email" placeholder="Your email" />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={6} className="mb-3">
                                <Form.Group controlId="formPhone">
                                    <Form.Label>Phone</Form.Label>
                                    <Form.Control className="hide_arrow" type="number"  minlength="12" maxlength="12" placeholder="+92" />
                                </Form.Group>
                            </Col>
                            <Col md={6} className="mb-3">
                                <Form.Group controlId="formSubject">
                                    <Form.Label>Subject</Form.Label>
                                    <Form.Control type="text" placeholder="Subject" />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Form.Group controlId="formMessage" className="mb-3">
                            <Form.Label>Message *</Form.Label>
                            <Form.Control as="textarea" rows={3} placeholder="Write your message" />
                        </Form.Group>
                        <Button variant="primary" type="submit" className="send-button">
                            SUBMIT
                        </Button>
                    </Form>
                </Col>
                <Col md={6} className="contact-info-section">
                    <h3>Contact Information</h3>
                    <p>Need assistance? Our team is just a message away.</p>
                    <div className="contact-info">
                        <p><IoHomeSharp size={30} /> United Plaza Faisalabad - Sheikhupura - Lahore Road</p>
                        <p><FaPhoneAlt size={30} /> +92 324 7730 410</p>
                        <p><IoMail size={30} /> info@bzsoftech.com</p>
                    </div>
                </Col>
>>>>>>> 2b68d885bda79946cc55ec9792f99d9d48d069f7
            </Row>
            <Row>
              <Col md={5} className="mb-3">
                <Form.Group controlId="formPhone">
                  <Form.Label>Phone</Form.Label>
                  <Form.Control type="text" placeholder="Phone #" />
                </Form.Group>
              </Col>
              <Col md={6} className="mb-3">
                <Form.Group controlId="formSubject">
                  <Form.Label>Subject</Form.Label>
                  <Form.Control type="text" placeholder="Subject" />
                </Form.Group>
              </Col>
            </Row>
            <Form.Group controlId="formMessage" className="mb-3">
              <Form.Label>Message *</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Write your message"
              />
            </Form.Group>
            <Button variant="primary" type="submit" className="send-button">
              Send Message
            </Button>
          </Form>
        </Col>
        <Col md={6} className="contact-info-section">
          <h3>Contact Information</h3>
          <p>Need assistance? Our team is just a message away.</p>
          <div className="contact-info">
            <p>
              <IoHomeSharp size={30} /> United Plaza Faisalabad - Sheikhupura -
              Lahore Road
            </p>
            <p>
              <FaPhoneAlt size={30} /> +92 324 7730 410
            </p>
            <p>
              <IoMail size={30} /> info@bzsoftech.com
            </p>
          
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactForm;
