import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import  ReactQuill  from 'react-quill'
import 'react-quill/dist/quill.snow.css';

const BlogEditor = () => {
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
        <button onClick={()=>{setShowHead(!showHead)}}>+</button>
   {showHead && <ReactQuill theme='snow' modules={{toolbar: headerToolbarOptions}} value={head} placeholder='Heading' onChange={setHead}/>}
        <ReactQuill theme='snow' modules={{toolbar: toolbarOptions}} value={blog} onChange={setBlog}/></div>
        {head}
    </Container>
  )
}

export default BlogEditor