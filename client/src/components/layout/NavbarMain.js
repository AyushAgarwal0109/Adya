import '../../assets/css/navbar.css';
import LogoMain from '../../assets/logos/logo-main.png'
import BannerPhoto from '../../assets/images/banner-photo.png'

const NavbarMain = () => {
    return ( 
    <>
    <nav className="nav">
        <div className="nav-header">
		  <div className="nav-title">
		  	<span className="">
                  <img src={LogoMain} className="brand-name-logo"></img>
              </span>
		  </div>
		</div>
		<div className="nav-btn">
		  <label for="nav-check">
			<span></span>
			<span></span>
			<span></span>
		  </label>
		</div>
        <input type="checkbox" id="nav-check"></input>
        <div className="nav-links">
		  <a href='' className="jhk">HOME</a>
		  <a href=''>ABOUT</a>
          <a href=''>SCHEMES</a>
		  <a href=''>CONTACT</a>
          <a href='' className="loginbtn">LOGIN</a>
		  <a href='' className="signupbtn">SIGNUP</a>
		</div>
    </nav>

    <div className="banner-main">
        <div className="banner-main-inner">
            <div className="banner-left">
                <img className="banner-photo" src={BannerPhoto}></img>
            </div>
            <div className="banner-right">
                <div className="main-heading">
                    Adya
                </div>
                <div className="sub-heading">
                    WHERE PREPERATION MEETS OPPORTUNITY.
                </div>
                <div className="">
                    <button className="button-banner">
                        Read More!
                    </button>
                    <button className="button-banner">
                        Contact Us!
                    </button>
                </div>
            </div>
        </div>
    </div>
    </>
     );
}
 
export default NavbarMain;