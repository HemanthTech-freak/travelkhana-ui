import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import '../css/Header.css';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header sticky">
      <div className="header-container">
        <Link to="/" className="logo">
          <img src="/Assets/img/logo.png" alt="Travelkhana Logo" />
        </Link>
        
        <nav className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <Link to="/" onClick={toggleMenu}>Home</Link>
          <Link to="/about" onClick={toggleMenu}>About Us</Link>
          <Link to="/blog" onClick={toggleMenu}>Blog</Link>
          <Link to="/contact-us" onClick={toggleMenu}>Contact Us</Link>
        </nav>

        <button className="cta-button">Order Now</button>

        <div className="menu-icon" onClick={toggleMenu}>
          <div className={`menu-bar ${menuOpen ? 'open' : ''}`}></div>
          <div className={`menu-bar ${menuOpen ? 'open' : ''}`}></div>
          <div className={`menu-bar ${menuOpen ? 'open' : ''}`}></div>
        </div>
      </div>
    </header>
  );
}

export default Header;
