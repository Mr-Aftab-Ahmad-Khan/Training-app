import React, { useState } from 'react';
import { Container, Row, Col, Button, Form, Table } from 'react-bootstrap';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import BlogsData from '../../Assets/Data/Blogs';
import Styles from './BlogsCrud.module.css';

const BlogsCrud = () => {
  const [blogs, setBlogs] = useState(BlogsData);
  const [editingBlogId, setEditingBlogId] = useState(null);
  const [newBlog, setNewBlog] = useState({
    id: null,
    BTitle: '',
    Bdesc: '',
    BCategory: '',
    imageUrl: '',
  });
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewBlog((prevBlog) => ({
      ...prevBlog,
      [name]: value,
    }));
  };

  const handleCreate = (e) => {
    e.preventDefault();
    const id = blogs.length + 1;
    const createdBlog = { ...newBlog, id };
    const updatedBlogs = [...blogs, createdBlog];
    setBlogs(updatedBlogs);
    resetForm();
    updateBlogsData(updatedBlogs); // Update Blogs.js file (simulated)
  };

  const handleEdit = (blog) => {
    setEditingBlogId(blog.id);
    setNewBlog({ ...blog });
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    const updatedBlogs = blogs.map((blog) =>
      blog.id === newBlog.id ? { ...newBlog } : blog
    );
    setBlogs(updatedBlogs);
    setEditingBlogId(null);
    resetForm();
    updateBlogsData(updatedBlogs); // Update Blogs.js file (simulated)
  };

  const handleDelete = (id) => {
    const filteredBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(filteredBlogs);
    updateBlogsData(filteredBlogs); // Update Blogs.js file (simulated)
  };

  const resetForm = () => {
    setNewBlog({
      id: null,
      BTitle: '',
      Bdesc: '',
      BCategory: '',
      imageUrl: '',
    });
  };

  const updateBlogsData = (updatedBlogs) => {
    console.log('Updated Blogs:', updatedBlogs);
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  const filteredBlogs = blogs.filter((blog) =>
    blog.BTitle.toLowerCase().includes(searchTerm) ||
    blog.Bdesc.toLowerCase().includes(searchTerm) ||
    blog.BCategory.toLowerCase().includes(searchTerm)
  );

  const renderDescription = (Bdesc) => {
    return { __html: Bdesc };
  };

  return (
    <Container className={`mt-2 ${Styles.scrollView}`}>
      <h1>Create & Update Blogs</h1>
      <Row className="justify-content-center mb-4">
        <Col md="12">
          <Form onSubmit={editingBlogId !== null ? handleUpdate : handleCreate} className={Styles.form}>
            <Row>
              <Col md="4">
                <Form.Group controlId="BTitle" className="mb-3">
                  <Form.Label>Title</Form.Label>
                  <Form.Control
                    type="text"
                    name="BTitle"
                    value={newBlog.BTitle}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
              </Col>
              <Col md="4">
                <Form.Group controlId="BCategory" className="mb-3">
                  <Form.Label>Category</Form.Label>
                  <Form.Control
                    type="text"
                    name="BCategory"
                    value={newBlog.BCategory}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
              </Col>
              <Col md="4">
                <Form.Group controlId="imageUrl" className="mb-3">
                  <Form.Label>Image URL</Form.Label>
                  <Form.Control
                    type="text"
                    name="imageUrl"
                    value={newBlog.imageUrl}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md="12">
                <Form.Group controlId="Bdesc" className="mb-3">
                  <Form.Label>Description</Form.Label>
                  <ReactQuill
                    theme="snow"
                    value={newBlog.Bdesc}
                    onChange={(value) => setNewBlog({ ...newBlog, Bdesc: value })}
                    modules={{ toolbar: true }}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md="12" className="d-flex justify-content-end">
                <Button variant="primary" type="submit" className="me-2">
                  {editingBlogId !== null ? 'Update Blog' : 'Create Blog'}
                </Button>
                {editingBlogId !== null && (
                  <Button variant="secondary" onClick={resetForm}>
                    Cancel
                  </Button>
                )}
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
      <Row className={`${Styles.searchGroup} mb-4`}>
  <Col md="4">
    <Form.Group controlId="searchBar">
      <Form.Label>Search</Form.Label>
      <Form.Control
        type="text"
        placeholder="Search blogs..."
        onChange={handleSearch}
        className={Styles.searchControl}
      />
    </Form.Group>
  </Col>
</Row>

      <Row className="justify-content-center mt-4">
        <Col md="12">
          <Table striped bordered hover className={Styles.blogTable}>
            <thead>
              <tr>
                <th>Image</th>
                <th>Title</th>
                <th>Description</th>
                <th>Category</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredBlogs.map((blog) => (
                <tr key={blog.id}>
                  <td>
                    <img
                      src={blog.imageUrl}
                      alt={blog.BTitle}
                      className={Styles.blogImage}
                    />
                  </td>
                  <td>{blog.BTitle}</td>
                  <td>
                    <div dangerouslySetInnerHTML={renderDescription(blog.Bdesc)} />
                  </td>
                  <td>{blog.BCategory}</td>
                  <td>
                    <div className="d-flex">
                      <Button variant="warning" className="me-2" onClick={() => handleEdit(blog)}>
                        Edit
                      </Button>
                      <Button variant="danger" onClick={() => handleDelete(blog.id)}>
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

export default BlogsCrud;
