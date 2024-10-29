// src/components/Header.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './Header.css';

function Header({ isLoggedIn }) {
  const navigate = useNavigate(); // Initialize navigate

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <h1>Adore Me</h1>
        </div>
        <div className="search-bar">
          <input type="text" placeholder="Search for products, brands, and more" />
        </div>
        <div className="user-actions">
          {/* Show Login button only if not logged in */}
          {!isLoggedIn && (
            <button onClick={() => navigate('/login')}>Login</button>
          )}
          <i className="fas fa-shopping-cart"></i>
          <i className="fas fa-heart"></i>
          <i
            className="fas fa-user"
            onClick={() => navigate('/account')}
          ></i>
        </div>
      </div>
    </header>
  );
}

export default Header;
