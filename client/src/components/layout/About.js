import React, { useEffect } from "react";
import '../../assets/css/about.css';
import LogoMain from '../../assets/logos/logo-main.png';
import logoabt1 from '../../assets/logos/finance.svg';
import logoabt2 from '../../assets/logos/connect.svg';
import logoabt3 from '../../assets/logos/market.svg';
import AOS from "aos";

const About = () => {

    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);

      useEffect(() => {
        AOS.init({
          duration : 500
        });
      }, []);

    return ( 
        <>
        <div className="hello-about" id="about"></div>
        <div className="about-main">
            <div className="about-inner row">

                <div className='abouter about-1 col-sm-4' data-aos="zoom-in-right">
                    <div className='about-photo'>
                        <img src={logoabt1} className='about-img'></img>
                    </div>
                    <div className='about-text'>
                        <h2>Financial Support</h2>
                        <p>
                        Adya has recognized funding as a major issue for women entrepreneurs who want to start or grow their businesses. Adya offers guidance on various funding options, including equity, loans, applicable programmes and grants etc.
                        </p>
                    </div>
                </div>

                <div className='abouter about-2 col-sm-4' data-aos="zoom-in-down">
                    <div className='about-photo'>
                        <img src={logoabt2} className='about-img'></img>
                    </div>
                    <div className='about-text'>
                        <h2>Connectivity</h2>
                        <p className='p1'>
                        Adya's ultimate objective is to create a strong network of rural women entrepreneurs to create an ecosystem of support, learning, and collaboration based on the phrase "many hands make light work".
                        </p>
                    </div>
                </div>

                <div className='abouter about-3 col-sm-4' data-aos="zoom-in-left">
                    <div className='about-photo'>
                        <img src={logoabt3} className='about-img'></img>    
                    </div>
                    <div className='about-text'>
                        <h2>E-Marketplace</h2>
                        <p>
                        Adya offers marketing support to startups to help them improve their market for their products. The objective of this initiative is to create a platform which helps to iteratively increase your market presence.
                        </p>
                    </div>
                </div>
                
            </div>
        </div>
        </>
     );
}
 
export default About;