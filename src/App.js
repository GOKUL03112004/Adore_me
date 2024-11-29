import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import NavBar from './components/NavBar';
import HeroSection from './components/HeroSection';
import FeaturedProducts from './components/FeaturedProducts';
import Footer from './components/Footer';
import Login from './pages/Login';
import Signup from './pages/Signup';
import ProductCard from './components/productcard';
import BodyMeasurement from './pages/BodyMeasurement';
import Account from './pages/Account';
import Products from './pages/ProductPage';
import Cart from './pages/Cart';
import { CartProvider } from './components/context/CartContext';
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    return localStorage.getItem('isLoggedIn') === 'true';
  });
  const [userDetails, setUserDetails] = useState({});

  useEffect(() => {
    localStorage.setItem('isLoggedIn', isLoggedIn);
  }, [isLoggedIn]);

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserDetails({});
    localStorage.setItem('isLoggedIn', 'false');
  };

  return (
    <CartProvider>
      <Router>
        <div className="App">
          <Header isLoggedIn={isLoggedIn} />
          <NavBar />

          <Routes>
            <Route
              path="/"
              element={
                <>
                  <HeroSection />
                  <ProductCard />  
                  <FeaturedProducts />
                </>
              }
            />
            <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} setUserDetails={setUserDetails} />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/body-measurement" element={<BodyMeasurement />} />
            <Route 
              path="/account" 
              element={
                isLoggedIn ? (
                  <Account userDetails={userDetails} onLogout={handleLogout} />
                ) : (
                  <Navigate to="/login" />
                )
              } 
            />
            <Route path="/products" element={<Products />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>

          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
