import React from 'react'

import { Link } from 'react-router-dom';
import car from '../../assets/photo_2024-03-04_09-37-00.jpg'
import vot from '../../assets/46cae737ee3909bc9954e9b45e3761b6.png'



import './Home.css';
const Home1 = () => {
  return (
    <>
  
 <div style={{textAlign:"left",marginTop:"170px",marginLeft:"160px"}} >
    <p style={{fontSize:"12px",fontWeight:"400",fontFamily:"sans-serif",margin:"5px"}}> Arriving Summer 2019</p>
    <h1 style={{fontSize:"30px",fontWeight:"400",fontFamily:"revert",margin:"5px"}}> MAKE EVERY DAY<br/>LEGENDARY. </h1>
<p style={{fontSize:"10px",fontWeight:"400",fontFamily:"serif"}}>The culmimination of comfort,luxury,and powerrul living is embodied<br/>
in the First-Ever BMWX7 -the biggest BMW ever built.</p>
<Link className='border' style={{textDecoration:"none",fontSize:"15px" ,borderRadius:"20px",padding:"0px 10px",color:"white",backgroundColor:"#976E72"}}>EXPLORE</Link>
</div>







   <div className='parent' style={{position:"relative",bottom:"350px"}}>

  





   <img style={{position:"absolute",left:"680px"}} src={car} alt="" />
      <img style={{position:"absolute",top:"190px",left:"700px",height:"300px"}} src={vot} alt="" />  

      </div>
     
  </>
   
  )
}

export default Home1