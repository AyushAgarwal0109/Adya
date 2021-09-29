import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import AuthContext from '../../context/auth/authContext';
import Spinner from '../layout/Spinner';
import CategoryCard from './CategoryCard';

const Categories = () => {
  const authContext = useContext(AuthContext);
  const [connect, setConnect] = useState([]);

  const displayUsers = async () => {
    try {
      const res = await axios.get('/api/skill');
      setConnect(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    authContext.loadUser();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    displayUsers();
  }, []);

  console.log(connect);

  return (
    <div className='grid-1'>
      {connect.length !== 0 ? (
        <CategoryCard connectingUsers={connect} />
      ) : (
        <Spinner />
      )}
    </div>
  );
};

export default Categories;
