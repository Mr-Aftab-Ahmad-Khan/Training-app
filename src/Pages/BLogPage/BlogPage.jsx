import React from "react";
import { Container, Row, Col, Card, Button, Badge } from "react-bootstrap";
import FeaturedPost from "../../Components/FeaturedPosts/FeaturedPost";
import Blogs from "../../Assets/Data/Blogs";
import "./BlogPage.css";
import { IoMdClock } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import BlogImg from "../../Assets/Pics/blog1.jpeg";
const BlogPage = () => {
  return (
    <>
      <section className="blog-header">
        <h1>Trending Posts</h1>
      </section>
      
      <Container>
        <Row className="blog_padding">
          
          <Col md={6} className="blog_content">
            <h1>
              Technology is anything that wasn't around when you were born.
            </h1>
            <Badge bg="secondary">Category: Introductory</Badge>
            <p>
               Beyond mastering technical skills, our journey together is
              about embracing a mindset of continuous learning and growth. It's
              about recognizing that every challenge is an opportunity to
              innovate, every setback a chance to learn, and every success a
              stepping stone to greater achievements.
              As we delve into the
              intricacies of coding, programming languages, data analytics, and
              beyond, remember that your potential is limitless. With
              dedication, perseverance, and a passion for learning, there's no
              obstacle too daunting, and no goal too ambitious.
            </p>
            <Button variant="warning" size="sm">
              Learn More
            </Button>
          </Col>
          <Col md={6} className="blog_img_col">
            <img src={BlogImg} alt="" className="blog_img" />
          </Col>
        </Row>
      </Container>

        <Container className="event_container">
        <h1>Upcoming Events</h1>
        <Row>
          <Col md={3} className="event_date">
            <div className="mb-2">
              <IoMdClock /> 10 am - 11 am
            </div>
            <div>
              <FaLocationDot /> VENICE, India
            </div>
            <h1>25</h1>
            <p>June</p>
          </Col>
          <Col md={6} className="event_details">
            <h5>Summer School 2018.</h5>
            <p>
              Lorem ipsum dolor sit amet, tetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim aquis
              Lorem ipsum dolor sit amet, tetur adipiscing elit, sed do eiusmod
              tempor.
            </p>
            <a to="/" className="more_link">
              More &gt;
            </a>
          </Col>
          <Col md={3}>
            <img
              src="https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dGVjaHxlbnwwfHwwfHx8MA%3D%3D"
              className="img_fluid"
              alt="Event Image"
            />
          </Col>
        </Row>
      </Container>
      <Container>
        
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
      </Container>


      <FeaturedPost />
    </>
  );
};

export default BlogPage;
