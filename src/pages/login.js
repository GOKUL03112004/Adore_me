// src/components/Login.js

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import './login.css'; // Import the CSS file for styling

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate hook

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Add login logic here (e.g., call to an API)
    if (!email || !password) {
      setError('Please fill in all fields.');
    } else {
      setError('');
      // Handle login logic here
      console.log('Logging in with', email, password);
      // After successful login, redirect to the home page
      navigate('/home'); // Change '/home' to your actual home route
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <h2>Login</h2>
        {error && <p className="error">{error}</p>}
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">Login</button>
          <p>
            New Customers?{' '}
            <a href="#" onClick={() => navigate('/signup')}>Signup</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
