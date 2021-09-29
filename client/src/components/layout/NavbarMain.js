import '../../assets/css/navbar.css';
import LogoMain from '../../assets/logos/logo-main.png';
import { Link } from 'react-router-dom';
import BannerPhoto from '../../assets/images/banner-photo.png';

const NavbarMain = () => {
  return (
    <>
      <nav className='nav'>
        <div className='nav-header'>
          <div className='nav-title'>
            <span className=''>
              <img src={LogoMain} className='brand-name-logo'></img>
            </span>
          </div>
        </div>
        <div className='nav-btn'>
          <label for='nav-check'>
            <span></span>
            <span></span>
            <span></span>
          </label>
        </div>
        <input type='checkbox' id='nav-check'></input>
        <div className='nav-links'>
          <Link to='/' className='jhk'>
            HOME
          </Link>
          <Link to='/'>ABOUT</Link>
          <Link to='/'>SCHEMES</Link>
          <Link to='/'>CONTACT</Link>
          <Link to='/login' className='loginbtn'>
            LOGIN
          </Link>
          <Link to='/register' className='signupbtn'>
            SIGNUP
          </Link>
        </div>
      </nav>

      <div className='banner-main'>
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
    </>
  );
};

export default NavbarMain;
