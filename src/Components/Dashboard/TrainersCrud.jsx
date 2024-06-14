import React, { useState } from "react";
import TrainersData from "../../Assets/Data/Trainers";
import { Container, Row, Col, Button, Form, Table, InputGroup } from "react-bootstrap";
import Styles from "./TrainersCrud.module.css";

const TrainersCrud = () => {
  const [trainers, setTrainers] = useState(TrainersData);
  const [avatar, setAvatar] = useState("");
  const [name, setName] = useState("");
  const [bio, setBio] = useState("");
  const [designation, setDesignation] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [editing, setEditing] = useState(false);
  const [currentTrainer, setCurrentTrainer] = useState({});

  const avatarHandler = (e) => setAvatar(e.target.value);
  const nameHandler = (e) => setName(e.target.value);
  const bioHandler = (e) => setBio(e.target.value);
  const designationHandler = (e) => setDesignation(e.target.value);
  const searchHandler = (e) => setSearchTerm(e.target.value.toLowerCase());

  const deleteHandler = (id) => {
    const updatedTrainers = trainers.filter((trainer) => trainer.id !== id);
    setTrainers(updatedTrainers);
  };

  const editHandler = (trainer) => {
    setEditing(true);
    setCurrentTrainer(trainer);
    setAvatar(trainer.Avatar);
    setName(trainer.Name);
    setBio(trainer.Bio);
    setDesignation(trainer.Designation);
  };

  const updateHandler = (e) => {
    e.preventDefault();
    const updatedTrainers = trainers.map((trainer) =>
      trainer.id === currentTrainer.id
        ? { ...trainer, Avatar: avatar, Name: name, Bio: bio, Designation: designation }
        : trainer
    );
    setTrainers(updatedTrainers);
    setEditing(false);
    setAvatar("");
    setName("");
    setBio("");
    setDesignation("");
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (editing) {
      updateHandler(e);
    } else {
      const newTrainer = {
        id: trainers.length + 1,
        Avatar: avatar,
        Name: name,
        Bio: bio,
        Designation: designation,
      };
      setTrainers([newTrainer, ...trainers]);
      setAvatar("");
      setName("");
      setBio("");
      setDesignation("");
    }
  };

  const filteredTrainers = trainers.filter((trainer) =>
    trainer.Name.toLowerCase().includes(searchTerm) ||
    trainer.Bio.toLowerCase().includes(searchTerm) ||
    trainer.Designation.toLowerCase().includes(searchTerm)
  );

  return (
    <Container className={`mt-2 ${Styles.scrollView}`}>
      <h1>Add & Update Trainers Data</h1>
      <Row className="justify-content-center mb-4">
        <Col md="12">
          <Form onSubmit={submitHandler} className="p-4 bg-light rounded shadow-sm">
            <Row>
              <Col md="3">
                <Form.Group controlId="formAvatar" className="mb-3">
                  <Form.Label className={Styles["form-label"]}>Avatar URL</Form.Label>
                  <Form.Control
                    type="text"
                    value={avatar}
                    onChange={avatarHandler}
                    required
                    className={Styles["form-control"]}
                  />
                </Form.Group>
              </Col>
              <Col md="3">
                <Form.Group controlId="formName" className="mb-3">
                  <Form.Label className={Styles["form-label"]}>Name</Form.Label>
                  <Form.Control
                    type="text"
                    value={name}
                    onChange={nameHandler}
                    required
                    className={Styles["form-control"]}
                  />
                </Form.Group>
              </Col>
              <Col md="3">
                <Form.Group controlId="formBio" className="mb-3">
                  <Form.Label className={Styles["form-label"]}>Bio</Form.Label>
                  <Form.Control
                    type="text"
                    value={bio}
                    onChange={bioHandler}
                    required
                    className={Styles["form-control"]}
                  />
                </Form.Group>
              </Col>
              <Col md="3">
                <Form.Group controlId="formDesignation" className="mb-3">
                  <Form.Label className={Styles["form-label"]}>Designation</Form.Label>
                  <Form.Control
                    type="text"
                    value={designation}
                    onChange={designationHandler}
                    required
                    className={Styles["form-control"]}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md="2">
                <Button type="submit" className={`create-btn ${Styles["create-btn"]} w-100`}>
                  {editing ? "Update" : "Create"}
                </Button>
              </Col>
              <Row>
              <Col md="4" className="mt-4">
                <Form.Group controlId="formSearch" className={`mb-3 ${Styles["search-group"]}`}>
                  <Form.Label className={Styles["form-label"]}>Search</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Search trainers..."
                    onChange={searchHandler}
                    className={Styles["form-control"]}
                  />
                </Form.Group>
              </Col>
              </Row>
            </Row>
          </Form>
        </Col>
      </Row>
      <Row>
        <Col >
          <Table striped bordered hover className={Styles["trainer-table"]}>
            <thead>
              <tr>
                <th>ID</th>
                <th>Avatar</th>
                <th>Name</th>
                <th>Bio</th>
                <th>Designation</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredTrainers.map((trainer) => (
                <tr key={trainer.id}>
                  <td>{trainer.id}</td>
                  <td>
                    <img src={trainer.Avatar} alt={trainer.Name} className={Styles["trainer-avatar"]} />
                  </td>
                  <td>{trainer.Name}</td>
                  <td>{trainer.Bio}</td>
                  <td>{trainer.Designation}</td>
                  <td>
                    <div className="d-grid gap-2">
                      <Button variant="warning" className="mb-2" onClick={() => editHandler(trainer)}>
                        Edit
                      </Button>
                      <Button variant="danger" onClick={() => deleteHandler(trainer.id)}>
                        Delete
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
};

export default TrainersCrud;
