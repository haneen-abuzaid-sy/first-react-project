import React from 'react'
import pictur2 from '../../assets/picture (3).png'
import { Link } from 'react-router-dom'
import { MdOutlineAirlineSeatLegroomExtra } from "react-icons/md";
import { GiMassDriver } from "react-icons/gi";
import { BiAlbum } from "react-icons/bi";
import { SlArrowRight } from "react-icons/sl";
const Cart1 = () => {
  // const  namecar= ["ADUI","Honda","VOLVO","BMW"]
  return (
    <>
    
<h1 style={{textAlign:"center",fontSize:"21px",padding:"30px"}}>Top Categories</h1>

    <div style={{    width: "60vw",
    margin: "0 auto",
    display: "flex",
    flexWrap:"wrap",
    gap:"100px",
    textDecoration:"none",
    padding:"20px",
 }}>
  
      <div>
        <img style={{width:"240px",height:"240px"}} src={pictur2} alt="" />
        <h1 style={{marginLeft:"100px",fontSize:"18px",fontWeight:"5px"}}>AUDI</h1>
        <div style={{display:"flex",gap:"10px"}}>
         <MdOutlineAirlineSeatLegroomExtra style={{color:"rgb(221, 216, 216)",fontSize:"12px",marginTop:"6px"}} /> <p style={{color:"rgb(221, 216, 216)",fontSize:"14px"}}>Seator</p>
          <GiMassDriver style={{color:"rgb(221, 216, 216)",fontSize:"12px",marginTop:"6px"}} /><p style={{color:"rgb(221, 216, 216)",fontSize:"14px"}}>Manual</p>
          <BiAlbum style={{color:"rgb(221, 216, 216)",fontSize:"12px",marginTop:"6px"}}/><p  style={{color:"rgb(221, 216, 216)",fontSize:"14px"}}>5KM/14T</p>
        </div>
        <h1 style={{marginLeft:"60px",fontSize:"15px"}}>Staring at $500/Day</h1>
        <div style={{marginLeft:"30px"}}>
        <Link className='border' style={{textDecoration:"none",borderRadius:"20px",margin:"10px",padding:"3px 10px",color:"black",fontSize:"13px"}}>Details<SlArrowRight style={{fontSize:"9px"}}/></Link>
        <Link className='border' style={{textDecoration:"none" ,borderRadius:"20px",padding:"3px 10px",color:"white",backgroundColor:"#976E72",fontSize:"13px"}}>Buy Now</Link>
        </div>
      </div>
   
      


      <div>
        <img style={{width:"240px",height:"240px"}} src={pictur2} alt="" />
        <h1 style={{marginLeft:"100px",fontSize:"18px",fontWeight:"5px"}}>Honda</h1>
        <div style={{display:"flex",gap:"10px"}}>
         <MdOutlineAirlineSeatLegroomExtra style={{color:"rgb(221, 216, 216)",fontSize:"12px",marginTop:"6px"}} /> <p style={{color:"rgb(221, 216, 216)",fontSize:"14px"}}>Seator</p>
          <GiMassDriver style={{color:"rgb(221, 216, 216)",fontSize:"12px",marginTop:"6px"}} /><p style={{color:"rgb(221, 216, 216)",fontSize:"14px"}}>Manual</p>
          <BiAlbum style={{color:"rgb(221, 216, 216)",fontSize:"12px",marginTop:"6px"}}/><p  style={{color:"rgb(221, 216, 216)",fontSize:"14px"}}>5KM/14T</p>
        </div>
        <h1 style={{marginLeft:"60px",fontSize:"15px"}}>Staring at $500/Day</h1>
        <div style={{marginLeft:"30px"}}>
        <Link className='border' style={{textDecoration:"none",borderRadius:"20px",margin:"10px",padding:"3px 10px",color:"black",fontSize:"13px"}}>Details<SlArrowRight style={{fontSize:"9px"}}/></Link>
        <Link className='border' style={{textDecoration:"none",fontSize:"15px" ,borderRadius:"20px",padding:"3px 10px",color:"white",backgroundColor:"#976E72",fontSize:"13px"}}>Buy Now</Link>
        </div>
      </div>






      <div>
        <img style={{width:"240px",height:"240px"}} src={pictur2} alt="" />
        <h1 style={{marginLeft:"100px",fontSize:"18px",fontWeight:"5px"}}>teks</h1>
        <div style={{display:"flex",gap:"10px"}}>
         <MdOutlineAirlineSeatLegroomExtra style={{color:"rgb(221, 216, 216)",fontSize:"12px",marginTop:"6px"}} /> <p style={{color:"rgb(221, 216, 216)",fontSize:"14px"}}>Seator</p>
          <GiMassDriver style={{color:"rgb(221, 216, 216)",fontSize:"12px",marginTop:"6px"}} /><p style={{color:"rgb(221, 216, 216)",fontSize:"14px"}}>Manual</p>
          <BiAlbum style={{color:"rgb(221, 216, 216)",fontSize:"12px",marginTop:"6px"}}/><p  style={{color:"rgb(221, 216, 216)",fontSize:"14px"}}>5KM/14T</p>
        </div>
        <h1 style={{marginLeft:"60px",fontSize:"15px"}}>Staring at $500/Day</h1>
        <div style={{marginLeft:"30px"}}>
        <Link className='border' style={{textDecoration:"none",borderRadius:"20px",margin:"10px",padding:"3px 10px",color:"black",fontSize:"13px"}}>Details<SlArrowRight style={{fontSize:"9px"}}/></Link>
        <Link className='border' style={{textDecoration:"none",fontSize:"15px" ,borderRadius:"20px",padding:"3px 10px",color:"white",backgroundColor:"#976E72",fontSize:"13px"}}>Buy Now</Link>
        </div>
      </div>




      <div>
        <img style={{width:"240px",height:"240px"}} src={pictur2} alt="" />
        <h1 style={{marginLeft:"100px",fontSize:"18px",fontWeight:"5px"}}>teks</h1>
        <div style={{display:"flex",gap:"10px"}}>
         <MdOutlineAirlineSeatLegroomExtra style={{color:"rgb(221, 216, 216)",fontSize:"12px",marginTop:"6px"}} /> <p style={{color:"rgb(221, 216, 216)",fontSize:"14px"}}>Seator</p>
          <GiMassDriver style={{color:"rgb(221, 216, 216)",fontSize:"12px",marginTop:"6px"}} /><p style={{color:"rgb(221, 216, 216)",fontSize:"14px"}}>Manual</p>
          <BiAlbum style={{color:"rgb(221, 216, 216)",fontSize:"12px",marginTop:"6px"}}/><p  style={{color:"rgb(221, 216, 216)",fontSize:"14px"}}>5KM/14T</p>
        </div>
        <h1 style={{marginLeft:"60px",fontSize:"15px"}}>Staring at $500/Day</h1>
        <div style={{marginLeft:"30px"}}>
        <Link className='border' style={{textDecoration:"none",borderRadius:"20px",margin:"10px",padding:"3px 10px",color:"black",fontSize:"13px"}}>Details<SlArrowRight style={{fontSize:"9px"}}/></Link>
        <Link className='border' style={{textDecoration:"none",fontSize:"15px" ,borderRadius:"20px",padding:"3px 10px",color:"white",backgroundColor:"#976E72",fontSize:"13px"}}>Buy Now</Link>
        </div>
      </div>





      </div>
    
   
    
    </>
  )
}

export default Cart1