// LoginPage.js
import React from 'react';
import { useHistory } from 'react-router-dom';
//import backgroundImage from './image.png'; // Import your background image
import './LoginPage.css'; // Import CSS file

const LoginPage = () => {
  const history = useHistory();

  const handleLogin = (e) => {
    e.preventDefault(); // Prevent default form submission
    // Perform login logic here
    // If login is successful, redirect to dashboard
    history.push('/dashboard');
  };

  return (
    <div className="login-page">
      <div className="login1-box">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <input type="text" placeholder="Username" />
          <input type="password" placeholder="Password" />
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
