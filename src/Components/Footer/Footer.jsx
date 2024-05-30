import React from "react";
import { Container, Row, Col, Button, Table } from "react-bootstrap";
import {
  FaHome,
  FaEnvelope,
  FaPhone,
  FaPrint,
  FaFacebookF,
  FaDribbble,
  FaTwitter,
  FaGooglePlusG,
  FaGraduationCap,
  FaBloggerB,
  FaInfoCircle,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer
      className="text-white text-center text-lg-start"
      style={{ backgroundColor: "#23242a", width: "100%" }}
    >
      <Container className="p-4">
        <Row className="mt-4 d-flex justify-content-between">
          <Col lg={4} className="mb-4 mb-lg-0">
            <h5 className="text-uppercase mb-4">About company</h5>
            <p>
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium voluptatum deleniti atque corrupti.
            </p>
            <p>
              Blanditiis praesentium voluptatum deleniti atque corrupti quos
              dolores et quas molestias.
            </p>
            <div className="mt-4 d-flex justify-content-around">
              <Button variant="warning" className="btn-floating btn-lg">
                <FaFacebookF />
              </Button>
              <Button variant="warning" className="btn-floating btn-lg">
                <FaDribbble />
              </Button>
              <Button variant="warning" className="btn-floating btn-lg">
                <FaTwitter />
              </Button>
              <Button variant="warning" className="btn-floating btn-lg">
                <FaGooglePlusG />
              </Button>
            </div>
          </Col>
          <Col lg={4} className="mb-4 mb-lg-0">
            <h5 className="text-uppercase mb-4">Opening hours</h5>
            <Table
              striped
              bordered
              hover
              variant="dark"
              className="text-center"
            >
              <tbody className="font-weight-normal">
                <tr>
                  <td>Mon - Thu:</td>
                  <td>8am - 9pm</td>
                </tr>
                <tr>
                  <td>Fri - Sat:</td>
                  <td>8am - 1am</td>
                </tr>
                <tr>
                  <td>Sunday:</td>
                  <td>9am - 10pm</td>
                </tr>
              </tbody>
            </Table>
          </Col>
          <Col lg={4}>
            <h5 className="text-uppercase mb-4">Contact info</h5>
            <ul className="list-unstyled">
              <li className="mb-3">
                <FaHome className="me-2" />
                United Plaza Faisalabad – Sheikhupura – Lahore Road
              </li>
              <li className="mb-3">
                <FaEnvelope className="me-2" />
                info@bzsoftech.com
              </li>
              <li className="mb-3">
                <FaPhone className="me-2" /> +92 324 7730 410
              </li>
            </ul>
          </Col>
        </Row>
        <Row className="mt-4 d-flex justify-content-center">
          <Col>
            <h5 className="text-uppercase mb-4">Useful Links</h5>
            <nav className="nav justify-content-center">
              <Link className="nav-link text-warning" to="#">
                <FaHome size={24} className="me-2" /> Home
              </Link>
              <Link className="nav-link text-warning" to="#">
                <FaGraduationCap size={24} className="me-2" /> Courses
              </Link>
              <Link className="nav-link text-warning" to="#">
                <FaBloggerB size={24} className="me-2" /> Blog
              </Link>
              <Link className="nav-link text-warning" to="#">
                <FaInfoCircle size={24} className="me-2" /> About
              </Link>
              <Link className="nav-link text-warning" to="#">
                <FaPhone size={24} className="me-2" /> Contact
              </Link>
            </nav>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
