import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import imgtry from "../../Assets/Pics/SEO-Optimization-Illustration-min.jpg";
import Styles from './FeaturedPost.module.css'
import Badge from 'react-bootstrap/Badge';
import { Link } from "react-router-dom";
const FeaturedPost = () => {
  return (
    <div>
      <Container >
        <Row className={Styles.pading_above}>
          <Col sm={8}>
            <Row>
                <h1>Recents Posts</h1>
                <Row className={Styles.recent_posts}>
              <Col sm={6}>
                <img src={imgtry} alt="" className={Styles.recentImg}/>
              </Col>
              <Col sm={6}>
                <div className={Styles.content}>
                  <p>
                    30-May-24 - <b>Coding</b>
                  </p>
                  <h3>Easy way for React State</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Reprehenderit, accusantium.
                  </p>
                  <Link to='/' className={Styles.blog_button}>Read More</Link>
                </div>
              </Col>
              </Row>
                <Row className={Styles.recent_posts}>
              <Col md={6}>
                <img src={imgtry} alt="" className={Styles.recentImg}/>
              </Col>
              <Col md={6}>
                <div className={Styles.content}>
                  <p>
                    30-May-24 - <b>Coding</b>
                  </p>
                  <h3>Easy way for React State</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Reprehenderit, accusantium.
                  </p>
                  <Link to='/' className={Styles.blog_button}>Read More</Link>
                </div>
              </Col>
              </Row>
            </Row>
          </Col>
          <Col md={4} className={Styles.popular_posts}>
            <h1>Most Popular</h1>
            <div className={Styles.posts}>
            <Badge bg="warning">New</Badge>
            <h6>Architects of abundance</h6>
            <p><b>Published</b>: 30 ,May 24</p>
            </div>
            <div className={Styles.posts}>
            <Badge bg="warning">New</Badge>
            <h6>Architects of abundance</h6>
            <p><b>Published</b>: 30 ,May 24</p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default FeaturedPost;
