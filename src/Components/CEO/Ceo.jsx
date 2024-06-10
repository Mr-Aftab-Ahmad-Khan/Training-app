import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Styles from "./Ceo.module.css";

const Ceo = () => {
  return (
    <div className={Styles.bg}>
      <Container>
        <Row className="align-items-center">
          <Col lg={6} className={Styles.imageCol}>
            <img
              src="https://images.unsplash.com/photo-1593104547489-5cfb3839a3b5?q=80&w=1453&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className={Styles.img}
              alt="CEO"
            />
          </Col>
          <Col lg={6}>
            <div className={Styles.text } >
            
              <p className={Styles.quote}>  
                <h3>CEO Message</h3>
                <b>
                  "Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Cumque necessitatibus cupiditate perferendis qui laboriosam
                  autem eligendi sint eos provident! Eum nobis at necessitatibus
                  impedit aliquam. Illum laboriosam voluptatum pariatur
                  obcaecati ut, incidunt enim iste voluptate nemo, rem
                  veritatis. Voluptas Lorem ipsum dolor sit amet."
                </b>
              </p>
              <div className={Styles.ceoInfo}>
                <b>Awais Majeed</b>
                <p>CEO</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Ceo;
