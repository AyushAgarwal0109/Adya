import React from 'react'
import image from "../../assets/images/testi.png";
import "../../assets/css/testimonials.css";
import TestimonialCard from './TestimonialCard';

function Testimonials() {
  return (
    <div>
        <center><div className="testimonial-section">

        <div className="testimonial-img"><TestimonialCard /></div>
        <div className="testimonial-img"><TestimonialCard /></div>
        <div className="testimonial-img"><TestimonialCard /></div>
        <div className="testimonial-img"><TestimonialCard /></div>

        </div>
        </center>
    </div>
  )
}

export default Testimonials