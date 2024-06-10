import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Projects from "../../Assets/Data/Projects";
import Styles from "./ProjectsDetail.module.css";

const ProjectDetail = () => {
  const { projectId } = useParams(); // Destructure projectId from useParams
  const project = Projects.find((project) => project.id === projectId);
  
  if (!project) {
    return <div>project not found</div>;
  }

  return (
    <Container>
      <Row className={Styles.space_top}>
        <Col lg={6} className={Styles.blog_img}>
          <img src={project.img} alt={project.title} className={Styles.blog_img} />
        </Col>
        <Col lg={6} className={`mt-md-4 ${Styles.side_content}`}>
          <h1 className={Styles.blog_title}>{project.title}</h1>
          <div className={Styles.blog_description}>
           
            <p>{project.description}</p>
          </div>
          <div className={Styles.blog_category}>
            <small>Project Category :</small>
            <strong> {project.category}</strong>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ProjectDetail;
