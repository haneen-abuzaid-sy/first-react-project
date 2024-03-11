import React from 'react'
import  { useState } from 'react';
import './Slider.css'; 

import img6 from '../../assets/Audi.png'
import img7 from '../../assets/ferrari.png'
import img8 from '../../assets/honda (2).png'
import img9 from '../../assets/BMW.png'
import img10 from '../../assets/picture (3).png'
import img11 from '../../assets/picture (3).png'
import img12 from '../../assets/picture (4).png'
import { HiArrowCircleRight } from "react-icons/hi";
import { HiArrowCircleLeft } from "react-icons/hi";
import { Container } from 'react-bootstrap';
const Slaeder = () => {
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
    
      <Container style={{width:"70vw",height:"200px",marginRight:"35px",marginTop:"500px",textAlign:"center"}}>
        <h1 style={{fontSize:"20px",paddingBottom:"40px",paddingRight:"140px"}}>Find by Car Type</h1>
    <div className="slider">
    <HiArrowCircleLeft style={{fontSize:"20px",color:"#976E72"}} onClick={prevSlide} />

      <div className="images-container">

        <div
          className="images"
          style={{
            transform: `translateX(-${currentSlide * (100 / numOfVisibleImages)}%)`,gap:"10px",
          }}
        >

          <img src={img6} alt="Image 1" className="slide-image" />
          <img src={img7} alt="Image 2" className="slide-image" />
          <img src={img8} alt="Image 3" className="slide-image" />
          <img src={img9} alt="Image 4" className="slide-image" />
          <img src={img10} alt="Image 4" className="slide-image" />
          <img src={img11} alt="Image 4" className="slide-image" />
          <img src={img12} alt="Image 4" className="slide-image" />
         
        </div>

      </div>
   <div className='dev'></div>

     <HiArrowCircleRight  style={{fontSize:"20px",color:"#976E72"}} onClick={nextSlide}/>
    </div>
    </Container>

  )
}

export default Slaeder
