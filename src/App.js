import React from 'react';
import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="header-container">
          <div className="header-left">
            <h1>ADORE ME</h1>
            <input type="text" placeholder="What are you looking for?" />
          </div>
          <div className="header-right">
            <button>Login</button>
            <i className="fas fa-shopping-cart"></i>
            <i className="fas fa-heart"></i>
            <i className="fas fa-user"></i>
          </div>
        </div>
        <nav className="App-nav">
          <ul>
            <li>MEN</li>
            <li>WOMEN</li>
            <li>KIDS</li>
            <li>BEAUTY</li>
            <li>WATCHES</li>
            <li>GIFTS</li>
            <li>BRANDS</li>
            <li>HOMESTOP</li>
            <li>STYLE HUB</li>
            <li>BARGA%NS</li>
            <li>LUXE</li>
          </ul>
        </nav>
      </header>
      <main className="App-main">
        <section className="hero">
          <div className="hero-image">
            <img src="https://www.shoppersstop.com/on/demandware.static/-/Sites-shoppersstop-master-catalog/default/dw948b7a1c/images/banner-image.jpg" alt="Hero Image" />
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
