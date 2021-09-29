import React, { useContext, useEffect } from 'react';
import AuthContext from '../../context/auth/authContext';
import SideNav from '../layout/SideNav';
import LoanForm from './LoanForm';

const Home = () => {
  const authContext = useContext(AuthContext);
  const { user } = authContext;

  useEffect(() => {
    authContext.loadUser();
    // eslint-disable-next-line
  }, []);

  return (
    <div className='grid-2'>
      <div>
        <SideNav />
      </div>
      <div>
        <h1>{user && user.name}</h1>
        <LoanForm />
      </div>
    </div>
  );
};

export default Home;
