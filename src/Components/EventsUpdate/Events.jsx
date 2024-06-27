import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaCalendarAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import Styles from "./Events.module.css";
import AboutImg from "../../Assets/Pics/abouthead.jpeg";
import EventsData from "../../Assets/Data/EventsData";
import news from "../../Assets/Data/News";
const Events = () => {
  return (
    <div>
      <Container>
        <Row className="my-5">
          <Col md={4}>
            <Col md={12}>
              <h1>
                Latest <span className={Styles.stamp}>Events</span>
              </h1>
              <section className={Styles.events_section}>
                {EventsData.map((event) => {
                  return (
                    <div className={Styles.events_content}>
                      <span className={Styles.events_title}>
                        <b>{event.Month}</b>
                        <h1>{event.date}</h1>
                      </span>
                      <span>
                        <p>{event.content}</p>
                        <b>
                          <FaLocationDot />
                          {event.location} Pakistan
                        </b>
                      </span>
                    </div>
                  );
                })}
              </section>
            </Col>
          </Col>
          <Col md={4}>
            <Col md={12} className={Styles.marging}>
              <h1>
                Latest <span className={Styles.stamp}> News</span>
              </h1>
              <section className={Styles.news_section}>
                <div className={Styles.news_content_wrapper}>
                  {Array.from({ length: 10 }).map((_, i) =>
                    news.map((item, index) => (
                      <div
                        key={i + "-" + index}
                        className={Styles.news_content}
                      >
                        <p>
                          <FaCalendarAlt /> {item.date}
                        </p>
                        <p>{item.content}</p>
                      </div>
                    ))
                  )}
                </div>
              </section>
            </Col>
          </Col>
          <Col md={4}>
            <Col md={12} className={Styles.marging}>
              <h1>
                Why <span className={Styles.stamp}> Choose Us</span>
              </h1>
              <section className={Styles.choose_us_section}>
                <div className={Styles.choose_us_content}>
                  <img src={AboutImg} alt="" className={Styles.about_img} />
                  <h4>About Career Institute.</h4>
                  <p>
                    Since 2010, Career Institute, a global tech training leader,
                    has impacted 150,000+ students worldwide. Our commitment to
                    industry trends is seen in our current curriculum and
                    certified trainers. Beyond training, we offer coworking
                    spaces to tech startups, fostering professional excellence.
                    Elevate your skills and business at Career Institute – where
                    innovation meets education.
                  </p>
                </div>
              </section>
            </Col>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Events;
