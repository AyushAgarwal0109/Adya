import '../../assets/css/navbar.css';
import AuthContext from '../../context/auth/authContext';
import LogoMain from '../../assets/logos/logo-main.png';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import '../../assets/css/modal.css';
import Login from '../auth/Login';
import Register from '../auth/Register';

const NavbarInside = () => {
    const authContext = useContext(AuthContext);

    const { logout } = authContext;
  
    const onLogout = () => {
      logout();
    };
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
            <Link to='/home'>HOME</Link>
            <Link to='/financehelp'>FINANCIAL HELP</Link>
            <Link to='/categories'>CONNECT WITH PEERS</Link>
            <Link to='/shgroups'>SELF HELP GROUPS</Link>
            <Link to='/settings'>PROFILE</Link>
            <Link onClick={onLogout} to='/' className='loginbtn'>LOGOUT</Link>
        </div>
      </nav>
    </>
  );
};

export default NavbarInside;
