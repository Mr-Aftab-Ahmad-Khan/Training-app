import React, { useState } from "react";
import EventsData from "../../Assets/Data/EventsData";
import { Container, Row, Col, Button } from "react-bootstrap";

const EventsCrud = () => {
  const [events, setEvents] = useState(EventsData);

  const dateHandler = (e) => {
    console.log(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <Container>
        <Row>
          <Col>
            <form>
              <label>
                Content:
                <input type="text" name="Content" />
              </label>
              <label>
                Location:
                <input type="text" name="Location" />
              </label>
              <label>
                Day/Month:
                <input type="Date" name="Date" onChange={dateHandler} />
              </label>

              <input type="submit" value="Submit" onClick={submitHandler} />
            </form>
          </Col>
        </Row>
        <Row>
          <Col>
            <ul className="mt-5">
              {EventsData.map((event) => (
                <li key={event.id}>
                  <h3>{event.Content}</h3>
                  <p>{event.location}</p>
                  <Button variant="warning">Edit</Button>
                  <Button variant="danger">Delete</Button>
                </li>
              ))}
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default EventsCrud;
