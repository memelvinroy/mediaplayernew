import React from 'react'
import { Link } from "react-router-dom";

function Footer() {
  return (
   <>
   <div className='d-flex justify-content-center align-items -center'>
    <div className='footer d-flex align-items-center justify-content-evenly'>
      <div className='website' style={{width:'400px'}}>
        <h5><i class="fa-solid fa-video text-warning me-2"></i>Media Player</h5>
        <p style={{color:'white',textAlign:'justify'}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum aspernatur ratione quam voluptatem blanditiis consectetur ullam natus alias eius aliquam quas, asperiores perspiciatis minus quisquam nostrum laudantium corrupti iste consequatur!</p>
      </div>
      <div className='links d-flex flex-column ms-5'>
        <h4>Links</h4>
        <Link to ='/' style={{textDecoration:'none',color:'white'}}>Landing page</Link>
        <Link to ='/Home' style={{textDecoration:'none',color:'white'}}>Home</Link>
        <Link to ='/watch' style={{textDecoration:'none',color:'white'}}>WatchHistory</Link>

      </div>
      <div className='Guides d-flex flex-column ms-5'>
        <h4>Guides</h4>
        <Link to ='https://react.dev/' target='blank' style={{textDecoration:'none',color:'white'}}>React</Link>
        <Link to ='https://react-bootstrap.netlify.app/' target='blank'style={{textDecoration:'none',color:'white'}}>React Bootstrap</Link>
        <Link to ='https://bootswatch.com/' target='blank' style={{textDecoration:'none',color:'white'}}>Boots Watch</Link>

      </div>
      <div className='contact-us ms-5'>
      <h4>Contact Us</h4>

      <div className='d-flex'>
        <input type="text" className='form-control' placeholder='Enter your Email'/>
        <button className='btn-warning ms-3' >Subscribe</button>
      </div>
      <div className='d-flex justify-content-center align items-center mt-3'>
        <Link to = 'https://www.facebook.com/' target='blank' className='mt-3' style={{padding:'10px',color:'orange-yellow'}}> <i class="fa-brands fa-facebook fa-2x"></i></Link>
        <Link to = 'https://www.instagram.com/' target='blank' className='mt-3' style={{padding:'10px',color:'orange-yellow'}}><i class="fa-brands fa-instagram fa-2x"></i></Link>
        <Link to = 'https://twitter.com/i/flow/login' target='blank' className='mt-3'style={{padding:'10px',color:'orange-yellow'}}><i class="fa-brands fa-twitter fa-2x"></i></Link>
      </div>
</div>

    </div>
   </div>
   <p className='mt-5 text-center'>Copyright &copy; 2023 mediaplayer.Built with react</p>
   </>
  )
}

export default Footer