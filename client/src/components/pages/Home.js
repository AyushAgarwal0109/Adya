import React, { useContext, useEffect } from 'react';
import AuthContext from '../../context/auth/authContext';
import LoanForm from './LoanForm';

const Home = () => {
  const authContext = useContext(AuthContext);

  useEffect(() => {
    authContext.loadUser();
    // eslint-disable-next-line
  }, []);

  return (
    <div className='grid-1'>
      <LoanForm />
    </div>
  );
};

export default Home;
