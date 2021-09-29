import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../../context/auth/authContext';
import '../../assets/css/sidenav.css';

const SideNav = () => {
  const authContext = useContext(AuthContext);

  const { logout } = authContext;

  const onLogout = () => {
    logout();
  };
  return (
    <div class='sidebar'>
      <div class='dashboard'>
        <div class='dash-item'>
          <Link to='/home'>Financial Help</Link>
        </div>
        <div class='dash-item'>
          <Link to='/categories'>Connect with Peers</Link>
        </div>
        <div class='dash-item'>
          <Link to='/shgroups'>Self Help Groups</Link>
        </div>
        <div class='dash-item'>
          <Link to='/settings'>Settings</Link>
        </div>
        <div class='dash-item'>
          <Link onClick={onLogout} to='/'>
            Logout
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SideNav;
