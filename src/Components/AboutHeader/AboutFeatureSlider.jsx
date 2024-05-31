import React from "react";
import Slider from "react-slick";
import './AboutFeatureSlider.css'
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { GrDocumentPerformance } from "react-icons/gr";
import { GrAchievement } from "react-icons/gr";
import { GiTechnoHeart } from "react-icons/gi";
import { GiStairsGoal } from "react-icons/gi";
import SubscriptionForm from '../SubForm/SubscriptionForm'

function AboutFeatureSlider() {
    const settings = {
        dots: false,
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
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  
    };
    return (
        <div className="slider-container">
            <Slider {...settings}>
                
                    <div className="expertise_container">
                        <div className="expertise_img">
                            <div className="expertise_text"><IoMdCheckmarkCircleOutline size={70} color="#3d7ea7" className="changes" /> <h4>Success</h4>
                            </div>
                            <div className="expertise_overlay"></div>
                        </div>
                        </div>

                    <div className="expertise_container">
                        <div className="expertise_img">
                            <div className="expertise_text"><GrDocumentPerformance  size={70} color="#3d7ea7" className="changes" /> <h4>Performance</h4>
                            </div>
                            <div className="expertise_overlay"></div>
                        </div>
                        </div>
                    <div className="expertise_container">
                        <div className="expertise_img">
                            <div className="expertise_text"><GrAchievement  size={70} color="#3d7ea7" className="changes" /> <h4>Achievement</h4>
                            </div>
                            <div className="expertise_overlay"></div>
                        </div>
                        </div>
                    <div className="expertise_container">
                        <div className="expertise_img">
                            <div className="expertise_text"><GiTechnoHeart size={70} color="#3d7ea7" className="changes" /> <h4>Recognition</h4>
                            </div>
                            <div className="expertise_overlay"></div>
                        </div>
                        </div>
                        <div className="expertise_container">
                        <div className="expertise_img">
                            <div className="expertise_text"><GiStairsGoal size={70} color="#3d7ea7" className="changes" /> <h4>Future</h4>
                            </div>
                            <div className="expertise_overlay"></div>
                        </div>
                        </div>

            </Slider>
      <SubscriptionForm/>

        </div>
    );
}

export default AboutFeatureSlider;
