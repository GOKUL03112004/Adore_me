// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'; // Added Navigate for redirecting
import Header from './components/Header';
import NavBar from './components/NavBar';
import HeroSection from './components/HeroSection';
import FeaturedProducts from './components/FeaturedProducts';
import Footer from './components/Footer';
import Login from './pages/Login';
import Signup from './pages/Signup';
import ProductCard from './components/ProductCard';
import BodyMeasurement from './pages/BodyMeasurement';
import Account from './pages/Account';
import Products from './pages/ProductPage';
import Cart from './pages/Cart'; // Import the Cart page
import { CartProvider } from './components/context/CartContext'; // Import the CartProvider
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userDetails, setUserDetails] = useState({});

  return (
    <CartProvider> {/* Wrap your application with CartProvider */}
      <Router>
        <div className="App">
          <Header isLoggedIn={isLoggedIn} /> {/* Pass isLoggedIn to Header */}
          <NavBar />

          <Routes>
            <Route 
              path="/" 
              element={
                isLoggedIn ? (
                  <Account userDetails={userDetails} />
                ) : (
                  <>
                    <HeroSection />
                    <ProductCard />  
                    <FeaturedProducts />
                  </>
                )
              } 
            />
            <Route 
              path="/login" 
              element={<Login setIsLoggedIn={setIsLoggedIn} setUserDetails={setUserDetails} />} 
            />
            <Route path="/signup" element={<Signup />} />
            <Route path="/body-measurement" element={<BodyMeasurement />} />
            <Route path="/account" element={<Account />} />
            <Route path="/products" element={<Products />} />
            <Route path="/cart" element={<Cart />} /> {/* Add Cart route */}
            <Route 
              path="*" 
              element={<Navigate to="/" />} // Redirects to the home page for any unknown routes
            />
          </Routes>

          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
