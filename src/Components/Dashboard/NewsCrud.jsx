import React, { useState } from "react";
import newsData from "../../Assets/Data/News";
import { Button, Form, Container, Row, Col, Card, Alert } from "react-bootstrap";
import Styles from "./NewsCrud.module.css";
import 'bootstrap/dist/css/bootstrap.min.css';

const NewsList = ({ newsList, handleEdit, handleDelete }) => {
    return (
        <Row className={Styles.news_row}>
            {newsList.map(news => (
                <Col md="4" key={news.id} className="mb-4">
                    <div className={Styles.news_card_wrapper}>
                        <Card className={Styles.card_custom}>
                            <Card.Body>
                                <Card.Title>News ID: {news.id}</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">Published ON: {news.date}</Card.Subtitle>
                                <Card.Text>News Detail: {news.content}</Card.Text>
                                <Button variant="warning" onClick={() => handleEdit(news)} className="me-2">
                                    Edit
                                </Button>
                                <Button variant="danger" onClick={() => handleDelete(news.id)}>
                                    Delete
                                </Button>
                            </Card.Body>
                        </Card>
                    </div>
                </Col>
            ))}
        </Row>
    );
};

const NewsCrud = () => {
    const [newsDesc, setNewsDesc] = useState("");
    const [newsId, setNewsId] = useState("");
    const [editing, setEditing] = useState(false);
    const [currentNews, setCurrentNews] = useState({});
    const [newsList, setNewsList] = useState(newsData);
    const [searchResults, setSearchResults] = useState(newsData);
    const [errorMessage, setErrorMessage] = useState("");

    const handleInputDesc = (e) => {
        setNewsDesc(e.target.value);
    };

    const handleInputID = (e) => {
        setNewsId(e.target.value);
    };

    const handleDelete = (newsIdToDelete) => {
        const updatedNewsList = newsList.filter(news => news.id !== newsIdToDelete);
        setNewsList(updatedNewsList);
        setSearchResults(updatedNewsList);
    };

    const handleEdit = (news) => {
        setEditing(true);
        setCurrentNews(news);
        setNewsId(news.id);
        setNewsDesc(news.content);
    };

    const handleUpdate = (e) => {
        e.preventDefault();
        const updatedNewsList = newsList.map(news =>
            news.id === currentNews.id ? { id: newsId, date: currentNews.date, content: newsDesc } : news
        );
        setNewsList(updatedNewsList);
        setSearchResults(updatedNewsList);
        setEditing(false);
        setNewsId("");
        setNewsDesc("");
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const id = parseInt(newsId, 10);
        if (isNaN(id) || newsList.some(news => news.id === id)) {
            setErrorMessage("News ID must be a unique number");
            return;
        }

        const newNews = { id: newsId, date: new Date().toLocaleDateString(), content: newsDesc };
        setNewsList([...newsList, newNews]);
        setSearchResults([...newsList, newNews]);
        setNewsId("");
        setNewsDesc("");
        setErrorMessage("");
    };

    const handleSearch = (e) => {
        const toBeSearch = e.target.value.toLowerCase();
        const searchByList = newsList.filter(news => news.content.toLowerCase().includes(toBeSearch));
        setSearchResults(searchByList);
    };

    return (
        <Container className={Styles.container_custom}>
            <Row>
                <Col md="8">
                    <Card className={Styles.card_custom}>
                        <Card.Body>
                            <Card.Title>{editing ? "Edit News" : "Create News"}</Card.Title>
                            <Form onSubmit={editing ? handleUpdate : handleSubmit} className={Styles.form_custom}>
                                {errorMessage && (
                                    <Alert variant="danger">
                                        {errorMessage}
                                    </Alert>
                                )}
                                <Form.Group className="mb-3">
                                    <Form.Label className={Styles.form_label}>News ID:</Form.Label>
                                    <Form.Control
                                        type="text"
                                        value={newsId}
                                        onChange={handleInputID}
                                        required
                                        isInvalid={!!errorMessage}
                                        className={Styles.form_control}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {errorMessage}
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label className={Styles.form_label}>News Description:</Form.Label>
                                    <Form.Control
                                        type="text"
                                        value={newsDesc}
                                        onChange={handleInputDesc}
                                        required
                                        className={Styles.form_control}
                                    />
                                </Form.Group>
                                <div className={Styles.button_group}>
                                    <Button variant="success" type="submit">
                                        {editing ? "Update" : "Create"}
                                    </Button>
                                    {editing && (
                                        <Button
                                            variant="secondary"
                                            onClick={() => setEditing(false)}
                                        >
                                            Cancel
                                        </Button>
                                    )}
                                </div>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md="4">
                    <Card className={Styles.card_custom}>
                        <Card.Body>
                            <Form.Group className="mb-3">
                                <Form.Label className={Styles.form_label}>Search News:</Form.Label>
                                <Form.Control
                                    type="text"
                                    onChange={handleSearch}
                                    className={Styles.form_control}
                                />
                            </Form.Group>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row className="mt-5">
                <Col>
                    <NewsList newsList={searchResults} handleEdit={handleEdit} handleDelete={handleDelete} />
                </Col>
            </Row>
        </Container>
    );
};

export default NewsCrud;
