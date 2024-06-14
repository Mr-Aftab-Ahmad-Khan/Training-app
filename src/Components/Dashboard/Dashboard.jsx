import React, { useState, useEffect } from "react";
import "./Dashboard.css";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { Container, Row, Col } from "react-bootstrap";
import { RiDashboardHorizontalFill } from "react-icons/ri";
import { MdEmojiEvents, MdNewspaper, MdPerson, MdSchool } from "react-icons/md";
import { PiStudentFill } from "react-icons/pi";
import { FaBookOpen, FaBlogger } from "react-icons/fa";
import NewsCrud from "./NewsCrud";
import BlogsCrud from "./BlogsCrud";
import CoursesCrud from "./CoursesCrud";
import EventsCrud from "./EventsCrud";
import TrainersCrud from "./TrainersCrud";
import Blogs from "../../Assets/Data/Blogs";
import Coursedetail from "../../Assets/Data/Coursedetail";
import EventsData from "../../Assets/Data/EventsData";
import news from "../../Assets/Data/News";
import Trainers from "../../Assets/Data/Trainers";
import { CanvasJSChart } from "canvasjs-react-charts";
const Dashboard = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [coursesCount, setCoursesCount] = useState(0);
  const [eventsCount, setEventsCount] = useState(0);
  const [newsCount, setNewsCount] = useState(0);
  const [trainersCount, setTrainersCount] = useState(0);
  const [siteHealth, setSiteHealth] = useState(80); // Example site health
  // =========================================Chart
	const optionsPieChart = {
    exportEnabled: true,
    animationEnabled: true,
    title: {
      text: "Website Traffic Sources"
    },
    data: [{
      type: "pie",
      startAngle: 75,
      toolTipContent: "<b>{label}</b>: {y}%",
      showInLegend: "true",
      legendText: "{label}",
      indexLabelFontSize: 16,
      indexLabel: "{label} - {y}%",
      dataPoints: [
        { y: 18, label: "Direct" },
        { y: 49, label: "Organic Search" },
        { y: 9, label: "Paid Search" },
        { y: 5, label: "Referral" },
        { y: 19, label: "Social" }
      ]
    }]
  }

  const optionsBarChart = {
    animationEnabled: true,
    title: {
      text: "Totall Enrolled Students",
      horizontalAlign: "center",
    },
    data: [
      {
        type: "bar",
        dataPoints: [
          { y: 10, label: "Jan" },
          { y: 20, label: "Feb" },
          { y: 30, label: "Mar" },
          { y: 25, label: "Apr" },
          { y: 15, label: "May" },
        ],
      },
    ],
  };

  // =========================================Chart
  useEffect(() => {
    // Update counts when data changes
    setCoursesCount(Coursedetail.length);
    setEventsCount(EventsData.length);
    setNewsCount(news.length);
    setTrainersCount(Trainers.length);
  }, []);

  const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex);
  };

  return (
    <Container fluid className="dashboard_container">
      <Row>
        <Col sm={2} className="sidebar_container ">
          <TabList className="sidebar">
            <Tab
              onClick={() => handleTabClick(0)}
              className={`nav-option option ${activeTab === 0 ? "active" : ""}`}
            >
              <RiDashboardHorizontalFill size={24} /> Dashboard
            </Tab>
            <Tab
              onClick={() => handleTabClick(1)}
              className={`nav-option option ${activeTab === 1 ? "active" : ""}`}
            >
              <MdEmojiEvents size={24} /> Events
            </Tab>
            <Tab
              onClick={() => handleTabClick(2)}
              className={`nav-option option ${activeTab === 2 ? "active" : ""}`}
            >
              <MdNewspaper size={24} /> News
            </Tab>
            <Tab
              onClick={() => handleTabClick(3)}
              className={`nav-option option ${activeTab === 3 ? "active" : ""}`}
            >
              <MdPerson size={24} /> Trainer
            </Tab>
            <Tab
              onClick={() => handleTabClick(4)}
              className={`nav-option option ${activeTab === 4 ? "active" : ""}`}
            >
              <MdSchool size={24} /> Courses
            </Tab>
            <Tab
              onClick={() => handleTabClick(5)}
              className={`nav-option option ${activeTab === 5 ? "active" : ""}`}
            >
              <FaBlogger size={24} /> Blogs
            </Tab>
          </TabList>
        </Col>
        <Col sm={10} className="main-content">
          <Tabs
            selectedIndex={activeTab}
            onSelect={(index) => handleTabClick(index)}
          >
            <TabPanel>
              <div id="dashboard" className="tab-content">
                <div className="box_container">
                  <div className="box box1">
                    <div className="text">
                      <h2 className="topic-heading">{Blogs.length}</h2>
                      <h2 className="topic">Blogs</h2>
                    </div>

                    <div class="glossy-circle">
                      {" "}
                      <FaBlogger size={35} />
                    </div>
                  </div>
                  <div className="box box2">
                    <div className="text">
                      <h2 className="topic-heading">{trainersCount}</h2>
                      <h2 className="topic">Trainer</h2>
                    </div>

                    <div class="glossy-circle">
                      <MdPerson size={35} />
                    </div>
                  </div>
                  <div className="box box3">
                    <div className="text">
                      <h2 className="topic-heading">
                        {newsCount} / {eventsCount}{" "}
                      </h2>
                      <h2 className="topic">News / Events </h2>
                    </div>

                    <div class="glossy-circle">
                      {" "}
                      <MdNewspaper size={35} />
                    </div>
                  </div>
                  <div className="box box4">
                    <div className="text">
                      <h2 className="topic-heading">200</h2>
                      <h2 className="topic">Students</h2>
                    </div>

                    <div class="glossy-circle">
                      <PiStudentFill size={35} />
                    </div>
                  </div>
                  <div className="box box5">
                    <div className="text">
                      <h2 className="topic-heading">{coursesCount}</h2>
                      <h2 className="topic">Courses</h2>
                    </div>

                    <div class="glossy-circle">
                      {" "}
                      <FaBookOpen size={35} />
                    </div>
                  </div>
                </div>
                <Row className="mt-4">
                  <Col md={6}>
                    <div className="chart-container">
                      <CanvasJSChart options={optionsPieChart} />
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="chart-container">
                      <CanvasJSChart options={optionsBarChart} />
                    </div>
                  </Col>
                </Row>
              </div>
            </TabPanel>
            <TabPanel>
              <EventsCrud />
            </TabPanel>
            <TabPanel>
              <NewsCrud />
            </TabPanel>
            <TabPanel>
              <TrainersCrud />
            </TabPanel>
            <TabPanel>
              <CoursesCrud />
            </TabPanel>
            <TabPanel>
              <BlogsCrud />
            </TabPanel>
          </Tabs>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
