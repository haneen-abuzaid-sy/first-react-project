import React from 'react'
import Form from 'react-bootstrap/Form';
import './Search1.css'
import logo1 from '../../assets/icon car (2).png'
import { GoTriangleDown } from "react-icons/go";
import logo2 from '../../assets/Vector (1).png'
import logo3 from '../../assets/Vector (2).png'
import logo4 from '../../assets/Vector (3).png'
import { Container } from 'react-bootstrap';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useState } from 'react';
import { Box } from '@mui/material';
import UnfoldMoreRoundedIcon from '@mui/icons-material/UnfoldMoreRounded';
const Search1 = () => {

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };




  return (
    <Container style={{boxShadow:"1px 1px 1px 1px",borderRadius:"20px",width:"60vw"}}>

<div style={{display:"flex",gap:"8px" ,borderRadius:"20px",flexWrap:"wrap",padding:"15px"}}>
<div >
      <p>Name</p>
      <div style={{display:"flex"}} >
        <img src={logo1} style={{width:"10px",height:"10px",marginTop:"7px"}} alt="" />
      <Button
      style={{padding:"0",color:"rgb(211, 206, 206)",fontSize:"12px",textTransform:"lowercase"}}
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
       
      >
       choose name
      </Button>
      <Menu
      
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
       
        }}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
      <Box flexGrow={1}/>
      <GoTriangleDown  onClick={handleClick} style={{marginTop:"4px",margin:"5px",color:"rgb(211, 206, 206)"}}/>


    </div>
  
    
    </div>



    <div>
      <p>Price</p>
      <div style={{display:"flex"}} >
        <img src={logo2} style={{width:"10px",height:"10px",marginTop:"7px"}} alt="" />
      <Button
      style={{padding:"0",color:"rgb(211, 206, 206)",fontSize:"12px",textTransform:"lowercase",marginBottom:"2px"}}
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
       
      >
       choose Price
      </Button>
      <Menu
      
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
       
        }}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
      <Box flexGrow={1}/>
      <UnfoldMoreRoundedIcon onClick={handleClick} style={{color:"rgb(211, 206, 206)"}}/>

    </div>
    </div>






    <div>
      <p>capicity</p>
      <div style={{display:"flex"}} >
        <img src={logo3} style={{width:"10px",height:"10px",marginTop:"7px"}} alt="" />
      <Button
      style={{padding:"0",color:"rgb(211, 206, 206)",fontSize:"12px",textTransform:"lowercase"}}
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
       
      >
       choose capicity
      </Button>
      <Menu
      
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
       
        }}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
      <Box flexGrow={1}/>

      <GoTriangleDown  onClick={handleClick} style={{marginTop:"4px",color:"rgb(211, 206, 206)"}}/>
    </div>
    </div>








    <div>
      <p style={{paddingLeft:"3px"}}>Brand</p>
      <div style={{display:"flex"}} >
        <img src={logo4} style={{width:"10px",height:"10px",marginTop:"7px"}} alt="" />
      <Button
      style={{padding:"0",color:"rgb(211, 206, 206)",fontSize:"12px",textTransform:"lowercase"}}
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
       
      >
       choose Brand
      </Button>
      <Menu
      
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
       
        }}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
      <Box flexGrow={1}/>
      <GoTriangleDown  onClick={handleClick} style={{marginTop:"4px",margin:"5px",color:"rgb(211, 206, 206)"}}/>
    </div>
    </div>


    <Form style={{width:"120px" ,height:"30px",marginTop:"41px",borderRadius:"1px 1px"}} className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
           
          </Form>
</div>
     
    </Container>
  )
}

export default Search1