import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import  ReactQuill  from 'react-quill'
import 'react-quill/dist/quill.snow.css';

const BlogEditor = (Bdesc, onChange) => {
    const [showHead,setShowHead]=useState()
    const [head,setHead]=useState()
    const headerToolbarOptions = [
        [{ 'header': 1 }]
      ]
    
    const [blog,setBlog]=useState()
const toolbarOptions = [
    ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
    ['blockquote', 'code-block'],
    ['link', 'image', 'video', 'formula'],
  
    [{ 'header': 1 }, { 'header': 2 }],               // custom button values
    [{ 'list': 'ordered'}, { 'list': 'bullet' }, { 'list': 'check' }],
    [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
    [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
    [{ 'direction': 'rtl' }],                         // text direction
  
    [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
    [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
  
  
    ['clean']                                         // remove formatting button
  ];
  
  
    return (
    <Container>
    <div>
        <ReactQuill theme='snow'key={Bdesc} modules={{toolbar: toolbarOptions}} value={blog} onChange={setBlog}/></div>
    </Container>
  )
}

export default BlogEditor