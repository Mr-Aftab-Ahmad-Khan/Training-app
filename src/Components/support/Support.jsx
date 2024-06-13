import React from "react";
import SupportIcon from "../../Assets/Pics/question.png"; // Use your preferred support icon
import Styles from "./Support.module.css";
import { Link } from "react-router-dom";

const Support = () => {
  return (
    <div className={Styles.support}>
      <img src={SupportIcon} alt="Support Icon" className={Styles.supportIcon} />
      <Link to="/ContactUs" className={Styles.supportLink}>
        Need Help?
      </Link>
    </div>
  );
};

export default Support;
