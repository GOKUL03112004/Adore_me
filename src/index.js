// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'; // Ensure this path is correct
 // Import any global CSS if needed

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root') // This ID should match the one in your index.html
);
