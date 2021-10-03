import React, { useState } from 'react';
import SideNav from '../layout/SideNav';
import axios from 'axios';
import swal from 'sweetalert';
import '../../assets/css/home.css';

const Shgroups = () => {
  const [group, setGroup] = useState({
    name: '',
    representative: '',
    members: 0,
    phone: '',
    business: '',
    assistance: '',
  });

  const { name, representative, members, phone, business, assistance } = group;

  const onChange = (e) =>
    setGroup({ ...group, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    if (
      name === '' ||
      representative === '' ||
      members === 0 ||
      phone === '' ||
      business === '' ||
      assistance === ''
    ) {
      swal({
        text: 'Please enter all fields',
        icon: 'error',
      });
    } else {
      const formData = {
        name,
        representative,
        members,
        phone,
        business,
        assistance,
      };
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };
      try {
        const res = await axios.post('/api/group', formData, config);
        swal({
          title: 'Success',
          text: res.data.msg,
          icon: 'success',
        });
        const link = document.createElement('a');
        link.href = 'http://localhost:3000/groupInfo';
        link.click();
      } catch (err) {
        swal({
          text: 'Group already registered.',
          icon: 'error',
        });
      }
    }
  };

  return (
    <div className='grid-2 home-outer'>
      <div>
        <SideNav />
      </div>
      <div className='wrapper'>
        <form onSubmit={onSubmit}>
          <h1>SELF HELP GROUP!</h1>
          <div className='form-group'>
            <label htmlFor='name'>
              Enter the name of your Self Help Group :{' '}
            </label>
            <input
              name='name'
              onChange={onChange}
              type='text'
              autoComplete='off'
              required
            />
          </div>

          <div className='form-group'>
            <label htmlFor='representative'>
              Name of representative of SHG :{' '}
            </label>
            <input
              name='representative'
              onChange={onChange}
              type='text'
              autoComplete='off'
              required
            />
          </div>

          <div className='form-group'>
            <label htmlFor='members'>Number of members in the SHG : </label>
            <input
              name='members'
              onChange={onChange}
              type='text'
              autoComplete='off'
              name='members'
              required
            />
          </div>

          <div className='form-group'>
            <label htmlFor='phone'>
              Enter Phone number to contact your group :{' '}
            </label>
            <input
              type='text'
              name='phone'
              onChange={onChange}
              autoComplete='off'
              minLength='10'
              maxLength='10'
              required
            />
          </div>

          <div className='form-group'>
            <label htmlFor='business'>
              What kind of business is run by your Self Help Group?{' '}
            </label>
            <input
              name='business'
              onChange={onChange}
              type='text'
              autoComplete='off'
              required
            />
          </div>

          <div className='form-group'>
            <label htmlFor='assistance'>
              Why do you require our assistance?{' '}
            </label>
            <input
              name='assistance'
              onChange={onChange}
              type='text'
              autoComplete='off'
              required
            />
          </div>

          <input type='submit' value='Submit' className='btn-sbmt' />
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
    </div>
  );
};

export default Shgroups;
