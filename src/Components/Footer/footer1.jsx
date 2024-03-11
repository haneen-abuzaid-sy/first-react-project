import React from 'react'
import img10 from '../../assets/Logo (2).png'
import { CiLocationOn } from "react-icons/ci";
import { BsTelephone } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";
import { SlSocialFacebook } from "react-icons/sl";
import { FaInstagram } from "react-icons/fa6";
import { CiTwitter } from "react-icons/ci";
const footer1 = () => {
  return (
    <div style={{width:"100vw" ,display:"flex",gap:"80px",marginTop:"50px",backgroundColor:" rgb(229, 235, 235)",paddingTop:"30px",fontSize:"12px",flexWrap:"wrap"}}>
<div style={{marginLeft:"120px"}}>
    <img style={{width:"70px",height:"20px"}} src={img10} alt="" />
    <p style={{marginTop:"12px"}}>CAR Company</p>
</div>
<div>
    <p>menu</p>
    <p>Home</p>
    <p>Car Catalogue</p>
    <p>Services</p>
    
</div>
<div>
    <p>Further Information</p>
    <p>Terms & Conditions</p>
    <p>Privicy Policy</p>
</div>
<div>
    <p><CiLocationOn /> 647p+4GS,Seif AL<br/>-Doleg Alepoo,Syria</p>
    <p><BsTelephone />+96323456</p>
    <p><MdOutlineEmail />taged@gmail.com</p>
</div>

<div>
    <p>Follow us</p>
    <div style={{display:"flex"}}>
        <p><SlSocialFacebook /></p>
        <p> <FaInstagram /></p>
    <p><CiTwitter /></p>
      
      </div>
</div>

    </div>
  )
}

export default footer1