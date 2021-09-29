import { connect } from 'mongoose';
import React, { useContext } from 'react';
import AuthContext from '../../context/auth/authContext';

const CategoryCard = ({ connectingUsers }) => {
  const authContext = useContext(AuthContext);
  const { user } = authContext;

  return (
    <div>
      {connectingUsers.map((connect) => {
        if (connect.skill === user.skill)
          return (
            <div className='card bg-light '>
              <h3 className='text-primary text-left'>{connect.name}</h3>
              <ul className='list'>
                <li>{connect.phone}</li>
                <li>{connect.state}</li>
                <li>{connect.district}</li>
                <li>{connect.group}</li>
                <li>{connect.skill}</li>
              </ul>
            </div>
          );
      })}
    </div>
  );
};

export default CategoryCard;
