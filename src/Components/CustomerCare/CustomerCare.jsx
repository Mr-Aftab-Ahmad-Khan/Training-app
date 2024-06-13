import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Styles from "./CustomerCare.module.css";

const CustomerCare = () => {
  return (
    <Container className={Styles.care_container}>
      <Row className="align-items-center"> {/* Center alignment of content */}
        <Col md={8}>
          <div className={Styles.care_content}>
            <span className={Styles.bar}></span>
            <p>Get Our Best Service</p>
            <span className={Styles.care_deco}>
              <h1>From Customer Care</h1>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod,
                tempora. 
                <h5>+923-46734-748</h5>
              </p>
              <Button variant="light">Free Call</Button>
            </span>
          </div>
        </Col>
        <Col md={4} className={Styles.care_img}>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLYqPgO44zhyI3pECBlPzuAjj7N7lZlBK_AQ&s"
            alt="Customer Care"
          />
        </Col>
      </Row>
    </Container>
  );
};

export default CustomerCare;
