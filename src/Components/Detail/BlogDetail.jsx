import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Blogs from "../../Assets/Data/Blogs";
import Styles from "./BlogDetail.module.css";

const BlogDetail = () => {
  const { blogId } = useParams(); // Destructure blogId from useParams
  const blog = Blogs.find((blog) => blog.id === blogId);
  
  if (!blog) {
    return <div>Blog not found</div>;
  }

  return (
    <Container>
      <Row className={Styles.space_top}>
        <Col lg={6} className={Styles.blog_img}>
          <img src={blog.imageUrl} alt={blog.BTitle} className={Styles.blog_img} />
        </Col>
        <Col lg={6} className={`mt-md-4 ${Styles.side_content}`}>
          <h1 className={Styles.blog_title}>{blog.BTitle}</h1>
          <div className={Styles.blog_description}>
           
            <p>{blog.Bdesc}</p>
          </div>
          <div className={Styles.blog_category}>
            <small>Blog Category :</small>
            <strong> {blog.BCategory}</strong>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default BlogDetail;
