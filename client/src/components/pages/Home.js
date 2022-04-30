import React, { useContext, useEffect } from 'react';
import AuthContext from '../../context/auth/authContext';
import SideNav from '../layout/SideNav';
import LoanForm from './LoanForm';
import '../../assets/css/home.css';
import Girlava from '../../assets/logos/girlava.png';
import Carousel from '../pages/Carousel';
import NavbarInside from '../layout/NavbarInside';

const Home = () => {
  const authContext = useContext(AuthContext);
  const { user } = authContext;

  useEffect(() => {
    authContext.loadUser();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <div className='home-outer'>
        <NavbarInside />
        <div className='mainin container-fluid'>
          <div className='row'>
            <div className='mainin-in col-sm-4'>
              <center>
              <div className='home-box'>

              </div>
              </center>
            </div>
            <div className='mainin-in col-sm-4'>
            <center>
              <div className='home-box'>

              </div>
              </center>
            </div>
            <div className='mainin-in col-sm-4'>
              <center>
              <div className='home-box'>

              </div>
              </center>
            </div>
          </div>
          <div className='row'>
            <div className='mainin-in col-sm-4'>
              <center>
              <div className='home-box'>
            
              </div>
              </center>
            </div>
            <div className='mainin-in col-sm-4'>
            <center>
              <div className='home-box'>

              </div>
              </center>
            </div>
            <div className='mainin-in col-sm-4'>
              <center>
              <div className='home-box'>

              </div>
              </center>
            </div>
          </div>
          <br />
          <div className='main-carousel'>
            <h1>
              <i>Some of our Happy Customers!</i>
            </h1>
            <center>
              <Carousel />
            </center>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
