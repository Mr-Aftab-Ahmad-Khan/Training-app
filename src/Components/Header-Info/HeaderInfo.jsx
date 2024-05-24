import React from "react";
import Styles from "./HeaderInfo.module.css";
import logo from "../../Assets/logoblog.png";
import { Col, Container, Row, Carousel, Button, Nav } from "react-bootstrap";
import HeaderCarousel from "./HeadCarousel";
import { AiFillFacebook } from "react-icons/ai";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";

import Navbar from "../Navbar/NavbarSection";

const HeaderInfo = () => {
  return (
    <section>
      <div className={Styles.headerInfo}>
        <p>
          Thursday <b>10 March</b> 2017
        </p>
        <input type="search" placeholder="Search" />

        <span className={Styles.social_icons}>
          {/* <b>Follow Us</b> */}
          <AiFillFacebook size={'30px'} />
          <FaSquareInstagram size={'30px'} />
          <FaXTwitter size={'30px'}/>
        </span>
      </div>
      {/* =====================================================================Navbar */}
      <Navbar />
      {/* =====================================================================Carousel */}
      <HeaderCarousel />
    </section>
  );
};

export default HeaderInfo;
