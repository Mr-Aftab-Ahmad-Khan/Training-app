import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import ContactImg from "../../Assets/Pics/contact.jpeg";
import Avatar from "../../Assets/Pics/avatar.png";
import Styles from "./Contact.module.css";
import { IoCall } from "react-icons/io5";
import { FaMapMarkerAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { GoClockFill } from "react-icons/go";
import ContactForm from "../../Components/ContactForm/ContactForm";
const ContactUs = () => {
  return (
    <div className={Styles.bg_wrapper}>
     <section className={Styles.page_header}>
        <h1>Ways To Connect</h1>
      </section>
      <ContactForm />

    

      <Container fluid className={Styles.connect_section}>
      <div className={Styles.connect_section}>
      <div className={Styles.connect_content}>
        <h1>More Ways to Connect</h1>
        <p>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident. Image from
        </p>
      </div>
      <div className={Styles.connect_icons}>
        <span className={Styles.icon_block}>
          <IoCall size={50} />
          <h5>+92-304-20434-34</h5>
          <p>CALL TODAY</p>
        </span>
        <span className={Styles.icon_block}>
          <FaMapMarkerAlt size={50} />
          <h5>Some Address Here</h5>
          <p>ADDRESS</p>
        </span>
        <span className={Styles.icon_block}>
          <IoMdMail size={50} />
          <h5>bzSoftTech@gmail.com</h5>
          <p>MAIL US</p>
        </span>
        <span className={Styles.icon_block}>
          <GoClockFill size={50} />
          <h5>Mon — Fri 10:00 – 23:00</h5>
          <h5>Sat-Sun 10:00 – 19:00</h5>
          <p>OPENING HOURS</p>
        </span>
      </div>
    </div>
      </Container>
    </div>
  );
};

export default ContactUs;
