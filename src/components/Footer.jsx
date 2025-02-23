import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <p>© {new Date().getFullYear()} My Portfolio | Follow me on:</p>
      <a href="https://github.com/iaplesnyc" target="_blank" rel="noopener noreferrer">GitHub</a> |
      <a href="https://linkedin.com/in/iliana-pena" target="_blank" rel="noopener noreferrer">LinkedIn</a>
    </footer>
  );
};

export default Footer;
