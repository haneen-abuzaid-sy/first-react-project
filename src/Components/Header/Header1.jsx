import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Img1 from '../../assets/Logo (2).png';
import { FaCartShopping } from "react-icons/fa6";

import { Link } from 'react-router-dom';
import './Header1.css'
const Header1 = () => {
    return (
       <>
        <Navbar expand="lg" className="bg-body-tertiary">
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

       </>
    )
}

export default Header1
