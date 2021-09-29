import React, { useState, useContext, useEffect } from 'react';
import AuthContext from '../../context/auth/authContext';
import swal from 'sweetalert';

const Login = (props) => {
  const authContext = useContext(AuthContext);

  const { login, error, clearErrors, isAuthenticated } = authContext;

  useEffect(() => {
    if (isAuthenticated) {
      props.history.push('/');
    }

    if (error === 'Invalid Credentials') {
      swal({
        text: error,
        icon: 'error',
      });
      clearErrors();
    }

    //eslint-disable-next-line
  }, [error, isAuthenticated, props.history]);

  const [user, setUser] = useState({
    phone: '',
    password: '',
  });

  const { phone, password } = user;

  const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    if (phone === '' || password === '') {
      swal({
        text: 'Please fill in all fields',
        icon: 'error',
      });
    } else {
      login({
        phone,
        password,
      });
    }
  };

  return (
    <div className='form-container'>
      <h1>
        Account <span className='text-primary'>Login</span>{' '}
      </h1>
      <form onSubmit={onSubmit}>
        <div className='form-group'>
          <label htmlFor='phone'>Phone Number</label>
          <input
            type='text'
            name='phone'
            value={phone}
            onChange={onChange}
            required
          />
        </div>
        <div className='form-group'>
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            name='password'
            value={password}
            onChange={onChange}
            required
          />
        </div>
        <input
          type='submit'
          value='Login'
          className='btn btn-primary btn-block'
        />
      </form>
    </div>
  );
};

export default Login;
