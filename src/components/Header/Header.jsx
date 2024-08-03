import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__logo">
          <h1>Mon Portfolio</h1>
        </div>
        <nav className="header__nav">
          <ul className="header__nav-list">
            <li className="header__nav-item">
              <Link to="/" className="header__nav-link">Accueil</Link>
            </li>
            <li className="header__nav-item">
              <Link to="/projects" className="header__nav-link">Projets</Link>
            </li>
            <li className="header__nav-item">
              <Link to="/contact" className="header__nav-link">Contact</Link>
            </li>
            <li className="header__nav-item">
              <Link to="/testimonials" className="header__nav-link">Témoignages</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;