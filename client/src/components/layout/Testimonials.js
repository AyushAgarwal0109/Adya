import React from 'react'
import image from "../../assets/images/testi.png";
import "../../assets/css/testimonials.css";
import image1 from "../../assets/images/schemesImage2.jpg";
import "../../assets/css/testimonials.css";
import testimonial from '../../assets/images/testimoniall.png';

function Testimonials() {
  return (
    <div>
        <center>
        <div className="testimonial-section">
        <div className='hal row'>
          <div className='col-sm-10'>
            <div className='row'>
            <div className='col-sm-4'>
            <div className="testimonial-img">       
                <div className="testi-img" style={{display:'flex',flexDirection:'column'}}>
                  <div>
                      <center>
                          <div className='women-cont'>
                              <img src={image1} alt="img" className="women" />
                              <div>
                                  <img src={testimonial} alt="img" className="women-below" />
                              </div>
                          </div>
                      </center>
                  </div>
                  <p className="paraa">With the help of Team Adya I started a company  which turns waste material into decorative paper lamps with a motive to enable women from underprivileged backgrounds to become financially independent. Team Adya helped create employment opportunities for over 60 women in my village, and is enable them to become strong, skilled, and independent.</p>
                </div>
              </div>
            </div>
            <div className='col-sm-4'>
            <div className="testimonial-img">       
                <div className="testi-img" style={{display:'flex',flexDirection:'column'}}>
                  <div>
                      <center>
                          <div className='women-cont'>
                              <img src={image1} alt="img" className="women" />
                              <div>
                                  <img src={testimonial} alt="img" className="women-below" />
                              </div>
                          </div>
                      </center>
                  </div>
                  <p className="paraa">I belong to a small village,and have completed graduation. For years, I dreamed of becoming an entrepreneur and running my own company. Team Adya assisted me in developing a robust business strategy, which was essential in obtaining investment. I never get the feeling that I'm alone. If I need help, I always know that Team Adya is just a phone call or an email away!" </p>
                </div>
              </div>
            </div>
            <div className='col-sm-4'>
              <div className="testimonial-img">       
                <div className="testi-img" style={{display:'flex',flexDirection:'column'}}>
                  <div>
                      <center>
                          <div className='women-cont'>
                              <img src={image1} alt="img" className="women" />
                              <div>
                                  <img src={testimonial} alt="img" className="women-below" />
                              </div>
                          </div>
                      </center>
                  </div>
                  <p className="paraa"> I had a dream to launch a startup to promote Phulkari. I started my company with the help of my fellow SHG members, and now I have a large workforce and a large client base across India. I know I can count on Team Adya and the Counselors to link me to the tools and services I need at every level of my business's development.</p>
                </div>
              </div>
            </div>
            </div>
            </div>
          <div className='col-sm-2'>
                <div className='test-heading2'>
                    <h1> प्रशंसापत्र / </h1>
                </div>
                <div className='test-heading'>
                    <h1> TESTIMONIALS. </h1>
                </div>
          </div>
        </div>
        </div>
        </center>
    </div>
  )
}

export default Testimonials