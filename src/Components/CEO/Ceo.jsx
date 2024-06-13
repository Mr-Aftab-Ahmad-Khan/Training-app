import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Styles from "./Ceo.module.css";
import './Ceo.module.css'
const Ceo = () => {
  return (
    <>
      <Container fluid className={Styles.ceo_container}>
        <Row>
          <Col md={12}>
            <h1>
              <span className={Styles.message}> Message </span>  From 
               <span className={Styles.ceo}>CEO</span> of SofTech
            </h1>
          </Col>
        </Row>
        <Row>
          <Col md={5} className={Styles.img_container}>
            <div >
              <img
                src="https://images.unsplash.com/photo-1605599355426-c671ba78fdab?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGNlb3xlbnwwfDF8MHx8fDA%3D"
                alt=""
                className={Styles.img_style}
              />
              <div className={Styles.bar_1}></div>
              <div className={Styles.bar_2}></div>
            </div>
          </Col>
          <Col md={7} >
            <h1 className={Styles.title}>Message From Our CEO</h1>
            <p className={Styles.ceo_message}>
              First and foremost, I want to extend my deepest gratitude to each
              and every one of you. Your dedication, creativity, and hard work
              have been the driving force behind our success. SofTech’s mission
              has always been to innovate and lead in the tech industry, and it
              is your relentless pursuit of excellence that keeps us at the
              forefront. I am incredibly excited about what lies ahead and
              confident that, together, we will continue to achieve great
              things. Let’s keep pushing boundaries, embracing challenges, and
              striving for excellence.
            </p>
            <span className={Styles.ceo_footer}>
            <h3>Awais Majeed</h3>
            <p>CEO & Founder</p>
            </span>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Ceo;
{
  /* <div className={Styles.bg}>
      <Container>
        <h1 className={Styles.heading}>Message from CEO About Company</h1>
        <Row className="align-items-center">
          <Col lg={6} className={Styles.imageCol}>
            <img
              src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y2VvfGVufDB8MXwwfHx8Mg%3D%3D"
              className={Styles.img}
              alt="CEO"
            />
          </Col>
          <Col lg={6}>
            <div className={Styles.text } >
            
              <p className={Styles.quote}>  
                <h3 className={Styles.message} >CEO Message</h3>
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
    </div> */
}
