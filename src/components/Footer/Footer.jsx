import React from 'react';
import './Footer.css';
import { FaGithub, FaLinkedin } from 'react-icons/fa'; // Import des icônes depuis react-icons

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <p>&copy; {new Date().getFullYear()} Mon Portfolio | idir kebbiche</p>
        <div className="footer__links">
          {/* Liens avec icônes */}
          <a href="https://github.com/idir-kebbiche" target="_blank" rel="noopener noreferrer">
            <FaGithub /> GitHub
          </a>
          <a href="https://www.linkedin.com/in/idir-kebbiche-753289232/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin /> LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
