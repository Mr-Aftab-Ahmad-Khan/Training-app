import React, { useEffect, useState } from "react";
import styles from "./Dashboard.module.css";
import { GrDashboard } from "react-icons/gr";
import { MdEmojiEvents } from "react-icons/md";
import { FaUserTie } from "react-icons/fa";
import { SiBlogger } from "react-icons/si";
import { Table, Form, Button, Row, Col } from "react-bootstrap";
import Users from "../../Assets/Data/Users";

const Dashboard = () => {
  useEffect(() => {
    document.getElementById("defaultOpen").click();
  }, []);

  const [trainers, setTrainers] = useState(Users);
  const [editTrainerId, setEditTrainerId] = useState(null);
  const [newTrainer, setNewTrainer] = useState({ Name: "", expertise: "", mail: "", contact: "" });

  const openTab = (evt, tabName) => {
    const tabcontent = document.getElementsByClassName(styles.eventCrud);
    for (let i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    const tablinks = document.getElementsByClassName(styles.tablinks);
    for (let i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
  };

  const handleEditTrainer = (id) => {
    const trainerToEdit = trainers.find((trainer) => trainer.id === id);
    setNewTrainer({ ...trainerToEdit }); // Include all fields for editing
    setEditTrainerId(id);
  };

  const handleDeleteTrainer = (id) => {
    const updatedTrainers = trainers.filter((trainer) => trainer.id !== id);
    setTrainers(updatedTrainers);
  };

  const handleChangeTrainer = (e) => {
    const { name, value } = e.target;
    setNewTrainer((prevTrainer) => ({
      ...prevTrainer,
      [name]: value,
    }));
  };

  const handleSubmitTrainer = () => {
    // Check if any field is empty
    if (Object.values(newTrainer).some((val) => val === "")) {
      alert("Please fill in all fields.");
      return;
    }

    if (editTrainerId) {
      setTrainers((prevTrainers) =>
        prevTrainers.map((trainer) =>
          trainer.id === editTrainerId ? { ...newTrainer, id: editTrainerId } : trainer
        )
      );
      setEditTrainerId(null);
    } else {
      setTrainers((prevTrainers) => [
        ...prevTrainers,
        { id: prevTrainers.length + 1, ...newTrainer },
      ]);
    }
    setNewTrainer({ Name: "", expertise: "", mail: "", contact: "" });
  };

  // Additional states and functions for Blogs and Events...

  return (
    <div className={styles.dashboardContainer}>
      <div className={styles.tab}>
        <h4>
          <GrDashboard size={30} /> Dashboard
        </h4>
        <button
          className={`${styles.tablinks} ${styles.active}`}
          onClick={(e) => openTab(e, "events")}
          id="defaultOpen"
        >
          <MdEmojiEvents /> Events
        </button>
        <button
          className={styles.tablinks}
          onClick={(e) => openTab(e, "trainers")}
        >
          <FaUserTie /> Trainer
        </button>
        <button
          className={styles.tablinks}
          onClick={(e) => openTab(e, "blogs")}
        >
          <SiBlogger /> Blog
        </button>
      </div>

      <div id="events" className={`${styles.eventCrud} ${styles.active}`}>
        {/* Event CRUD section */}
      </div>
{/* ================================================================================ */}
      <div id="trainers" className={styles.eventCrud}>
  <Row className="mt-3">
    <Col xs={12}>
      <Form>
        <Form.Group as={Row} controlId="formName">
          <Form.Label column sm="2">
            Name
          </Form.Label>
          <Col sm="5">
            <Form.Control
              type="text"
              name="Name"
              value={newTrainer.Name}
              onChange={handleChangeTrainer}
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} controlId="formMail">
          <Form.Label column sm="2">
            Mail
          </Form.Label>
          <Col sm="5">
            <Form.Control
              type="text"
              name="mail"
              value={newTrainer.mail}
              onChange={handleChangeTrainer}
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} controlId="formExpertise">
          <Form.Label column sm="2">
            Expertise
          </Form.Label>
          <Col sm="5">
            <Form.Control
              type="text"
              name="expertise"
              value={newTrainer.expertise}
              onChange={handleChangeTrainer}
            />
          </Col>
        </Form.Group>
        {/* Add similar Form.Group for other fields */}
        <Button variant="success" onClick={handleSubmitTrainer}>
          {editTrainerId ? "Update" : "Create"}
        </Button>
      </Form>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Expertise</th>
            <th>Mail</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {trainers.map((trainer) => (
            <tr key={trainer.id}>
              <td>{trainer.Name}</td>
              <td>{trainer.expertise}</td>
              <td>{trainer.mail}</td>
              <td>
                <Button
                  variant="warning"
                  onClick={() => handleEditTrainer(trainer.id)}
                >
                  Edit
                </Button>
                <Button
                  variant="danger"
                  onClick={() => handleDeleteTrainer(trainer.id)}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Col>
  </Row>
</div>


      <div id="blogs" className={styles.eventCrud}>
        {/* Blog CRUD section */}
      </div>
    </div>
  );
};

export default Dashboard;
