import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useParams, Link } from "react-router-dom";
import Projects from "../../Assets/Data/Projects";
import Styles from "./ProjectsDetail.module.css";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

const ProjectDetail = () => {
  const { projectId } = useParams();
  const project = Projects.find((project) => project.id == projectId);

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <Container className={Styles.projectDetail}>
      <Row className={Styles.spaceTop}>
        <Col lg={6} className={Styles.projectImg}>
          <img
            src={project.img}
            alt={project.title}
            className={Styles.projectImg}
          />
        </Col>
        <Col lg={6} className={`mt-md-4 ${Styles.sideContent}`}>
          <h1 className={Styles.projectTitle}>{project.title}</h1>
          <div className={Styles.projectDescription}>
            <p>{project.description}</p>
          </div>
          <div className={Styles.projectCategory}>
            <small>Project Category:</small>
            <strong> {project.category}</strong>
          </div>
          <Link
            to={`/ContactUs?id=${project.id}&title=${project.title}`}
            className={Styles.project_button}
          >
            <span className={Styles.transition} />
            <span className={Styles.gradient} />
            <span className={Styles.label}>
              Request Demo <FaArrowUpRightFromSquare />
            </span>
          </Link>
        </Col>
      </Row>
    </Container>
  );
};

export default ProjectDetail;
