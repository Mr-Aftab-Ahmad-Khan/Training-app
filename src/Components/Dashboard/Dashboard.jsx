import React, { useState } from "react";
import "./Dashboard.css";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { Container, Row, Col } from "react-bootstrap";
import { RiDashboardHorizontalFill } from "react-icons/ri";
import { MdEmojiEvents, MdNewspaper, MdPerson, MdSchool } from "react-icons/md";
import { PiStudentFill } from "react-icons/pi";
import { FaBookOpen } from "react-icons/fa6";
import { FaBlogger } from "react-icons/fa";
import NewsCrud from "./NewsCrud";

// ====================================================Admin Data
import Blogs from '../../Assets/Data/Blogs'
import Coursedetail from '../../Assets/Data/Coursedetail'
import EventsData from '../../Assets/Data/EventsData'
import news from '../../Assets/Data/News'
import Trainers from '../../Assets/Data/Trainers'
import EventsCrud from "./EventsCrud";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex);
  };

  return (
    <Container fluid className="dashboard_container">
      <Row>
        <Col sm={2} className="sidebar_container">
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
              <FaBlogger size={24}/> Blogs
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
                      <h2 className="topic-heading">{(Blogs.length)}</h2>
                      <h2 className="topic">Blogs</h2>
                    </div>
                    <FaBlogger size={70}/>
                  </div>
                  <div className="box box2">
                    <div className="text">
                      <h2 className="topic-heading">{Trainers.length}</h2>
                      <h2 className="topic">Trainer</h2>
                    </div>
                    <MdPerson size={70} />
                  </div>
                  <div className="box box3">
                    <div className="text">
                      <h2 className="topic-heading">{news.length} </h2>
                      <h2 className="topic">News </h2>
                    </div>
                    <MdNewspaper size={70} />
                  </div>
                  <div className="box box4">
                    <div className="text">
                      <h2 className="topic-heading">200</h2>
                      <h2 className="topic">Students</h2>
                    </div>
                    <PiStudentFill size={70} />
                  </div>
                  <div className="box box5">
                    <div className="text">
                      <h2 className="topic-heading">{Coursedetail.length}</h2>
                      <h2 className="topic">Courses</h2>
                    </div>
                    <FaBookOpen size={70} />
                  </div>
                  <div className="box box6">
                    <div className="text">
                      <h2 className="topic-heading">{EventsData.length}</h2>
                      <h2 className="topic">Events</h2>
                    </div>
                    <MdEmojiEvents size={70} />
                  </div>
                </div>
              </div>
            </TabPanel>
            <TabPanel>
             <EventsCrud/>
            </TabPanel>
            <TabPanel>
              <NewsCrud/>
            </TabPanel>
            <TabPanel>
              <h2>Tab content for Trainer</h2>
            </TabPanel>
            <TabPanel>
              <h2>Tab content for Courses</h2>
            </TabPanel>
            <TabPanel>
              <h2>Tab content for Blogs</h2>
            </TabPanel>
          </Tabs>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
