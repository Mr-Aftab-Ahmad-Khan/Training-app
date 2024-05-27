import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import ContactImg from "../../Assets/Pics/contact.jpeg";
import Avatar from "../../Assets/Pics/ava.png";
import Styles from "./Contact.module.css";
import { IoCall } from "react-icons/io5";
import { FaMapLocationDot } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { GoClockFill } from "react-icons/go";
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
            <p>
              WE REALIZE THAT YOU LEAD A BUSY LIFE, SO WE HAVE MADE IT EASY FOR
              YOU TO DROP OFF YOUR VEHICLE 24/7.
            </p>
            <h2>
              <IoCall /> +92-304-20434-34
            </h2>
          </Col>
        </Row>
      </Container>

      <Container fluid className={Styles.connect_section}>
 <div className={Styles.connect_content}>
        <h1>More Way to Connect</h1>
        <p>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident. Image from
        </p>
        </div>
        <div className={Styles.connect_icons}>
          <span className={Styles.call}>
            <h6>
              <IoCall size={50} />
            </h6>
            <h5> +92-304-20434-34</h5>
            <p>CALL TODAY</p>
          </span>
          <span className={Styles.address}>
            <h2>
              <FaMapLocationDot size={50} />
            </h2>
            <h5> +92-304-20434-34</h5>
            <p>Address</p>
          </span>
          <span className={Styles.mail}>
            <h2>
              <IoMdMail size={50} />
            </h2>
            <h5> bzSoftTech@gmail.com</h5>
            <p>Mail Us</p>
          </span>
          <span className={Styles.hours}>
            <h2>
              <GoClockFill size={50} />
            </h2>
            <h5> Mon — Fri 10:00 – 23:00 </h5>
            <h5> Sut-Sun- 10:00 – 19:00</h5>
            <p>OPENING HOURS</p>
          </span>
        </div>
      </Container>
    </div>
  );
};

export default ContactUs;
