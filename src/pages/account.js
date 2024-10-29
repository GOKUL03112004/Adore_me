import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './Account.css';

const Account = () => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null); // State for error handling
  const navigate = useNavigate(); // Initialize navigate

  useEffect(() => {
    // Simulate fetching user data from an API or backend
    const fetchUserData = async () => {
      try {
        const response = await fetch('http://localhost:1337/api/users/me', { // Replace with your API endpoint
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}` // Assuming JWT token is stored in localStorage
          }
        });
        if (!response.ok) { // Check if the response is not okay
          throw new Error('Network response was not ok'); // Throw an error for non-2xx responses
        }
        const data = await response.json();
        setUser(data);
      } catch (error) {
        console.error('Failed to fetch user data:', error);
        setError('Failed to fetch user data. Please try again.'); // Set error state
      }
    };

    fetchUserData();
  }, []);

  const handleLogout = () => {
    // Clear token and redirect to login
    localStorage.removeItem('token');
    navigate('/login'); // Use navigate for redirection
  };

  const goToHome = () => {
    // Redirect to the home page
    navigate('/');
  };

  if (error) {
    return <div>{error}</div>; // Show error message
  }

  if (!user) {
    return <div>Loading...</div>; // You could also implement a spinner here
  }

  return (
    <div className="account-page">
      <h1>My Account</h1>
      <div className="user-info">
        <h2>Profile Information</h2>
        <p><strong>Username:</strong> {user.username}</p>
        <p><strong>Email:</strong> {user.email}</p>
        {/* Add more user details as needed */}
      </div>
      <button onClick={handleLogout}>Logout</button>

      {/* New button to navigate to home page */}
      <button onClick={goToHome} className="go-home-btn">
        Go to Home
      </button>
    </div>
  );
};

export default Account;
