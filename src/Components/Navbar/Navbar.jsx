import React, { useEffect, useState } from "react";
import { Navbar, Nav, Container, Dropdown } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import { FaUserCircle, FaBars, FaTimes } from "react-icons/fa";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { useKindeAuth } from "@kinde-oss/kinde-auth-react";
import Styles from "./NavBar.module.css";
import logo from "../../Assets/Pics/bzsoftech-logo.png";

const ModernNavbar = () => {
  const { login, logout, isAuthenticated, user } = useKindeAuth();
  const [expanded, setExpanded] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [activeLink, setActiveLink] = useState("");
  const location = useLocation();

  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location]);

  useEffect(() => {
    if (isAuthenticated && user?.id === 'kp_b3bfcfd0cb2840388989f37c18948c74') {
      setIsAdmin(true);
    } else {
      setIsAdmin(false);
    }
  }, [isAuthenticated, user]);

  const handleToggle = () => {
    setExpanded(!expanded);
  };

  const handleLinkClick = (path) => {
    setActiveLink(path);
    setExpanded(false);
  };

  return (
    <Navbar
      bg="dark"
      variant="dark"
      expand="lg"
      sticky="top"
      className={Styles.navbar}
      expanded={expanded}
    >
      <Container>
        <Navbar.Brand as={Link} to="/" className={Styles.brand}>
          <img src={logo} alt="BZ Softech" width={200} />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          className={Styles.custom_toggler}
          onClick={handleToggle}
        >
          {expanded ? <FaTimes className={Styles.toggler_icon} /> : <FaBars className={Styles.toggler_icon} />}
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {isAdmin && (
              <Link
                to="/admin"
                className={`${Styles.nav_link} ${activeLink === "/admin" ? Styles.active : ""}`}
                onClick={() => handleLinkClick("/admin")}
              >
                Dashboard
              </Link>
            )}
            <Link
              to="/"
              className={`${Styles.nav_link} ${activeLink === "/" ? Styles.active : ""}`}
              onClick={() => handleLinkClick("/")}
            >
              Home
            </Link>
            <Link
              to="/Courses"
              className={`${Styles.nav_link} ${activeLink === "/Courses" ? Styles.active : ""}`}
              onClick={() => handleLinkClick("/Courses")}
            >
              Courses
            </Link>
            <Link
              to="/Blog"
              className={`${Styles.nav_link} ${activeLink === "/Blog" ? Styles.active : ""}`}
              onClick={() => handleLinkClick("/Blog")}
            >
              Latest Blog
            </Link>
            <Link
              to="/Service"
              className={`${Styles.nav_link} ${activeLink === "/Service" ? Styles.active : ""}`}
              onClick={() => handleLinkClick("/Service")}
            >
              Service
            </Link>
            <Link
              to="/about"
              className={`${Styles.nav_link} ${activeLink === "/about" ? Styles.active : ""}`}
              onClick={() => handleLinkClick("/about")}
            >
              About
            </Link>
            <Link
              to="/ContactUs"
              className={`${Styles.nav_link} ${activeLink === "/ContactUs" ? Styles.active : ""}`}
              onClick={() => handleLinkClick("/ContactUs")}
            >
              Contact
            </Link>
            {isAuthenticated ? (
              <Dropdown align="end" className={Styles.profile_dropdown}>
                <Dropdown.Toggle className={Styles.profile_toggle}>
                  <FaUserCircle className={Styles.profile_icon} />
                  <span className={Styles.user_name}>{user.given_name}</span>
                </Dropdown.Toggle>
                <Dropdown.Menu className={Styles.dropdown_menu}>
                  <Dropdown.Item onClick={() => logout({ returnTo: window.location.origin })}>
                    <RiLogoutCircleRLine size={20}/> Log Out
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            ) : (
              <button onClick={login} className={Styles.login_button}>
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
