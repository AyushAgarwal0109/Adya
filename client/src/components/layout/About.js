import '../../assets/css/about.css';
import LogoMain from '../../assets/logos/logo-main.png';
import logoabt1 from '../../assets/logos/finance.svg';
import logoabt2 from '../../assets/logos/connect.svg';
import logoabt3 from '../../assets/logos/market.svg';

const About = () => {
    return ( 
        <>
        <div className="hello-about" id="about"></div>
        <div className="about-main">
            <div className="about-inner row">

                <div className='abouter about-1 col-sm-4'>
                    <div className='about-photo'>
                        <img src={logoabt1} className='about-img'></img>
                    </div>
                    <div className='about-text'>
                        <h2>Financial Help</h2>
                        <p>
                        Let your customers order and pay via the powerful ecommerce system, or simple let them call your store.
                        </p>
                    </div>
                </div>

                <div className='abouter about-2 col-sm-4'>
                    <div className='about-photo'>
                        <img src={logoabt2} className='about-img'></img>
                    </div>
                    <div className='about-text'>
                        <h2>Connectivity</h2>
                        <p>
                        Let your customers order and pay via the powerful ecommerce system, or simple let them call your store.
                        </p>
                    </div>
                </div>

                <div className='abouter about-3 col-sm-4'>
                    <div className='about-photo'>
                        <img src={logoabt3} className='about-img'></img>    
                    </div>
                    <div className='about-text'>
                        <h2>E-Marketplace</h2>
                        <p>
                            Let your customers order and pay via the powerful ecommerce system, or simple let them call your store.
                        </p>
                    </div>
                </div>
                
            </div>
        </div>
        </>
     );
}
 
export default About;