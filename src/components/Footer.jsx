// src/components/Footer.jsx
import React from 'react';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';
import '../assets/styles.css';

const Footer = () => {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Simplora. Simplify your business systems.</p>
      <div className="social-icons">
        <FaLinkedin className="icon" />
        <FaGithub className="icon" />
        <FaInstagram className="icon" />
      </div>
    </footer>
  );
};

export default Footer;
