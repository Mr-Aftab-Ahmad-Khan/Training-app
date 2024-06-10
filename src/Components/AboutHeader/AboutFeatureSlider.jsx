import React from "react";
import Slider from "react-slick";
import "./AboutFeatureSlider.css";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { GrDocumentPerformance, GrAchievement } from "react-icons/gr";
import { GiTechnoHeart, GiStairsGoal } from "react-icons/gi";

function AboutFeatureSlider() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 2400,
    cssEase: "linear",
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

  const features = [
    { icon: <IoMdCheckmarkCircleOutline size={70} />, label: "Success" },
    { icon: <GrDocumentPerformance size={70} />, label: "Performance" },
    { icon: <GrAchievement size={70} />, label: "Achievement" },
    { icon: <GiTechnoHeart size={70} />, label: "Recognition" },
    { icon: <GiStairsGoal size={70} />, label: "Future" },
  ];

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {features.map((feature, index) => (
          <div className="expertise_container" key={index}>
            <div className="expertise_img">
              <div className="expertise_text">
                {feature.icon}
                <h4>{feature.label}</h4>
              </div>
              <div className="expertise_overlay"></div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default AboutFeatureSlider;
