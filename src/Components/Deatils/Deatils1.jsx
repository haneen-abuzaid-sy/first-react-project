import React from 'react'
import det from '../../assets/-6005666978204861586_121.jpg'

import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import { useState } from 'react';
import { pink } from '@mui/material/colors';
import Radio from '@mui/material/Radio';
import './Deatils1.css'
import { Link } from 'react-router-dom';

import car2 from "../../assets/68f9a3c07615a35e40f6ae98efce3a76-removebg-preview 1 (5).png"
import Header1 from '../Header/Header1'
import img6 from '../../assets/Audi.png'

import img9 from '../../assets/BMW.png'
import { SlArrowRight } from "react-icons/sl";
import img10 from '../../assets/Bugatti.png'


import { HiArrowCircleRight } from "react-icons/hi";
import { HiArrowCircleLeft } from "react-icons/hi";
import { Container } from 'react-bootstrap';









const Deatils1 = () => {
  
   







  const [count, setCount] = useState(1); 
  const increment = () => {
    setCount(prevCount => prevCount + 1);
  };

  const decrement = () => {
    setCount(prevCount => prevCount - 1);
  };



  const [selectedValue, setSelectedValue] = useState('a');

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const controlProps = (item) => ({
    checked: selectedValue === item,
    onChange: handleChange,
    value: item,
    name: 'color-radio-button-demo',
    inputProps: { 'aria-label': item },
  })






  const [currentSlide, setCurrentSlide] = useState(0);
  const numOfVisibleImages = 4;
  const totalImages = 10;

  const nextSlide = () => {
    setCurrentSlide((current) => (current + 1) % (totalImages - numOfVisibleImages + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((current) =>
      current === 0 ? totalImages - numOfVisibleImages : current - 1
    );
  };




  return (
    <>
      <Header1 />

    <div  style={{position:"relative",marginTop:"50px"}}>
      <div style={{position:"absolute",left:"30px",top:"500px"}}>
<Container style={{height:"60px",textAlign:"center"}}>
    <div className="slidr">
    <HiArrowCircleLeft style={{fontSize:"20px",color:"#976E72"}} onClick={prevSlide} />
      <div className="image-container">
        <div
          className="image"
          style={{
            transform: `translateX(-${currentSlide * (100 / numOfVisibleImages)}%)`,gap:"10px",
          }}
        >
          <img src={img6} alt="Image 1" className="slide-imag" />
          <img src={img9} alt="Image 4" className="slide-imag" />
          <img src={img10} alt="Image 4" className="slide-imag" />
        </div>
      </div>
     <HiArrowCircleRight  style={{fontSize:"20px",color:"#976E72"}} onClick={nextSlide}/>
    </div>
    </Container>
    </div>


      <div style={{position:"absolute",left:"60px",top:"120px"}}>
     

    <div style={{display:"flex",fontSize:"14px",gap:"3px"}}>
      <Link style={{textDecoration:"none",color:"#976E72"}}>Type</Link><SlArrowRight style={{fontSize:"6px",marginTop:"10px"}}/>
      <Link style={{textDecoration:"none",color:"#976E72"}}>car</Link><SlArrowRight style={{fontSize:"6px",marginTop:"10px"}}/>
      <Link style={{textDecoration:"none",color:"#976E72"}}>Detils</Link>
      </div>
   
        <h1 style={{fontSize:"20px",paddingTop:"10px",paddingBottom:"10px"}}>Honda-civic Type R</h1>
        <p style={{color:"#976E72"}}>6000 cc</p>
      </div>









<div>
<img className='car2' style={{position:"absolute" ,width:"400px",height:"200px",top:"300px",left:"230px"}}  src={car2} alt="" />

<img style={{height:"600px",position:"absolute",left:"600px",zIndex:"-1"}} src={det} alt="" />

<div className='text-img' style={{position:"absolute",left:"700px",top:"200px"}}>
      <p style={{fontSize:"22px"}}>Details</p>
      <p>Rating And Review</p>
      <div style={{display:"flex"}}>
      <Stack  spacing={1}>
      <Rating name="size-medium" defaultValue={4} />
    </Stack>
  <p>4.5</p>
    </div>
    <p style={{fontSize:"12px"}}>Lorem ipsum dolor sit amet consectetur .<br/> Adipisci, cumque!</p>
<p style={{fontSize:"12px"}}>Lorem, ipsum dolor sit amet consectetur <br/>fugiat?</p>
<h1 style={{fontSize:"20px"}}>Colors</h1>
<Radio {...controlProps('a')} />
      <Radio {...controlProps('b')} color="secondary" />
    
      <Radio
        {...controlProps('e')}
        sx={{
          color: pink[800],
          '&.Mui-checked': {
            color: pink[600],
          },
        }}
      />


  <div className="counter-container">
      <div className="circle circle-minus"  onClick={decrement}>-</div>
      <span className="count">{count}</span>
      <div className="circle circle-plus" onClick={increment}>+</div>
    </div>

    <div style={{display:"flex",marginTop:"10px",gap:"5px"}}>
        <Link className='border' style={{textDecoration:"none",borderRadius:"20px",padding:"3px 10px",color:"#976E72",fontSize:"12px"}}>Add To cart</Link>
        <Link className='border' style={{textDecoration:"none",fontSize:"12px" ,borderRadius:"20px",padding:"3px 10px",color:"white",backgroundColor:"#976E72",fontSize:"13px"}}>Buy Now</Link>
        </div>

    </div>




</div>







   </div>

    </>
  )
}

export default Deatils1