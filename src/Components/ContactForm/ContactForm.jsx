import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ContactForm.css"; // Custom CSS file for additional styling
import { IoHomeSharp } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { useLocation } from "react-router-dom";
import emailjs from "emailjs-com";

const ContactForm = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const id = queryParams.get("id");
  const title = queryParams.get("title");
  console.log(title);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    phone: "",
    subject: title || "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("aftabahmad.bzsoftech", "template_4wmrc3p", e.target, "GugMPtof6DeJEjr7C")
      .then((result) => {
        console.log("Email sent successfully:", result.text);
        alert("Email sent successfully!");
      })
      .catch((error) => {
        console.error("Error sending email:", error);
        alert("An error occurred while sending the email.");
      });
  };

  return (
    <Container className="contact-container">
      <Row className="contact-row">
        <Col md={6} className="contact-form-section">
          <h3>Send us a message</h3>
          <Form onSubmit={handleSubmit}>
            <Row>
              <Col md={6} className="mb-3">
                <Form.Group controlId="formName">
                  <Form.Label>Name *</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Your name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
              </Col>
              <Col md={6} className="mb-3">
                <Form.Group controlId="formEmail">
                  <Form.Label>Email *</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Your email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md={6} className="mb-3">
                <Form.Group controlId="formPhone">
                  <Form.Label>Phone</Form.Label>
                  <Form.Control
                    className="hide_arrow"
                    type="number"
                    placeholder="+92"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </Form.Group>
              </Col>
              <Col md={6} className="mb-3">
                <Form.Group controlId="formSubject">
                  <Form.Label>Subject</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    readOnly={!!title} // Make the subject field read-only if title is passed
                  />
                </Form.Group>
              </Col>
            </Row>
            <Form.Group controlId="formMessage" className="mb-3">
              <Form.Label>Message *</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Write your message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Button
              variant="primary"
              type="submit"
              className="send-button"
            >
              SUBMIT
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
