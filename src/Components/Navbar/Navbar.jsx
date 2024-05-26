import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars } from "react-icons/fa";
import Styles from './NavBar.module.css';

const NavbarSection = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={Styles.navbar}>
    <div className={Styles.brand}>
      <Link to="/">BZ Soft Tech</Link>
    </div>
    <div className={Styles.hamburger} onClick={toggleMenu}>
    <FaBars />
    </div>
    <ul className={`${Styles.navLinks} ${isOpen ? Styles.open : ''}`}>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/services">Services</Link></li>
      <li><Link to="/contact">Contact</Link></li>
    </ul>
  </nav>
  );
};

export default NavbarSection;
