import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import Styles from'./NavBar.module.css';
import { Link } from 'react-router-dom';

const ModernNavbar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand to="/">BZ Soft Tech</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="custom-toggler" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link to="/" className={Styles.nav_link}>Home</Link>
            <Link to="Courses" className={Styles.nav_link}>Courses</Link>
            <Link to="/Blog" className={Styles.nav_link}>Latest Blog</Link>
            <Link to="/about" className={Styles.nav_link}>About</Link>
            <Link to="/ContactUs" className={Styles.nav_link}>Contact</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default ModernNavbar;