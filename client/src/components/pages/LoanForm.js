import React, { useState } from 'react';
import axios from 'axios';
import swal from 'sweetalert';

const LoanForm = () => {
  const [loan, setLoan] = useState({
    purpose: '',
    amount: '',
    assets: '',
    time: 0,
    scheme: '',
  });

  const { purpose, amount, assets, time, scheme } = loan;

  const onChange = (e) => setLoan({ ...loan, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    if (
      purpose === '' ||
      amount === '' ||
      assets === '' ||
      time === 0 ||
      scheme === ''
    ) {
      swal({
        text: 'Please enter all fields',
        icon: 'error',
      });
    } else {
      const formData = {
        purpose,
        amount,
        assets,
        time,
        scheme,
      };
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };
      try {
        const res = await axios.post('/api/loan', formData, config);
        swal({
          title: 'Success',
          text: res.data.msg,
          icon: 'success',
        });
      } catch (err) {
        swal({
          text: 'Already applied for the help.',
          icon: 'error',
        });
      }
    }
  };

  return (
    <div className='form-container'>
      <h1>
        Financial <span className='text-primary'>Help</span>{' '}
      </h1>
      <form onSubmit={onSubmit}>
        <div className='form-group'>
          <label htmlFor='purpose'>Purpose</label>
          <input
            type='text'
            name='purpose'
            value={purpose}
            onChange={onChange}
            required
          />
        </div>
        <div className='form-group'>
          <label htmlFor='amount'>Amount</label>
          <input
            type='text'
            name='amount'
            value={amount}
            onChange={onChange}
            required
          />
        </div>
        <div className='form-group'>
          <label htmlFor='assets'>Assets</label>
          <input
            type='text'
            name='assets'
            value={assets}
            onChange={onChange}
            required
          />
        </div>
        <div className='form-group'>
          <label htmlFor='time'>Time</label>
          <input
            type='text'
            name='time'
            value={time}
            onChange={onChange}
            required
          />
        </div>
        <div className='form-group'>
          <label htmlFor='scheme'>Scheme</label>
          <input
            type='text'
            name='scheme'
            value={scheme}
            onChange={onChange}
            required
          />
        </div>
        <input
          type='submit'
          value='Submit'
          className='btn btn-primary btn-block'
        />
      </form>
    </div>
  );
};

export default LoanForm;
