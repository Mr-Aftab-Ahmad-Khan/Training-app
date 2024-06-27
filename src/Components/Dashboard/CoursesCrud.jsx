import React, { useState } from "react";
import CoursesData from "../../Assets/Data/Coursedetail";
import { Container, Row, Col, Button, Form, Card } from "react-bootstrap";
import Styles from "./CoursesCrud.module.css";

const CoursesCrud = () => {
  const [courses, setCourses] = useState(CoursesData);
  const [img, setImg] = useState("");
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [category, setCategory] = useState("");
  const [duration, setDuration] = useState("");
  const [environment, setEnvironment] = useState("");
  const [editing, setEditing] = useState(false);
  const [currentCourse, setCurrentCourse] = useState({});

  const imgHandler = (e) => setImg(e.target.value);
  const titleHandler = (e) => setTitle(e.target.value);
  const descHandler = (e) => setDesc(e.target.value);
  const categoryHandler = (e) => setCategory(e.target.value);
  const durationHandler = (e) => setDuration(e.target.value);
  const environmentHandler = (e) => setEnvironment(e.target.value);

  const deleteHandler = (id) => {
    const updatedCourses = courses.filter((course) => course.id !== id);
    setCourses(updatedCourses);
  };

  const editHandler = (course) => {
    setEditing(true);
    setCurrentCourse(course);
    setImg(course.img);
    setTitle(course.title);
    setDesc(course.desc);
    setCategory(course.category);
    setDuration(course.duration);
    setEnvironment(course.environment);
  };

  const updateHandler = (e) => {
    e.preventDefault();
    const updatedCourses = courses.map((course) =>
      course.id === currentCourse.id
        ? { ...course, img, title, desc, category, duration, environment }
        : course
    );
    setCourses(updatedCourses);
    setEditing(false);
    setImg("");
    setTitle("");
    setDesc("");
    setCategory("");
    setDuration("");
    setEnvironment("");
  };

  const handleSearch = (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const searchResults = CoursesData.filter(
      (course) =>
        course.title.toLowerCase().includes(searchTerm) ||
        course.Desc.toLowerCase().includes(searchTerm) ||
        course.Category.toLowerCase().includes(searchTerm) ||
        course.duration.toLowerCase().includes(searchTerm) ||
        course.enviroment.toLowerCase().includes(searchTerm)
    );
    setCourses(searchResults);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (editing) {
      updateHandler(e);
    } else {
      const newCourse = {
        id: String(courses.length + 1),
        img,
        title,
        desc,
        category,
        duration,
        environment,
      };
      setCourses([newCourse, ...courses]);
      setImg("");
      setTitle("");
      setDesc("");
      setCategory("");
      setDuration("");
      setEnvironment("");
    }
  };

  return (
    <Container className={`${Styles.scrollView} mt-3`}>
      <h1>Add & Update Courses</h1>
      <Row className="justify-content-center mb-4">
        <Col md="12">
          <Card className={Styles.card_custom}>
            <Card.Body>
              <Form onSubmit={submitHandler} className={Styles.form_custom}>
                <Row className="mb-3">
                  <Col md="2">
                    <Form.Group controlId="formImg" className="mb-3">
                      <Form.Label className={Styles.form_label}>
                        Image URL
                      </Form.Label>
                      <Form.Control
                        type="text"
                        value={img}
                        onChange={imgHandler}
                        required
                        className={Styles.form_control}
                      />
                    </Form.Group>
                  </Col>
                  <Col md="2">
                    <Form.Group controlId="formTitle" className="mb-3">
                      <Form.Label className={Styles.form_label}>
                        Title
                      </Form.Label>
                      <Form.Control
                        type="text"
                        value={title}
                        onChange={titleHandler}
                        required
                        className={Styles.form_control}
                      />
                    </Form.Group>
                  </Col>
                  <Col md="2">
                    <Form.Group controlId="formCategory" className="mb-3">
                      <Form.Label className={Styles.form_label}>
                        Category
                      </Form.Label>
                      <Form.Control
                        type="text"
                        value={category}
                        onChange={categoryHandler}
                        required
                        className={Styles.form_control}
                      />
                    </Form.Group>
                  </Col>
                  <Col md="2">
                    <Form.Group controlId="formDuration" className="mb-3">
                      <Form.Label className={Styles.form_label}>
                        Duration
                      </Form.Label>
                      <Form.Control
                        type="text"
                        value={duration}
                        onChange={durationHandler}
                        required
                        className={Styles.form_control}
                      />
                    </Form.Group>
                  </Col>
                  <Col md="2">
                    <Form.Group controlId="formEnvironment" className="mb-3">
                      <Form.Label className={Styles.form_label}>
                        Environment
                      </Form.Label>
                      <Form.Control
                        type="text"
                        value={environment}
                        onChange={environmentHandler}
                        required
                        className={Styles.form_control}
                      />
                    </Form.Group>
                  </Col>
                  <Col md="2" className="d-flex align-items-start mt-4">
                    <Button
                      type="submit"
                      className={`w-100 ${Styles.create_btn}`}
                    >
                      {editing ? "Update" : "Create"}
                    </Button>
                  </Col>
                </Row>
                <Row>
                  <Col md="4">
                    <Form.Group controlId="formSearch">
                      <Form.Label className={Styles.form_label}>
                        Search Courses
                      </Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Search Courses"
                        onChange={handleSearch}
                        className={Styles.form_control}
                      />
                    </Form.Group>
                  </Col>
                </Row>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="justify-content-start "></Row>
      <Row className="mt-5">
        <Col>
          <div className={Styles.course_list}>
            {courses.map((course) => (
              <Card key={course.id} className={`mb-4 ${Styles.course_item}`}>
                <Card.Img
                  variant="top"
                  src={course.img}
                  className={Styles.card_img}
                />
                <Card.Body>
                  <Card.Title>{course.title}</Card.Title>
                  <Card.Text>{course.Desc}</Card.Text>
                  <Card.Text>
                    <strong>{course.Category}</strong>
                  </Card.Text>
                  <Card.Text>
                    <strong>Duration:</strong> {course.duration}
                  </Card.Text>
                  <Card.Text>
                    <strong>Environment:</strong> {course.enviroment}
                  </Card.Text>
                  <Button
                    variant="warning"
                    className="me-2"
                    onClick={() => editHandler(course)}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="danger"
                    onClick={() => deleteHandler(course.id)}
                  >
                    Delete
                  </Button>
                </Card.Body>
              </Card>
            ))}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default CoursesCrud;
