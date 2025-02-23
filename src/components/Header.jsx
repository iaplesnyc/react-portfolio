import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const location = useLocation();

  return (
    <header>
      <h1>Iliana's Portfolio</h1>
      <nav>
        <ul>
          <li className={location.pathname === '/' ? 'active' : ''}>
            <Link to="/">About Me</Link>
          </li>
          <li className={location.pathname === '/portfolio' ? 'active' : ''}>
            <Link to="/portfolio">Portfolio</Link>
          </li>
          <li className={location.pathname === '/contact' ? 'active' : ''}>
            <Link to="/contact">Contact</Link>
          </li>
          <li className={location.pathname === '/resume' ? 'active' : ''}>
            <Link to="/resume">Resume</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
