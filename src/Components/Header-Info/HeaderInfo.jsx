import {React,useState} from "react";
import Styles from "./HeaderInfo.module.css";
import { Col, Container, Row, Carousel, Button, Nav } from "react-bootstrap";
import HeaderCarousel from "./HeadCarousel";
import { AiFillFacebook } from "react-icons/ai";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";

import Navbar from "../Navbar/Navbar";
function getDate() {
const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  const today = new Date();
  const month = today.getMonth() + 1;
  const year = today.getFullYear();
  const date = today.getDate();
  const day = weekday[today.getDay()];
  return ` ${month}/${date}/${year}/${day}`;
}
const formatDate = () => {
  const today = new Date();
  const options = { weekday: 'long', day: 'numeric', month: 'long' ,year :'numeric' };
  const formattedDate = today.toLocaleDateString('en-US', options);
  return formattedDate;
}
const HeaderInfo = () => {
  const [currentDate, setCurrentDate] = useState(formatDate());
  return (
    <section>
      <div className={Styles.headerInfo}>
        <p>
          {currentDate}
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
      
      {/* =====================================================================Carousel */}
      {/* <HeaderCarousel /> */}
    </section>
  );
};

export default HeaderInfo;
