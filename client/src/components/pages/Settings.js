import React, { useState } from 'react';
import { useContext, useEffect } from 'react';
import { connect } from 'mongoose';
import AuthContext from '../../context/auth/authContext';
import SideNav from '../layout/SideNav';
import '../../assets/css/home.css';
import Updatelogo from '../../assets/logos/update-logo.png';
import NavbarInside from '../layout/NavbarInside';
import swal from 'sweetalert';
import axios from 'axios';

const Settings = () => {
  const authContext = useContext(AuthContext);
  const { user } = authContext;
  const [userName, setUserName] = useState();
  const [phoneNo, setPhoneNo] = useState();
  const [group, setGroup] = useState();
  const [skill, setSkill] = useState();
  const [pin, setPin] = useState();
  const [canEdit, setCanEdit] = useState(false);

  useEffect(() => {
    authContext.loadUser();
    // eslint-disable-next-line
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = { userName, phoneNo, skill, group, pin };
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    try {
      const res = await axios.put(`/api/users/${user._id}`, formData, config);
      swal({
        text: 'User data successfully updated!',
        icon: 'success',
      });
      authContext.loadUser();
      setUserName('');
      setPhoneNo('');
      setSkill('');
      setPin('');
      setGroup('');
    } catch (err) {
      console.log(err);
    }
  };

  const handleEdit = (e) => {
    e.preventDefault();

    setCanEdit(!canEdit);
  };

  return (
    <div className='home-outer'>
      <div>
        <NavbarInside />
      </div>
      <div className='wrapper wrapper22'>
        <h1 className='heading-settings'>Settings</h1>
        {user && (
          <div className='settings-box'>
            <form>
              <div className='row'>
                <div className='form-group col-sm-6'>
                  <label htmlFor='name'>Name : </label>
                  <span>
                    <img className='updater' src={Updatelogo}></img>
                  </span>
                  <input
                    type='text'
                    name='namee'
                    placeholder={user.name}
                    value={userName}
                    disabled={!canEdit}
                    onChange={(e) => setUserName(e.target.value)}
                  />
                </div>
                <div className='form-group col-sm-6'>
                  <label htmlFor='phonenumber'>Phone Number : </label>
                  <span>
                    <img className='updater' src={Updatelogo}></img>
                  </span>
                  <input
                    type='text'
                    name='phone'
                    placeholder={user.phone}
                    value={phoneNo}
                    disabled={!canEdit}
                    onChange={(e) => setPhoneNo(e.target.value)}
                  />
                </div>
              </div>
              <div className='row'>
                <div className='form-group col-sm-6'>
                  <label htmlFor='skill'>Skill : </label>
                  <span>
                    <img className='updater' src={Updatelogo}></img>
                  </span>
                  <input
                    type='text'
                    name='skill'
                    placeholder={user.skill}
                    value={skill}
                    disabled={!canEdit}
                    onChange={(e) => setSkill(e.target.value)}
                  />
                </div>
                <div className='form-group col-sm-6'>
                  <label htmlFor='group'>
                    Individual/Associated with a SHG :{' '}
                  </label>
                  <span>
                    <img className='updater' src={Updatelogo}></img>
                  </span>
                  <input
                    type='text'
                    name='group'
                    placeholder={user.group}
                    value={group}
                    disabled={!canEdit}
                    onChange={(e) => setGroup(e.target.value)}
                  />
                </div>
              </div>
              <div className='row'>
                <div className='form-group col-sm-6'>
                  <label htmlFor='pin'>PIN : </label>
                  <span>
                    <img className='updater' src={Updatelogo}></img>
                  </span>
                  <input
                    type='password'
                    name='password'
                    placeholder='****'
                    value={pin}
                    disabled={!canEdit}
                    onChange={(e) => setPin(e.target.value)}
                  />
                </div>
              </div>
              <br></br>
              <div className='row'>
              <button className='btn-sbmt col-sm-6' onClick={(e) => handleEdit(e)}>
                Edit
              </button>
              <input
                type='submit'
                value='Update'
                className='btn-sbmt col-sm-6'
                onClick={onSubmit}
              />
              </div>
              <ul class='bg-bubbles'>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default Settings;
