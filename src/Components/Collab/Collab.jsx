import React from "react";
import Slider from "react-slick";
import Collab1 from "../../Assets/Pics/collab1.png";
import Collab2 from "../../Assets/Pics/collab2.png";
import Collab3 from "../../Assets/Pics/collab3.png";
import Collab4 from "../../Assets/Pics/collab4.png";
import Collab5 from "../../Assets/Pics/collab5.png";
import Collab6 from "../../Assets/Pics/collab6.png";
import Collab7 from "../../Assets/Pics/collab7.png";
import Collab8 from "../../Assets/Pics/collab8.png";
import Collab9 from "../../Assets/Pics/collab9.png";
import Styles from './Collab.module.css'
import { Autoplay } from "swiper/modules";
function Collab() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    initialSlide: 0,
    autoplay:true,
    speed: 4000,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className={Styles.collab_slider_container}>
      <Slider {...settings}>
        <div>
          <img src={Collab1} alt="" />
        </div>
        <div>
          <img src={Collab9} alt="" />
        </div>
        <div>
          <img src={Collab3} alt="" />
        </div>
        <div>
          <img src={Collab4} alt="" />
        </div>
        <div>
          <img src={Collab5} alt="" />
        </div>
        <div>
          <img src={Collab6} alt="" />
        </div>
        <div>
          <img src={Collab7} alt="" />
        </div>
        <div>
          <img src={Collab8} alt="" />
        </div>
      </Slider>
    </div>
  );
}

export default Collab;
