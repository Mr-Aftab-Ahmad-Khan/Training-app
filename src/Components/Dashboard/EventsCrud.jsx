import React, { useState } from "react";
import EventsData from "../../Assets/Data/EventsData";
import { Container, Row, Col, Button, Form, Table } from "react-bootstrap";
import Styles from "./EventsCrud.module.css";

const EventsCrud = () => {
  const [events, setEvents] = useState(EventsData);
  const [content, setContent] = useState("");
  const [location, setLocation] = useState("");
  const [date, setDate] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [editing, setEditing] = useState(false);
  const [currentEvent, setCurrentEvent] = useState({});

  const dateHandler = (e) => setDate(e.target.value);
  const contentHandler = (e) => setContent(e.target.value);
  const locationHandler = (e) => setLocation(e.target.value);
  const searchHandler = (e) => setSearchTerm(e.target.value.toLowerCase());

  const deleteHandler = (id) => {
    const deleted = events.filter((event) => event.id !== id);
    setEvents(deleted);
  };

  const editHandler = (event) => {
    setEditing(true);
    setCurrentEvent(event);
    setContent(event.content);
    setLocation(event.location);
    setDate(event.date);
  };

  const updateHandler = (e) => {
    e.preventDefault();
    const updatedEvents = events.map((event) =>
      event.id === currentEvent.id ? { id: event.id, content, location, date } : event
    );
    setEvents(updatedEvents);
    setEditing(false);
    setContent("");
    setLocation("");
    setDate("");
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (editing) {
      updateHandler(e);
    } else {
      const newEvent = { id: events.length + 1, content, location, date };
      setEvents([newEvent, ...events]);
      setContent("");
      setLocation("");
      setDate("");
    }
  };

  const filteredEvents = events.filter((event) =>
    event.content.toLowerCase().includes(searchTerm) ||
    event.location.toLowerCase().includes(searchTerm) ||
    event.date.toLowerCase().includes(searchTerm)
  );

  return (
    <Container className={`mt-2 ${Styles.scrollview}`}>
      <h1>Create & Update Events</h1>
      <Row className="justify-content-center mb-4">
        <Col md="12">
          <Form onSubmit={submitHandler} className="p-4 bg-light rounded shadow-sm">
            <Row>
              <Col md="3">
                <Form.Group controlId="formContent" className="mb-3">
                  <Form.Label className={Styles["form-label"]}>Content</Form.Label>
                  <Form.Control
                    type="text"
                    value={content}
                    onChange={contentHandler}
                    required
                    className={Styles["form-control"]}
                  />
                </Form.Group>
              </Col>
              <Col md="3">
                <Form.Group controlId="formLocation" className="mb-3">
                  <Form.Label className={Styles["form-label"]}>Location</Form.Label>
                  <Form.Control
                    type="text"
                    value={location}
                    onChange={locationHandler}
                    required
                    className={Styles["form-control"]}
                  />
                </Form.Group>
              </Col>
              <Col md="3">
                <Form.Group controlId="formDate" className="mb-3">
                  <Form.Label className={Styles["form-label"]}>Date</Form.Label>
                  <Form.Control
                    type="date"
                    value={date}
                    onChange={dateHandler}
                    required
                    className={Styles["form-control"]}
                  />
                </Form.Group>
              </Col>
              <Col md="3" className="d-flex align-items-center mt-3">
                <Button type="submit" className={`create-btn ${Styles["create-btn"]} w-100`}>
                  {editing ? "Update" : "Create"}
                </Button>
              </Col>
            </Row>
            <Row>
              <Col md="4">
                <Form.Group controlId="formSearch" className={`mb-3 ${Styles["search-group"]}`}>
                  <Form.Label className={Styles["form-label"]}>Search</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Search events..."
                    onChange={searchHandler}
                    className={Styles["form-control"]}
                  />
                </Form.Group>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
      <Row>
        <Col >
          <Table striped bordered hover className={Styles["event-table"]}>
            <thead>
              <tr>
                <th>ID</th>
                <th>Content</th>
                <th>Location</th>
                <th>Date</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredEvents.map((event) => (
                <tr key={event.id}>
                  <td>{event.id}</td>
                  <td>{event.content}</td>
                  <td>{event.location}</td>
                  <td>{event.date}</td>
                  <td>
                    <div className="d-grid gap-2">
                      <Button variant="warning" className="mb-2" onClick={() => editHandler(event)}>
                        Edit
                      </Button>
                      <Button variant="danger" onClick={() => deleteHandler(event.id)}>
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

export default EventsCrud;
