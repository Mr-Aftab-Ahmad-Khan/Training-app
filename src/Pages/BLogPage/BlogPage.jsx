import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Profile from "../../Assets/Pics/profile.png";
import Styles from "./BlogPage.module.css";
import Blogs from "../../Assets/Data/Blogs";
import FeaturedPost from "../../Components/FeaturedPosts/FeaturedPost";
import { Link } from "react-router-dom";
import { FaCalendarAlt, FaFacebook, FaLinkedin } from "react-icons/fa";
import { FaLocationDot, FaSquareXTwitter } from "react-icons/fa6";
import News from "../../Assets/Data/News";
import EventsData from "../../Assets/Data/EventsData";
const BlogPage = () => {
  return (
    <>
      <section className={Styles.page_header}>
        <h1>Trending Posts</h1>
      </section>
      <Container className={Styles.blog_container}>
        <Row>
          <Col md={4}>
            <div className={Styles.author}>
              <img
                src={Profile}
                alt="Profile"
                className={Styles.author_profile}
              />
              <h1>Awais Khalid</h1>
              <div className={Styles.about_author}>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Officia in dicta, quos ducimus ipsam quam!
                </p>
                <b>Role: Content Writer</b>
                <p>
                  <FaFacebook
                    size={30}
                    style={{ marginRight: "1rem", color: "#3b5998" }}
                  />
                  <FaSquareXTwitter
                    size={30}
                    style={{ marginRight: "1rem", color: "#1DA1F2" }}
                  />
                  <FaLinkedin size={30} style={{ color: "#0077b5" }} />
                </p>
              </div>
            </div>
            <h2 className={Styles.margining}>Latest News</h2>
            <section className={`my-5 ${Styles.news_section}`}>
              <div className={Styles.news_content_wrapper}>
                {News.map((item, i) => (
                  <div key={i} className={Styles.news_content}>
                    <p>
                      <FaCalendarAlt /> {item.date}
                    </p>
                    <p>{item.content}</p>
                  </div>
                ))}
              </div>
            </section>

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
          <Col md={8}>
            {Blogs.map((blog) => {
              return (
                <Col
                  key={blog.id}
                  lg={12}
                  md={12}
                  sm={12}
                  className={`d-flex ${Styles.blog_card}`}
                >
                  <img
                    src={blog.imageUrl}
                    alt={blog.BTitle}
                    className={Styles.blog_Img}
                  />
                  <div className={Styles.blog_description}>
                    <b>Category: {blog.BCategory}</b>
                    <p>
                      <b>Published On: {blog.date}</b>
                    </p>
                    <h3>{blog.BTitle}</h3>
                    <Link to={`/BlogDetail/${blog.id}`}>Read More</Link>
                  </div>
                </Col>
              );
            })}
          </Col>
        </Row>
      </Container>
      <FeaturedPost />
    </>
  );
};

export default BlogPage;
