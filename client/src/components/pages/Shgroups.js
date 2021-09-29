import React from 'react';
import SideNav from '../layout/SideNav';
import '../../assets/css/home.css';


const Shgroups = () => {
  return (
    <div className='grid-2 home-outer'>
      <div>
        <SideNav />
      </div>
      <div className="wrapper">
        <form>
        <h1>
          SELF HELP GROUP!
        </h1>
        <div className='form-group'>
          <label htmlFor='name'>Enter the name of your Self Help Group : </label>
          <input type='text' autoComplete="off" required/>
        </div>

        <div className='form-group'>
          <label htmlFor='representative'>Name of representative of SHG : </label>
          <input type='text' autoComplete="off" required/>
        </div>

        <div className='form-group'>
          <label htmlFor='members'>Number of members in the SHG : </label>
          <input type='text' autoComplete="off" name='members' required/>
        </div>

        <div className='form-group'>
          <label htmlFor='phone'>Enter Phone number to contact your group : </label>
          <input type='text' autoComplete="off" minLength='10' maxLength='10' required />
        </div>

        <div className='form-group'>
          <label htmlFor='business'>What kind of business is run by your Self Help Group? </label>
          <input type='text' autoComplete="off" required/>
        </div>

        <div className='form-group'>
          <label htmlFor='assistance'>What do you require our assistance? </label>
          <input type='text' autoComplete="off" required/>
        </div>
        
        <input
          type='submit'
          value='Submit'
          className='btn-sbmt'
        />
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

export default Shgroups;
