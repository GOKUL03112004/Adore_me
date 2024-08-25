// src/Home.js
import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <header className="home-header">
        <h1>Welcome to Adore_me</h1>
        <p>Your favorite online store for fashion and accessories!</p>
      </header>
      <main className="home-content">
        <section className="home-featured">
          <h2>Featured Products</h2>
          <div className="product-list">
            {/* Example Product Card */}
            <div className="product-card">
              <img src="path_to_image" alt="Product" />
              <h3>Product Name</h3>
              <p>$Price</p>
            </div>
            {/* Add more product cards as needed */}
          </div>
        </section>
        <section className="home-about">
          <h2>About Us</h2>
          <p>Learn more about our story and mission.</p>
        </section>
      </main>
      <footer className="home-footer">
        <p>&copy; 2024 Adore_me. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
