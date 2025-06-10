import React, { useEffect, useState } from 'react';
import '../assets/styles.css';
import logo from '../assets/logo-png.png'; // make sure this path is right

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="navbar-container" style={{ maxWidth: '1300px', margin: '0 auto', padding: '1rem 2rem' }}>
        <a href="#hero" className="logo" style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
          <img src={logo} alt="Simplora logo" className="logo-image" />
        </a>
        <ul className="nav-links" style={{ display: 'flex', gap: '2.5rem', listStyle: 'none' }}>
          <li><a href="#hero">Home</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#footer">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
