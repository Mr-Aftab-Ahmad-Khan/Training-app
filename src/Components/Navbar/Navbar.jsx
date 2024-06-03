import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import Styles from "./NavBar.module.css";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const ModernNavbar = () => {
  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();
  const userRole = user?.[`${process.env.REACT_APP_METADATA_NAMESPACE}/role`];

  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top" className={Styles.navbar}>
      <Container>
        <Navbar.Brand as={Link} to="/" className={Styles.brand}>
          BZ Soft Tech
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className={Styles.custom_toggler} />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link to="/" className={Styles.nav_link}>Home</Link>
            <Link to="/Courses" className={Styles.nav_link}>Courses</Link>
            <Link to="/Blog" className={Styles.nav_link}>Latest Blog</Link>
            <Link to="/about" className={Styles.nav_link}>About</Link>
            <Link to="/ContactUs" className={Styles.nav_link}>Contact</Link>
            {isAuthenticated && (
              <span className={Styles.nav_link}>
                <p className={Styles.user_name}>{user.name}</p>
                {console.log(userRole)}
              </span>
            )}
            {isAuthenticated ? (
              <button
                className={Styles.login_button}
                onClick={() =>
                  logout({ returnTo: window.location.origin })
                }
              >
                <span className={Styles.button_content}>Log Out</span>
              </button>
            ) : (
              <button
                onClick={() => loginWithRedirect()}
                className={Styles.login_button}
              >
                <span className={Styles.button_content}>Log In</span>
              </button>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default ModernNavbar;