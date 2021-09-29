import React, { useState, useContext, useEffect } from 'react';
import AuthContext from '../../context/auth/authContext';
import swal from 'sweetalert';
import { Link } from 'react-router-dom';
import '../../assets/css/form.css';

const Register = (props) => {
  const authContext = useContext(AuthContext);

  const { register, error, clearErrors, isAuthenticated } = authContext;

  useEffect(() => {
    if (isAuthenticated) {
      // props.history.push('/');
      const link = document.createElement('a');
      link.href = 'http://localhost:3000/home';
      link.click();
    }

    if (error === 'User already exists') {
      swal({
        text: error,
        icon: 'error',
      });
      clearErrors();
    }

    //eslint-disable-next-line
  }, [error, isAuthenticated, props.history]);

  const [user, setUser] = useState({
    name: '',
    phone: '',
    skill: '',
    state: '',
    district: '',
    group: '',
    password: '',
    password2: '',
  });

  const { name, phone, skill, state, district, group, password, password2 } =
    user;

  const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    if (
      name === '' ||
      phone === '' ||
      skill === '' ||
      state === '' ||
      district === '' ||
      group === '' ||
      password === '' ||
      password2 === ''
    ) {
      swal({
        text: 'Please enter all fields',
        icon: 'error',
      });
    } else if (password !== password2) {
      swal({
        text: 'Passwords do not match',
        icon: 'error',
      });
    } else {
      register({
        name,
        phone,
        skill,
        state,
        district,
        group,
        password,
      });
    }
  };

  return (
    <div className="wrapper-out">
    <div className='wrapper wrapper1'>
      <h1>
        SIGN UP.
      </h1>
      <form onSubmit={onSubmit}>
          <div className="row">
            <div className='form-group col-md-4'>
              <label htmlFor='name'>Name</label>
              <input
                type='text'
                name='name'
                value={name}
                onChange={onChange}
                required
              />
            </div>
            <div className='form-group col-md-4'>
              <label htmlFor='phone'>Phone Number</label>
              <input
                type='text'
                name='phone'
                value={phone}
                onChange={onChange}
                required
                minLength='10'
                maxLength='10'
              />
            </div>
            <div className='form-group col-md-4'>
              <label htmlFor='skill'>Skill</label>
              <input
                type='text'
                name='skill'
                value={skill}
                onChange={onChange}
                required
              />
            </div>
          </div>

          <div className="row">
            <div className='form-group col-md-4'>
              <label htmlFor='state'>State</label>
              <input
                type='text'
                name='state'
                value={state}
                onChange={onChange}
                required
              />
            </div>
            <div className='form-group col-md-4'>
              <label htmlFor='district'>District</label>
              <input
                type='text'
                name='district'
                value={district}
                onChange={onChange}
                required
              />
            </div>
            <div className='form-group col-md-4'>
              <label htmlFor='group'>Individual/Associated with SHG</label>
              <input
                type='text'
                name='group'
                value={group}
                onChange={onChange}
                required
              />
            </div>
          </div>

          <div className="row">
            <div className='form-group col-md-6'>
              <label htmlFor='password'>Password</label>
              <input
                type='password'
                name='password'
                value={password}
                onChange={onChange}
                required
                minLength='4'
              />
            </div>
            <div className='form-group col-md-6'>
              <label htmlFor='password2'>Confirm Password</label>
              <input
                type='password'
                name='password2'
                value={password2}
                onChange={onChange}
                required
                minLength='4'
              />
            </div>
          </div>
        <input type='submit' value='Register' className='btn-sbmt'/>
        {/* <Link to='/home' className='btn btn-primary btn-block'>
          Register
        </Link> */}

        <ul class="bg-bubbles">
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

export default Register;
