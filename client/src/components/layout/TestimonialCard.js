import React from 'react'
import image1 from "../../assets/images/schemesImage2.jpg";

import "../../assets/css/testimonials.css";

function TestimonialCard(){
   return(
       <div className="testi-img" style={{display:'flex',flexDirection:'column'}}>
            <div><center><img src={image1} alt="img" className="women" /></center><hr /></div>
           <p className="paraa">Lorem ipsum dolor sit amet consectetur adipisc class ultricies mollis dictumst, aenean non a in donec nulla. Phasellus ante pellentesque erat cum risus consequat imperdiet aliquam, integer placerat et turpis mi eros nec lobortis taciti, vehicula nisl litora tellus ligula porttitor metus. </p>
       </div>
   )
}

export default TestimonialCard
