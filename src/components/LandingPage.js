// LandingPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css'; // Import CSS for styling

const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="background-image"></div>
      <div className="login-box">
        <h1>Welcome to CodeWars Live Testing Portal</h1>
        <Link to="/login" className="login-btn">Login</Link>
        <Link to="/register" className="login-btn">Registration</Link>
      </div>
    </div>
  );
};

export default LandingPage;
