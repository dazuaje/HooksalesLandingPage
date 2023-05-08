import React from "react";
import Carousel from "../Carousel/Carousel";
import "./Testimonials.css";
import shapeTestimonial from '../../assets/shapeTestimonial.png';
//import Logo from "../../assets/MASCOT.png";

const Testimonials = () => {
  return (
    <div className="testimonials__container">

      <img className="shapeTestimonial" src={shapeTestimonial} alt="" />
      <Carousel />
    </div>
  );
};

export default Testimonials;
