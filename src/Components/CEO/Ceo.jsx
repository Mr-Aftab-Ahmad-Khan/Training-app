import React from "react";
import Styles from "./Ceo.module.css";
import ceoImage from "../../Assets/Pics/profile.jpg"; // Adjust the path to your image
import { GiTechnoHeart } from "react-icons/gi";
import { PiShirtFoldedFill } from "react-icons/pi";
import { MdOutlineAttractions } from "react-icons/md";
import { BiNetworkChart } from "react-icons/bi";
import { GrUserExpert } from "react-icons/gr";
import { Col, Container, Row } from "react-bootstrap";

const Ceo = () => {
 
  return (
    <Container className={Styles.ceo_section}>
      <Row>
        <Col md={8} className="my-5">
          <Row>
            <Col>
              <h2 className={Styles.ceo_title}>Meet the CEO</h2>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className={Styles.shadow}>
                <div className={Styles.ceo_info}>
                  <div className={Styles.side_line}></div>
                  <div className={Styles.ceo_icon_text}>
                  
                      <GiTechnoHeart size={150} color="#149092" className={`${Styles.ceo_icon} `} />
                 
                    <p className={Styles.ceo_description}>
                      Lorem ipsum dolor sit amet, nec sint salutandi ea, pro libris lobortis id. Sed id eros percipit scribentur. Sanctus deseruisse nam ei. Affert phaedrum nam id, ei dictas nusquam molestiae pro, assentior deseruisse duo et. Duo graeci fabellas id, vim adhuc expetenda ex, ea brute lorem duo.
                    </p>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className={Styles.circles}>
                <div className={Styles.circle}>
                  <PiShirtFoldedFill size={30} color="#149092" />
                  <p>Lead</p>
                </div>
                <div className={Styles.circle}>
                  <BiNetworkChart size={30} color="#149092" />
                  <p>Network</p>
                </div>
                <div className={Styles.circle}>
                  <MdOutlineAttractions size={30} color="#149092" />
                  <p>Traction</p>
                </div>
                <div className={Styles.circle}>
                  <GrUserExpert size={30} color="#149092" />
                  <p>Expertise</p>
                </div>
              </div>
            </Col>
          </Row>
        </Col>
        <Col md={4} className={Styles.ceo_image_container}>
          <div className={Styles.ceo_image_wrapper}>
            <img src={ceoImage} alt="Awais Majeed" className={Styles.ceo_image} />
            <div className={Styles.ceo_name_bar}>
              <h6 className={Styles.ceo_name}>CEO Awais Majeed</h6>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Ceo;
