import React from 'react'
import Add from '../components/Add'
import Category from '../components/Category'
import View from '../components/View'
import Videocard from '../components/Videocard'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

function Home() {
  const navigatebyUrl = useNavigate()
  // create a state for  state lifting
  const[uploadVideoStatus,setUploadVideosStatus] = useState({})
  return (
    <>
    <div className='container mt-5 mb-5 d-flex justify-content-between align-item-center'>
<div className='add_videos'>
<Add setUploadVideosStatus = {setUploadVideosStatus}/>
</div>
<div className='watch_history'>
  <h3 style={{fontSize:'30px',cursor:'pointer'}} onClick={()=>navigatebyUrl('/watch')}>Watch History</h3>
</div>
    </div>
    <div className='container mt-5 mb-5 d-flex justify-content-between align-item-center'>
      <div className='col-md-6 mt-5'>
        <h4>All Videos</h4>
        <View uploadVideoStatus = {uploadVideoStatus}/>
        </div>
      <div><Category/>
    </div>
    </div>
    
    </>
  )
}

export default Home