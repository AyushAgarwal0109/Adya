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
      <div className='grid-12 home-outer'>
        <NavbarInside />
        <div className='mainin'>
          <div className='mainin-1'>
            <h1>Welcome </h1>
          </div>
          <div className='mainin-2'>
            <img className='avatar-girl' src={Girlava}></img>
          </div>
          <div className='mainin-3'>
            <h1> ~ {user && user.name} ~ </h1>
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
