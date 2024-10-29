// src/pages/Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css'; // Import your CSS

function Login({ setIsLoggedIn, setUserDetails }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const response = await loginUser (email, password);
    
    if (response.success) {
      setIsLoggedIn(true);
      setUserDetails({ username: response.username, email: response.email });
      localStorage.setItem('token', response.token); // Store JWT token in localStorage
      navigate('/'); // Redirect to home page after login
    } else {
      setError('Login failed. Please try again.');
    }
  };

  const loginUser  = async (email, password) => {
    try {
      const response = await fetch('http://localhost:1337/api/auth/local', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ identifier: email, password }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      return { success: true, username: data.user.username, email: data.user.email, token: data.jwt };
    } catch (error) {
      console.error('Error during login:', error);
      return { success: false };
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <h2>Login</h2>
        {error && <p className="error-message">{error}</p>}
        <form onSubmit={handleLogin} className="login-form">
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              required
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              required
            />
          </div>
          <button type="submit" className="login-btn">Login</button>
        </form>
        <div className="signup-text">
          New? <a href="/signup" className="signup-link">Signup</a>
        </div>
      </div>
    </div>
  );
}

export default Login;