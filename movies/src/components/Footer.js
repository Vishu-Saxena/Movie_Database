import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; 2024 MovieDB. All Rights Reserved.</p>
      <ul className="footer-links">
        <li><a href="#about">About Us</a></li>
        <li><a href="#privacy">Privacy Policy</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </footer>
  );
};

export default Footer;
