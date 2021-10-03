import axios from 'axios';
import React, { useEffect } from 'react';
import SideNav from '../layout/SideNav';

const GroupInfo = () => {
  const getGroup = async () => {
    try {
      const res = await axios.get('/api/group');
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getGroup();
  }, []);

  return (
    <>
      <div className='grid-2 home-outer'>
        <div>
          <SideNav />
        </div>
        <div className='mainin'>
          <div className='mainin-1'>
            <br />
            <br />
            <h1>Welcome </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default GroupInfo;
