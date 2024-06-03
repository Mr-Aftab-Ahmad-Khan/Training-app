import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaRss } from "react-icons/fa";
import Styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={Styles.footer}>
      <div className={Styles.footer_content}>
        <div className={Styles.company_info}>
          <h3>BZSoftech</h3>
          <p>
            BZSoftech is a leading software solutions provider, offering
            innovative and tailored solutions to businesses of all sizes. With a
            team of skilled professionals, we develop software applications,
            websites, and mobile apps, empowering organizations to enhance
            productivity, and achieve their digital goals.
          </p>
        
        </div>

        <div className={Styles.about}>
          <h3>Courses</h3>
          <table>
            <tbody>
              <tr>
                <td>Web</td>
                <td>SEO</td>
              </tr>
              <tr>
                <td>Graphic Design</td>
                <td>AI Workshop</td>
              </tr>
              <tr>
                <td>Mern Stack</td>
                <td>ERP</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className={Styles.follow_us}>
          <h3>Follow Us</h3>
          <table>
            <tbody>
              <tr>
                <td>
                  <FaFacebook size={40}/>
                </td>
                <td>Facebook</td>
              </tr>
              <tr>
                <td>
                  <FaTwitter size={40}/>
                </td>
                <td>Twitter</td>
              </tr>
              <tr>
                <td>
                  <FaInstagram size={40}/>
                </td>
                <td>Instagram</td>
              </tr>
              <tr>
                <td>
                  <FaRss size={40}/>
                </td>
                <td>RSS</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className={Styles.opening_hours}>
          <h3>Opening Hours</h3>
          <table>
            <tbody>
              <tr>
                <td>Monday - Friday:</td>
                <td>9am - 6pm</td>
              </tr>
              <tr>
                <td>Saturday:</td>
                <td>10am - 4pm</td>
              </tr>
              <tr>
                <td>Sunday:</td>
                <td>Closed</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <p style={{textAlign:"center"}}>&copy; 2024 BZSoftech. All rights reserved</p>
    </footer>
  );
};

export default Footer;
