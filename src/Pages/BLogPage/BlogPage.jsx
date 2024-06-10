import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Profile from "../../Assets/Pics/profile.jpg";
import Styles from "./BlogPage.module.css";
import Blogs from "../../Assets/Data/Blogs";
import FeaturedPost from "../../Components/FeaturedPosts/FeaturedPost";
import { Link } from "react-router-dom";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const BlogPage = () => {
  return (
    <>
      <section className={Styles.blog_header}>
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
          </Col>
          <Col md={8} >
            {Blogs.map((blog) => {
              return (
                <Col
                  key={blog.id}
                  lg={12} md={12} sm={12} className={`d-flex ${Styles.blog_card}`}
                >
                  <img src={blog.imageUrl} alt={blog.BTitle} className={Styles.blog_Img} />
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
