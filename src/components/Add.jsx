import React from 'react'
import { useState } from 'react';
import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { uploadVideo } from '../services/allAPI';
// import { Await } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Add({setUploadVideosStatus}) {
    const [show, setShow] = useState(false);

const handleClose = () => setShow(false);
const handleShow = () => setShow(true); 
const [video,setVideo] = useState({
  id:'',
  caption:'',
  url:'',
  embededLink:''
 

});
console.log(video);
const embededVideoLink = (e)=>{
  const {value} = e.target
  console.log(value.slice(-11));
  const videoLink = `https://www.youtube.com/embed/${value.slice(-11)}`
  setVideo({...video,embededLink:videoLink})
}
console.log('====video detsils===');
console.log(video);
const handleUpload = async()=>{
  const {id,caption,url,embededLink } = video
  if (!id || !caption || !url || !embededLink){
    toast.warn('please fill the form')
   
  }
  else{
    const response = await uploadVideo(video);
    if(response.status == 201) {
        toast.success(`Uploaded Successfully ${response.data.caption}`);
        setUploadVideosStatus(response.data)
        handleClose();

  }
  else {
    toast.error('something went wrong')
  }}}
  return(
    <>
    <div className='d-flex align -items-center'>
      <h5>upload new video</h5>
      <button className='btn' onClick ={handleShow}> <i class = 'fa-solid fa-cloud-arrow-up fs-5 ms-3'></i></button>
    </div>
    <Modal
  
        show={show}
        
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>
            <i class = 'fa-solid fa-film text-warning me-3'></i>Upload Video</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Please fill the Form</p>
          <Form className='border border-secondary p-3 rounded'> 
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="text" placeholder="Enter Video ID"  onChange={(e=>setVideo({... video,id:e.target.value}))}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="text" placeholder="Enter Video Caption" onChange={(e=>setVideo({... video,caption:e.target.value}))} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="text" placeholder="Enter Video Image URL" onChange={(e=>setVideo({... video,url:e.target.value}))} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="text" placeholder="Enter Video Youtube Link" onChange={(e) =>embededVideoLink(e)} />
      </Form.Group>
      </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" className='btn-warning' onClick={handleUpload}>Upload</Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer
      position='top-right'
      autoClose = {2000}
      theme='colored'>
      </ToastContainer>
    </>
  )
}

export default Add