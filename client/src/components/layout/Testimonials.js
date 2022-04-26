import React from 'react'
import image from "../../assets/images/testi.png";
import "../../assets/css/testimonials.css";
function Testimonials() {
  return (
    <div>
        <center><div className="testimonial-section">

        <img src={image} alt="img" className="testimonial-img" />
        <img src={image} alt="img" className="testimonial-img" />
        <img src={image} alt="img" className="testimonial-img" />
        <img src={image} alt="img" className="testimonial-img" />

        </div>
        </center>
    </div>
  )
}

export default Testimonials