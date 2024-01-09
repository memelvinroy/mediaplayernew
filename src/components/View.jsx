import React from 'react'
import  Row  from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Videocard from './Videocard'
import { useEffect,useState } from 'react'
import { getAllVideos } from '../services/allAPI'


function View({uploadVideoStatus}) {
  const [allVideos,setAllvideo]= useState([])
  const [deleteVideoStatus,setDeleteVideoStatus] = useState(false)
  const getAllUploadedVideos = async()=>{
    const response = await getAllVideos();
    const {data} = response
    setAllvideo(data)
    
  }
  useEffect(()=>{
    getAllUploadedVideos()
  },[uploadVideoStatus,deleteVideoStatus])
  console.log('===all videos');
    console.log(allVideos);
  return (
   <>
   <Row>
    {
      allVideos?.length>0?
      allVideos.map((video)=>(
        <Col sm={12} md={6} lg={4} xl={4} className='m-5'>
     <Videocard displayVideo ={video} setDeleteVideoStatus = 
     {setDeleteVideoStatus}/>
     </Col>
      ))
      :
      
     <p> No item to display</p>
}
</Row>
</>
  
  )
}

export default View