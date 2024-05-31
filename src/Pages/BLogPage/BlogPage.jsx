import React from "react";
import { Container, Row, Col, Card, Button, Badge } from "react-bootstrap";
import FeaturedPost from "../../Components/FeaturedPosts/FeaturedPost";
import Blogs from "../../Assets/Data/Blogs";
import "./BlogPage.css";

const BlogPage = () => {
  return (
    <div className="bg_wrapper">
      <Container >
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
    </div>
  );
};

export default BlogPage;
