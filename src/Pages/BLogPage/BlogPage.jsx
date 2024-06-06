import React from "react";
import { Container, Row, Col, Card, Button, Badge } from "react-bootstrap";
import Profile from "../../Assets/Pics/profile.jpg";
import Styles from "./BlogPage.module.css";
import Blogimg from "../../Assets/Pics/blog1.jpeg";
import Blogs from "../../Assets/Data/Blogs";
import FeaturedPost from '../../Components/FeaturedPosts/FeaturedPost'
import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
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
              <img src={Profile} alt="" className={Styles.author_profile} />
              <h1>Awais Khalid</h1>
              <div className={Styles.about_author}>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Officia in dicta, quos ducimus ipsam quam!
                </p>
                <b>Role : Content Writer</b>
                <p><FaFacebook size={30}/> <FaSquareXTwitter size={30}/> <FaLinkedin size={30}/></p>
              </div>
            </div>
          </Col>
          <Col md={8} >
          {Blogs.map((blog) => {
          return  <Col md={12} className={Styles.blog_card}>
              <img src={blog.imageUrl} alt="" className={Styles.blog_Img} />
              <div className={Styles.blog_description}>
                <b>Category :{blog.BCategory}</b>
                <p>
                  <b>Published On :{blog.date}</b>
                </p>
                <h3>{blog.BTitle}</h3>
                <Link to={`/BlogDetail/${blog.id}`}>
                  Read More
                </Link>
              </div>
              </Col>
          })}
          </Col>
        </Row>
      </Container>

      {/* <Container>
        
        {Blogs.map((Blog) => {
          return (
            <Row className="blog_padding" key={Blog.id}>
              <Col md={6} className="blog_img_col">
                <img src={Blog.img} alt={Blog.BTitle} className="blog_img" />
              </Col>
              <Col md={6} className="blog_content">
                <h1>{Blog.BTitle}</h1>
                <Badge bg="secondary">Category: {Blog.BCategory}</Badge>
                <p>{Blog.Bdesc}</p>
                <Button variant="warning" size="sm">
                  Learn More
                </Button>
              </Col>
            </Row>
          );
        })}
      </Container> */}

      <FeaturedPost/>
    </>
  );
};

export default BlogPage;
