// RegistrationPage.js
import React from 'react';
//import backgroundImage from './background.jpg'; // Import your background image
import './RegistrationPage.css'; // Import CSS file

const RegistrationPage = () => {
  return (
    <div className="registration-page">
      <div className="registration-box">
        <h2>Registration</h2>
        <form className='form-box'>
          <input type="text" placeholder="Username" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button>Register</button>
        </form>
      </div>
    </div>
  );
};

export default RegistrationPage;
