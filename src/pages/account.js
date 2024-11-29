// src/pages/Account.js
import React from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate
import './Account.css'; // Import CSS for the Account page

const Account = ({ userDetails, onLogout }) => {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleGoHome = () => {
    navigate('/'); // Navigate to the home page
  };

  return (
    <div className="account-container">
      <h1>My Account</h1>
      <h2>Profile Information</h2>
      <div className="profile-info">
        <p><strong>Username:</strong> {userDetails.username}</p>
        <p><strong>Email:</strong> {userDetails.email}</p>
      </div>
      <div className="account-actions">
        <button className="logout-button" onClick={onLogout}>Logout</button>
        <button onClick={handleGoHome} className="home-button">Go to Home</button>
      </div>
    </div>
  );
};

export default Account;
