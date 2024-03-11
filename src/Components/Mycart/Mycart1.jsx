import React from 'react'
import back1 from '../../assets/-6005666978204861585_121.jpg'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Img1 from '../../assets/Logo (2).png';
import { FaCartShopping } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import tab1 from '../../assets/BMW.png'
import tab2 from '../../assets/picture (3).png'
import tab3 from '../../assets/picture (4).png'
import tab4 from '../../assets/picture (5).png'
import  {Close} from '@mui/icons-material';



import './Mycart1.css';
import { IconButton } from '@mui/material';
const Mycart1 = () => {
  return (
    <>
   <div className='det'>
  <p  style={{position:"absolute",fontSize:"22px",textDecorationLine:"underline",bottom:"470px",left:"60px",fontFamily:"Comic Sans MS, Comic Sans, cursive"}}>my cart</p>

   <Navbar  style={{width:"100vw",position:"absolute",bottom:"580px"}} expand="lg" className="tertiary">
      <Container>
        <Navbar.Brand href="#home" ><img style={{width:"50px",height:"20px"}} src={Img1} alt="" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav style={{margin:"auto"}} className="m">
            <Nav.Link href="#home"  to="/" className={({ isActive }) => (isActive ? "active" : "")}>Home</Nav.Link>
            <Nav.Link href="#link" >Cotologout</Nav.Link>
            <Nav.Link href="#cont">Contoct Us</Nav.Link>
            <Nav.Link href="#help">Help</Nav.Link>
            
          </Nav>

        </Navbar.Collapse>
        <div>
        <FaCartShopping  style={{color:"#976E72"}}/>
<Link className='border'  style={{marginLeft:"6px",color:"#D5B8B8",textDecoration:"none",borderRadius:"15px",padding:"2px 5px" }}>Register</Link>
</div>
      </Container>

    </Navbar>

      <img  src={back1} alt=""  className='im1'/>
      <div>
      <table  style={{marginTop:"200px",marginLeft:'100px',width:"800px"}}>
      <thead >
        <tr>
          <td></td>
          <th>product</th>
          <th>price</th>
          <th>Color</th>
          <th>Delet</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><img style={{width:"100px",height:"100px"}} src={tab2} alt="" /></td>
          <td style={{margin:"0",fontFamily:"Arial Narrow, sans-serif",fontSize:"12px"}}><p style={{fontSize:"15px",color:"#976E72",fontWeight:"bold"}}>Audi</p><p style={{margin:"0"}}>code:#58506</p><p style={{margin:"0"}}>Engine capactiy:2081cc </p></td>
          <td>$240.55</td>
          <td>Block</td>
          <td><IconButton style={{":hover":{color:"red",rotate:"180deg"},transition:"0.3s"}} >
            <Close />
          </IconButton></td>
        </tr>
       
        <tr>
          <td><img style={{width:"100px",height:"100px"}} src={tab3} alt="" /></td>
          <td style={{margin:"0",fontFamily:"Arial Narrow, sans-serif",fontSize:"12px"}}><p style={{fontSize:"15px",color:"#976E72",fontWeight:"bold"}}>Honda</p><p style={{margin:"0"}}>code:#58506</p><p style={{margin:"0"}}>Engine capactiy:2081cc</p></td>
          <td>$240.55</td>
          <td>Block</td>
          <td><IconButton sx={{":hover":{color:"red",rotate:"180deg"},transition:"0.3s"}} >
            <Close />
          </IconButton></td>
        </tr>

        <tr>
          <td><img style={{width:"100px",height:"100px"}} src={tab4} alt="" /></td>
          <td style={{margin:"0",fontFamily:"Arial Narrow, sans-serif",fontSize:"12px"}}><p style={{fontSize:"15px",color:"#976E72",fontWeight:"bold"}}>Bmw</p><p style={{margin:"0"}}>code:#58506</p><p style={{margin:"0"}}>Engine capactiy:2081cc </p></td>
          <td>$240.55</td>
          <td>Block</td>
          <td><IconButton sx={{":hover":{color:"red",rotate:"180deg"},transition:"0.3s"}} >
            <Close />
          </IconButton></td>
        </tr>
        <tr>
          <td><img style={{width:"100px",height:"100px",borderRadius:"20px"}} src={tab1} alt="" /></td>
          <td style={{margin:"0",fontFamily:"Arial Narrow, sans-serif",fontSize:"12px"}}><p style={{fontSize:"15px",color:"#976E72",fontWeight:"bold"}}>volvo</p><p >code:#58506</p><p>Engine capactiy:2081cc </p></td>
          <td>$240.55</td>
          <td>Block</td>
          <td><IconButton sx={{":hover":{color:"red",rotate:"180deg"},transition:"0.3s"}} >
            <Close />
          </IconButton></td>
        </tr>
      </tbody>
    </table>
    </div>
    </div>
  </>
  )
}

export default Mycart1
