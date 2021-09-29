import '../../assets/css/navbar.css';
import LogoMain from '../../assets/logos/logo-main.png';
import { Link } from 'react-router-dom';
import BannerPhoto from '../../assets/images/banner-photo.png';

const Banner = () => {
    return ( 
        <div className='banner-main' id="home">
        <div className='banner-main-inner'>
          <div className='banner-left'>
            <img className='banner-photo' src={BannerPhoto}></img>
          </div>
          <div className='banner-right'>
            <div className='main-heading'>Adya</div>
            <div className='sub-heading'>
              WHERE PREPERATION MEETS OPPORTUNITY.
            </div>
            <div className=''>
              <button className='button-banner'>Read More!</button>
              <button className='button-banner'>Contact Us!</button>
            </div>
          </div>
        </div>
      </div>
     );
}
 
export default Banner;