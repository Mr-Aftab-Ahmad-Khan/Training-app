import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaRss } from "react-icons/fa";
import Styles from "./Footer.module.css";
import { Container, Row, Col } from "react-bootstrap";
import logo from '../../Assets/Pics/bzsoftech-logo.png'
const Footer = () => {
  return (
    <footer className={Styles.footer}>
      <Container>
        <Row>
          <Col md={4}>
            <img src={logo} alt="" width={400}/>
            <h1>About Company</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis nam
              eos quaerat possimus fugit eum!
            </p>
          </Col>
          <Col md={8}>
            <Row className={Styles.footerLinks}> {/* Added class for styling */}
              <Col md={4} className={Styles.footerIcons}> {/* Added class for styling */}
                <FaFacebook size={30} />
                <FaInstagram size={30} />
                <FaTwitter size={30} />
                <FaRss size={30} />
              </Col>
              <Col md={6} className={Styles.footerSnd}> {/* Added class for styling */}
                <div class={Styles.input_field}>
                  <input required="" name="text" type="text" placeholder="Email" /> 
                  
                </div>
                <button className={Styles.mailBtn}>Send</button>
              </Col>
            </Row>
            <Row>
              <Col md={4}>
                <h5>Solution</h5>
                <p>Digital Work</p>
                <p>Tech Assistance</p>
              </Col>
              <Col md={4}>
                <h5>Trending</h5>
                <p>Posts</p>
                <p>Posts</p>
                <p>Posts</p>
              </Col>
              <Col md={4}>
                <h5>Company</h5>
                <p>About</p>
                <p>Events</p>
                <p>Contact</p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
      <div className="copyRightLine">&copy; 2024 Your Company Name. All rights reserved.</div>
    </footer>
  );
};

export default Footer;
