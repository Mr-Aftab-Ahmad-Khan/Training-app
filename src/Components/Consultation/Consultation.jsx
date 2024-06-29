import React from "react";
import Styles from "./Consultation.module.css";
import { FaLongArrowAltRight } from "react-icons/fa";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
const Consultation = () => {
  return (
    <Container className="mb-5">
      <h2 className="text-center m-5">
        Get Qoute Offering <FaLongArrowAltRight />
      </h2>
      <Row>
        <Col>
          <Row>
            <Col md={6}>
              <div className={Styles.consult_card}>
                <div className={Styles.circle}></div>
                <div className={Styles.content}>
                  <h1>Oracle Services</h1>
                  <p>Get Qoute Offer for Oracle Service.</p>
                </div>
                <img
                  src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                />
              </div>
            </Col>
            <Col md={6}>
              <div className={Styles.consult_card_2}>
                <div className={Styles.circle}></div>
                <img
                  src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                />
                <div className={Styles.content_2}>
                  <h1>Apex Product</h1>
                  <p>Get Qoute Offer for Apex Service</p>
                </div>
              </div>
            </Col>
            <Col md={6} className="mt-2">
              <div className={Styles.consult_card_3}>
                <div className={Styles.circle}></div>
                <div className={Styles.content_3}>
                  <h1>WEB Services</h1>
                  <p>Get Qoute Offer for WEB Service</p>
                </div>
                <img
                  src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                />
              </div>
            </Col>
            <Col md={6} className="mt-2">
              <div className={Styles.consult_card_2}>
                <div className={Styles.circle}></div>
                <img
                  src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                />
                <div className={Styles.content_2}>
                  <h1>UI/UX Creative Design</h1>
                  <p>We Offer UI UX Service</p>
                </div>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
      <Link to='/ContactUs'>
      <div className="d-flex justify-content-center align-items-center mt-5">
      <button className={Styles.qoute_btn}>Consult an Idea</button>
    </div>
    </Link>
    </Container>
  );
};

export default Consultation;
