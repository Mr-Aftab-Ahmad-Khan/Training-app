import React from "react";
import logo from "../../Assets/Pics/bzsoftech-logo.png";
import Styles from "./Footer.module.css"; // Adjust the import statement for CSS
import { FaPhoneSquareAlt } from "react-icons/fa";
import { RiMailSendFill } from "react-icons/ri";
import { FaMapLocationDot } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className={`${Styles.footer} bg-dark text-light`}>
      <div className={`container ${Styles.container}`}>
        <div className="row mt-5">
          <div className={`col-12 text-center ${Styles.brandName}`}>
            <img src={logo} alt="BZSoftech Logo" className={Styles.logo} />
          </div>
        </div>
        <hr className={Styles.divider} />
        <div className="row">
          <div className="col-md-4 contact">
            <h3>Feel Free To Contact</h3>
            <p className=" py-1">
              <FaPhoneSquareAlt size={24} className={Styles.icon} /> <b>+92-324-7730-410</b>
            </p>
            <p className=" py-1">
              <a href="mailto:info@bzsoftech@gmail.com" className={Styles.emailLink}>
                <RiMailSendFill size={24} className={Styles.icon} /> <b> info@bzsoftech@gmail.com</b>
              </a>
            </p>
            <p className=" py-1">
              <FaMapLocationDot size={24} className={Styles.icon} /> <span>United Plaza Faisalabad – Sheikhupura – Lahore Road</span>
            </p>
          </div>
          <div className={`col-md-4 ${Styles.comp_deco}`}>
          <h3 className= "text-center">About Company </h3>
            <p className={Styles.description}>
              BZSoftech is a leading software solutions provider, offering
              innovative and tailored solutions to businesses of all sizes. With
              a team of skilled professionals, we develop software applications,
              websites, and mobile apps, empowering organizations to enhance
              productivity and achieve their digital goals.
            </p>
          </div>
          <div className="col-md-4 text-light">
            <h3 className="text-center">Opening Hours</h3>
            <table className="table table-sm table-borderless">
              <tbody>
                <tr>
                  <td className={Styles.tableText}>Monday - Friday</td>
                  <td className={Styles.tableText}>9:00 AM - 6:00 PM</td>
                </tr>
                <tr>
                  <td className={Styles.tableText}>Saturday</td>
                  <td className={Styles.tableText}>10:00 AM - 4:00 PM</td>
                </tr>
                <tr>
                  <td className={Styles.tableText}>Sunday</td>
                  <td className='text-danger'>Closed</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <hr className={Styles.divider} />
        <p className="text-center">
          © 2023 All rights reserved. BZ Softech and projects accomplished by BZ Softech.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
