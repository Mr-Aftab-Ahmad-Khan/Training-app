import React from "react";
import Styles from "./Services.module.css";
import service_1 from "../../Assets/Pics/Digital-Marketing2-min.jpg";
import service_2 from "../../Assets/Pics/SEO-Optimization-Illustration-min.jpg";
import service_3 from "../../Assets/Pics/crm2.jpg";
import service_4 from "../../Assets/Pics/graphic-designing-min.jpg";
import service_5 from "../../Assets/Pics/mobile-app-dev-min.jpg";
import service_6 from "../../Assets/Pics/web-development.jpg";

const Services = () => {
  return (
    <div className={Styles.features_container}>
      <h2>Our Features & Services</h2>
      <div className={Styles.features_cards}>
        <div className={Styles.feature_card}>
          <img src={service_1} alt="/" className={Styles.feature_image} />
          <h3>Digi Marketing</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, et!
          </p>
          <button className={Styles.more_button}>More</button>
        </div>
        <div className={Styles.feature_card}>
          <img src={service_2} alt="/" className={Styles.feature_image} />
          <h3>SEO Optimization</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, et!
          </p>
          <button className={Styles.more_button}>More</button>
        </div>
        <div className={Styles.feature_card}>
          <img src={service_3} alt="/" className={Styles.feature_image} />
          <h3>CRM</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, et!
          </p>
          <button className={Styles.more_button}>More</button>
        </div>
        <div className={Styles.feature_card}>
          <img src={service_4} alt="/" className={Styles.feature_image} />
          <h3>Graphics Design</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, et!
          </p>
          <button className={Styles.more_button}>More</button>
        </div>
        <div className={Styles.feature_card}>
          <img src={service_5} alt="/" className={Styles.feature_image} />
          <h3>Mobile App Dev</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, et!
          </p>
          <button className={Styles.more_button}>More</button>
        </div>
        <div className={Styles.feature_card}>
          <img src={service_6} alt="/" className={Styles.feature_image} />
          <h3>Web Dev</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, et!
          </p>
          <button className={Styles.more_button}>More</button>
        </div>
      </div>
    </div>
  );
};

export default Services;
