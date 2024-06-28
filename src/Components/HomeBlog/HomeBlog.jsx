import React from "react";
import { Container, Row, Col, Card, Button, Badge } from "react-bootstrap";
import Styles from "./HomeBlog.module.css";
import { Link } from "react-router-dom";
import { FaArrowCircleRight } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";
import Blogs from "../../Assets/Data/Blogs";
const HomeBlog = () => {
 
  return (
    <Container className={`${Styles.blogList} `}>
      <h2 className={Styles.blogHeading}>Blogs & Articles</h2>
      <Row className="mt-5">
        {Blogs.map((blog) => (
          <Col key={blog.id} md={4} className={Styles.blogCard}>
            <Card>
              <Card.Img variant="top" src={blog.imageUrl} />
              <Card.Body>
                <Card.Text className={Styles.blogDate}>
                  <FaCalendarAlt /> {blog.date}
                </Card.Text>
                <Card.Title>
                  <Badge bg="warning">Category: {blog.BCategory}</Badge>
                </Card.Title>
                <Card.Text>{blog.BTitle}</Card.Text>
                <Link to={`/BlogDetail/${blog.id}`} className={Styles.more_detail}>
                  More Details <FaArrowCircleRight />
                </Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <button className={`${Styles.blogButton} {Styles.type1}`}>
        <Link to={`/Blog`} className={Styles.blogBtn_txt}>
          Our Blogs
        </Link>
      </button>
    </Container>
  );
};

export default HomeBlog;
