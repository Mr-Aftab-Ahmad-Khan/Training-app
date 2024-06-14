import React from "react";
import { Navbar, Nav, Container, Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { FaUserCircle } from "react-icons/fa";
import Styles from "./NavBar.module.css";

const ModernNavbar = () => {
  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();
  // const userRole = user?.[`${process.env.REACT_APP_METADATA_NAMESPACE}/role`];
  const roles = user && user["http://localhost:3000"];
  const isAdmin = Array.isArray(roles) && roles.includes("admin");
  console.log("isAdmin:", isAdmin);
  console.log("roles:", roles);
  
 return (
    <Navbar
      bg="dark"
      variant="dark"
      expand="lg"
      sticky="top"
      className={Styles.navbar}
    >
      <Container>
        <Navbar.Brand as={Link} to="/" className={Styles.brand}>
          BZ Soft Tech
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          className={Styles.custom_toggler}
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {/* Admin Role Check */}
              <Link to="/admin" className={Styles.nav_link}>
                Dashboard
              </Link>

            <Link to="/" className={Styles.nav_link}>
              Home
            </Link>
            <Link to="/Courses" className={Styles.nav_link}>
              Courses
            </Link>
            <Link to="/Blog" className={Styles.nav_link}>
              Latest Blog
            </Link>
            <Link to="/Service" className={Styles.nav_link}>
              Service
            </Link>
            <Link to="/about" className={Styles.nav_link}>
              About
            </Link>
            <Link to="/ContactUs" className={Styles.nav_link}>
              Contact
            </Link>
            {isAuthenticated ? (
              <Dropdown align="end" className={Styles.profile_dropdown}>
                <Dropdown.Toggle className={Styles.profile_toggle}>
                  <FaUserCircle className={Styles.profile_icon} />
                  <span className={Styles.user_name}>{user.name}</span>
                </Dropdown.Toggle>
                <Dropdown.Menu className={Styles.dropdown_menu}>
                  <Dropdown.Item
                    onClick={() => logout({ returnTo: window.location.origin })}
                  >
                    Log Out
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
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
