import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Styles from "./Ceo.module.css";
const Ceo = () => {
  return (
    <div>
      <Container className={Styles.bg}>
        <Row>
          <Col lg={6} >
            <img
              src="https://images.unsplash.com/photo-1593104547489-5cfb3839a3b5?q=80&w=1453&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
               className={Styles.img}
              alt="" />  
          </Col>
          <Col lg={6}>
            <div className={Styles.text}>
            <p>
              <b>"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque
              necessitatibus cupiditate perferendis qui laboriosam autem
              eligendi sint eos provident! Eum nobis at necessitatibus impedit
              aliquam. Illum laboriosam voluptatum pariatur obcaecati ut,
              incidunt enim iste voluptate nemo, rem veritatis. Voluptas " Lorem ipsum dolor sit amet.</b>
              </p>
             <b>Awais Majeed</b>
             <p>CEO</p>

            </div>
          </Col>
        
        </Row>
      </Container>
    </div>
  );
};

export default Ceo;