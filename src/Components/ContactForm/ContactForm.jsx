import React, { useState, useEffect } from "react";
import emailjs from "emailjs-com";
import { useLocation } from "react-router-dom";
import "./ContactForm.css"; // Import your CSS file for styling
import { FaFacebookSquare, FaInstagram, FaTwitter } from "react-icons/fa"; // Import necessary icons
import { MdHeadset, MdEmail } from "react-icons/md"; // Import necessary icons
import { FaMapMarkedAlt } from "react-icons/fa";

const ContactForm = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const initialSubject = query.get("title") || "";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contactNumber: "",
    subject: initialSubject,
    message: "",
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    // Update subject field based on the URL query
    setFormData((prevData) => ({
      ...prevData,
      subject: initialSubject,
    }));
  }, [initialSubject]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // Clear the error message when the user starts typing
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};

    // Validate form fields
    if (formData.name.trim() === "") {
      newErrors.name = "Name is required";
    }
    if (formData.email.trim() === "") {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is not valid";
    }
    if (formData.contactNumber.trim() === "") {
      newErrors.contactNumber = "Contact number is required";
    } else if (!/^\+?\d{10,}$/i.test(formData.contactNumber)) {
      newErrors.contactNumber = "Contact number is not valid";
    }
    if (formData.subject.trim() === "") {
      newErrors.subject = "Subject is required";
    }
    if (formData.message.trim() === "") {
      newErrors.message = "Message is required";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Use the existing formData state
    const form = e.target;

    // Create a new FormData object and append the existing formData values
    const emailFormData = new FormData();
    Object.keys(formData).forEach((key) => {
      emailFormData.append(key, formData[key]);
    });

    emailjs
      .sendForm(
        "aftabahmad.bzsoftech",
        "template_4wmrc3p",
        form,
        "GugMPtof6DeJEjr7C"
      )
      .then(
        (result) => {
          console.log(result.text);
          setFormData({
            name: "",
            email: "",
            contactNumber: "",
            subject: "",
            message: "",
          });
          alert("Your message has been sent successfully!");
        },
        (error) => {
          console.log(error.text);
          alert(
            "There was an issue sending your message. Please try again later."
          );
        }
      );
  };

  console.log(formData);

  return (
    <>
      <section className="contact_us">
        <div className="container">
          <div className="row">
            <div className="col-md-10 offset-md-1">
              <div className="contact_inner">
                <div className="row">
                  <div className="col-md-10">
                    <div className="contact_form_inner">
                      <div className="contact_field">
                        <h3>Contact Us</h3>
                        <p>
                          Feel Free to contact us any time. We will get back to
                          you as soon as we can!
                        </p>
                        <form onSubmit={handleSubmit}>
                          <input
                            type="text"
                            className={`form-control form-group ${
                              errors.name && "is-invalid"
                            }`}
                            placeholder="Name"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                          />
                          {errors.name && (
                            <span className="invalid-feedback">
                              {errors.name}
                            </span>
                          )}
                          <input
                            type="email"
                            className={`form-control form-group ${
                              errors.email && "is-invalid"
                            }`}
                            placeholder="Email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                          />
                          {errors.email && (
                            <span className="invalid-feedback">
                              {errors.email}
                            </span>
                          )}
                          <input
                            type="text"
                            className={`form-control form-group ${
                              errors.contactNumber && "is-invalid"
                            }`}
                            placeholder="Contact Number"
                            name="contactNumber"
                            value={formData.contactNumber}
                            onChange={handleInputChange}
                          />
                          {errors.contactNumber && (
                            <span className="invalid-feedback">
                              {errors.contactNumber}
                            </span>
                          )}
                          <input
                            type="text"
                            className={`form-control form-group ${
                              errors.subject && "is-invalid"
                            }`}
                            placeholder="Subject"
                            name="subject"
                            value={formData.subject}
                            onChange={handleInputChange}
                            // disabled={!!initialSubject}
                          />
                          {errors.subject && (
                            <span className="invalid-feedback">
                              {errors.subject}
                            </span>
                          )}
                          <textarea
                            className={`form-control form-group ${
                              errors.message && "is-invalid"
                            }`}
                            placeholder="Message"
                            name="message"
                            value={formData.message}
                            onChange={handleInputChange}
                          />
                          {errors.message && (
                            <span className="invalid-feedback">
                              {errors.message}
                            </span>
                          )}
                          <button type="submit" className="contact_form_submit">
                            Send
                          </button>
                        </form>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-2">
                    <div className="right_contact_social_icon d-flex align-items-end">
                      <div className="socil_item_inner">
                        <ul className="d-flex">
                          <li>
                            <a href="#">
                              <FaFacebookSquare size={30} />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <FaInstagram size={30} />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <FaTwitter size={30} />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="contact_info_sec">
                  <h4>Contact Info</h4>
                  <div className="d-flex info_single align-items-center">
                    <MdHeadset size={30} />
                    <span className="mx-2">+91 8009 054294</span>
                  </div>
                  <div className="d-flex info_single align-items-center">
                    <MdEmail size={30} />
                    <span className="mx-2">info@flightmantra.com</span>
                  </div>
                  <div className="d-flex info_single align-items-center">
                    <FaMapMarkedAlt size={80} />
                    <span className="mx-2">
                      1000+ Travel partners and 65+ Service city across India,
                      USA, Canada & UAE
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="map_sec">
        <div className="container">
          <div className="row">
            <div className="col-md-10 offset-md-1">
              <div className="map_inner">
                <h4>Find Us on Google Map</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Tempore quo beatae quasi assumenda, expedita aliquam minima
                  tenetur maiores neque incidunt repellat aut voluptas hic
                  dolorem sequi ab porro, quia error.
                </p>
                <div className="map_bind">
                  <iframe
                    title="Google Map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3749.824769778276!2d73.15559541486883!3d31.462038555530326!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391904d52329c6bd%3A0x82fcb122e6b040a4!2sYour%20Location!5e0!3m2!1sen!2sin!4v1624576788997!5m2!1sen!2sin&markers=31.462038555530326,73.15559541486883"
                    width="100%"
                    height={450}
                    frameBorder={0}
                    style={{ border: "0" }}
                    allowFullScreen=""
                    aria-hidden="false"
                    tabIndex={0}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactForm;
