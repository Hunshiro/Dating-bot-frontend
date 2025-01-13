import React, { useState, useEffect } from 'react';
import '../styles/Navbar.css';
import img from '../img/logo1.png'

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-content">
        <div className="navbar-logo">
        <img src={img} alt="Bot Logo" style={{ width: '100px', height: '100px' }} />
          <span>LoveBot</span>
        </div>
        <div className="navbar-links">
          <a href="#features">Features</a>
          <a href="#commands">Commands</a>
          <button className="login-button">Login with Discord</button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
