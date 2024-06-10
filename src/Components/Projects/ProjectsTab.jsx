import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import Projects from "../../Assets/Data/Projects";
import Styles from "./ProjectsTab.module.css";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { FaArrowRight } from "react-icons/fa";

export default function ProjectsTab() {
  const [value, setValue] = React.useState("1");

  const ErpCategory = Projects.filter((project) => project.category === "ERP");
  const FormCategory = Projects.filter(
    (project) => project.category === "FORM"
  );
  const ApexCategory = Projects.filter(
    (project) => project.category === "Apex"
  );
  const MigrationCategory = Projects.filter(
    (project) => project.category === "Migration"
  );
  const IntegrationCategory = Projects.filter(
    (project) => project.category === "Integration"
  );

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Container>
      <h1 className="text-center mt-5 pt-3">Our Work</h1>
      <Row>
        <Col>
          <Box sx={{ width: "100%", typography: "body1" }}>
            <TabContext value={value}>
              <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <TabList
                  onChange={handleChange}
                  aria-label="lab API tabs example"
                >
                  <Tab label="ERP" value="1" />
                  <Tab label="Oracle form Development" value="2" />
                  <Tab label="Oracle APEX Development" value="3" />
                  <Tab label="Migration Oracle Form to APEX" value="4" />
                  <Tab label="Integration" value="5" />
                </TabList>
              </Box>
              <TabPanel value="1">
                <div className={Styles.project_card_holder}>
                  {ErpCategory.map((project) => (
                    <div className={Styles.project_card} key={project.id}>
                      <img src={project.img} alt={project.title} />
                      <div className={Styles.project_card__content}>
                        <p className={Styles.project_card__title}>
                          {project.title}
                        </p>
                        <p className={Styles.project_card__description}>
                          {project.description}
                        </p>
                        <Link
                          className={Styles.button}
                          to={`/ProjectDetail/${project.id}`}
                        >
                          <span className={Styles.button__iconWrapper}>
                            <FaArrowRight className={Styles.button__iconSvg} />
                            <FaArrowRight
                              className={`${Styles.button__iconSvg} ${Styles.button__iconSvgCopy}`}
                            />
                          </span>
                          Explore More
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </TabPanel>
              <TabPanel value="2">
                <div className={Styles.project_card_holder}>
                  {FormCategory.map((project) => (
                    <div className={Styles.project_card} key={project.id}>
                      <img src={project.img} alt={project.title} />
                      <div className={Styles.project_card__content}>
                        <p className={Styles.project_card__title}>
                          {project.title}
                        </p>
                        <p className={Styles.project_card__description}>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed
                        </p>

                        <Link
                          className={Styles.button}
                          to={`/ProjectDetail/${project.id}`}
                        >
                          <span className={Styles.button__iconWrapper}>
                            <FaArrowRight className={Styles.button__iconSvg} />
                            <FaArrowRight
                              className={`${Styles.button__iconSvg} ${Styles.button__iconSvgCopy}`}
                            />
                          </span>
                          Explore More
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </TabPanel>
              <TabPanel value="3">
                <div className={Styles.project_card_holder}>
                  {ApexCategory.map((project) => (
                    <div className={Styles.project_card} key={project.id}>
                      <img src={project.img} alt={project.title} />
                      <div className={Styles.project_card__content}>
                        <p className={Styles.project_card__title}>
                          {project.title}
                        </p>
                        <p className={Styles.project_card__description}>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed
                        </p>

                        <Link
                          className={Styles.button}
                          to={`/ProjectDetail/${project.id}`}
                        >
                          <span className={Styles.button__iconWrapper}>
                            <FaArrowRight className={Styles.button__iconSvg} />
                            <FaArrowRight
                              className={`${Styles.button__iconSvg} ${Styles.button__iconSvgCopy}`}
                            />
                          </span>
                          Explore More
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </TabPanel>
              <TabPanel value="4">
                <div className={Styles.project_card_holder}>
                  {IntegrationCategory.map((project) => (
                    <div className={Styles.project_card} key={project.id}>
                      <img src={project.img} alt={project.title} />
                      <div className={Styles.project_card__content}>
                        <p className={Styles.project_card__title}>
                          {project.title}
                        </p>
                        <p className={Styles.project_card__description}>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed
                        </p>

                        <Link
                          className={Styles.button}
                          to={`/ProjectDetail/${project.id}`}
                        >
                          <span className={Styles.button__iconWrapper}>
                            <FaArrowRight className={Styles.button__iconSvg} />
                            <FaArrowRight
                              className={`${Styles.button__iconSvg} ${Styles.button__iconSvgCopy}`}
                            />
                          </span>
                          Explore More
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </TabPanel>
              <TabPanel value="5">
                <div className={Styles.project_card_holder}>
                  {MigrationCategory.map((project) => (
                    <div className={Styles.project_card} key={project.id}>
                      <img src={project.img} alt={project.title} />
                      <div className={Styles.project_card__content}>
                        <p className={Styles.project_card__title}>
                          {project.title}
                        </p>
                        <p className={Styles.project_card__description}>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed
                        </p>

                        <Link
                          className={Styles.button}
                          to={`/ProjectDetail/${project.id}`}
                        >
                          <span className={Styles.button__iconWrapper}>
                            <FaArrowRight className={Styles.button__iconSvg} />
                            <FaArrowRight
                              className={`${Styles.button__iconSvg} ${Styles.button__iconSvgCopy}`}
                            />
                          </span>
                          Explore More
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </TabPanel>
            </TabContext>
          </Box>
        </Col>
      </Row>
    </Container>
  );
}
