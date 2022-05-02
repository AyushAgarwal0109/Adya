import React, { useContext, useEffect } from 'react';
import AuthContext from '../../context/auth/authContext';
import SideNav from '../layout/SideNav';
import LoanForm from './LoanForm';
import '../../assets/css/home.css';
import Girlava from '../../assets/logos/girlava.png';
import Carousel from '../pages/Carousel';
import NavbarInside from '../layout/NavbarInside2';
import profilephoto from '../../assets/images/profile-photo.jpg';
import shgphoto from '../../assets/images/shg-img.jpg';
import loanphoto from '../../assets/images/loan-img.jpg';
import customerimg from '../../assets/images/customer-support.jpg';
import sellproduct from '../../assets/images/sellproduct2.jpg';
import connectimg from '../../assets/images/sellproduct.jpg';
import { Link } from 'react-router-dom';

const Home = () => {
  const authContext = useContext(AuthContext);
  const { user } = authContext;

  useEffect(() => {
    authContext.loadUser();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <div className='home-outer home-overflow'>
        <div>
          <NavbarInside />
        </div>

        <div className='main'>
          <div className='main-in'>
            <div className='home-box-outer row'>
              
              <div className='home-box col-sm-4'>
              <Link to='/financehelp'>
                <center>
                  <div className='home-box-heading'>
                      <i class="fa-solid fa-coins"></i> Apply for Loan
                  </div>
                  <div className='row'>
                    <div className='box-inner-left col-sm-4'>
                      <img src={loanphoto} className='box-inner-img'></img>
                    </div>
                    <div className='box-inner-right bxr1 col-sm-8'>
                    We provide you with a platform through which our experts will assist you in obtaining loans through various government programmes.
                    </div>  
                  </div>
                </center>
                </Link>
              </div>
              
              <div className='home-box col-sm-4'>
                <center>
                <Link to='/categories'>
                  <div className='home-box-heading'>
                  <i class="fa-solid fa-handshake"></i> Connect with Peers
                  </div>
                  <div className='row'>
                    <div className='box-inner-left col-sm-4'>
                      <img src={connectimg} className='box-inner-img'></img>
                    </div>
                    <div className='box-inner-right bxr2 col-sm-8'>
                    We build a strong network of female entrepreneurs to foster a supportive, learning, and collaborative environment.
                    </div>  
                  </div>
                  </Link>
                </center>
              </div>
              <div className='home-box col-sm-4'>
                <center>
                <Link to='/shgroups'>
                  <div className='home-box-heading'>
                  <i class="fa-solid fa-user-group"></i> Self Help Groups
                  </div>
                  <div className='row'>
                    <div className='box-inner-left col-sm-4'>
                      <img src={shgphoto} className='box-inner-img'></img>
                    </div>
                    <div className='box-inner-right bxr3 col-sm-8'>
                    Here, Rural women may manage and view the members of their SHGs. She can also accept or reject other women's requests to join the SHG.
                    </div>  
                  </div>
                  </Link>
                </center>
              </div>
            </div>

            <div className='home-box-outer row'>
              <div className='home-box col-sm-4'>
              <center>
                <Link to='/'>
                <div className='home-box-heading'>
                <i class="fa-solid fa-shop"></i> Sell your Products
                </div>
                <div className='row'>
                    <div className='box-inner-left col-sm-4'>
                      <img src={sellproduct} className='box-inner-img'></img>
                    </div>
                    <div className='box-inner-right bxr4 col-sm-8'>
                    We provide marketing assistance to startups in order to assist them in expanding their market for their products.
                    </div>  
                  </div>
                  </Link>
              </center>
              </div>
              <div className='home-box col-sm-4'>
                <center>
                <Link to='/'>
                <div className='home-box-heading'>
                <i class="fa-solid fa-headset"></i> Customer Support
                </div>
                <div className='row'>
                    <div className='box-inner-left col-sm-4'>
                      <img src={customerimg} className='box-inner-img'></img>
                    </div>
                    <div className='box-inner-right bxr5 col-sm-8'>
                    We address customer issues and resolve them in a timely and efficient manner and provide our customers with 24X7 accessibility.
                    </div>  
                  </div>
                  </Link>
                </center>
              </div>
              <div className='home-box col-sm-4'>
                <center>
                  <Link to='/settings'>
                  <div className='home-box-heading'>
                  <i class="fa-solid fa-address-card"></i> Manage Profile
                  </div>
                  <div className='row'>
                    <div className='box-inner-left col-sm-4'>
                      <img src={profilephoto} className='box-inner-img'></img>
                    </div>
                    <div className='box-inner-right bxr6 col-sm-8'>
                    The Manage Profile page allows users to change their name, address & skills. Users  can also change their login credentials, i.e, phone number and pin.
                    </div>  
                  </div>
                  </Link>
                </center>
              </div>
            </div>
          </div>
        </div>

          {/* <div className='main-carousel'>
            <h1>
              <i>Some of our Happy Customers!</i>
            </h1>
            <center>
              <Carousel />
            </center>
          </div> */}
      </div>
    </>
  );
};

export default Home;
