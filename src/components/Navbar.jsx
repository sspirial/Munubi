import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../assets/sspirial-logo.png'; // Import the logo

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo-link"> {/* Added Link for logo */}
          <img src={logo} alt="Ssprial Logo" className="navbar-logo" />
        </Link>
        <ul className="navbar-list">
          <li className="navbar-item"><Link to="/">Home</Link></li>
          <li className="navbar-item"><Link to="/about">About Me</Link></li>
          <li className="navbar-item"><Link to="/skills">Skills</Link></li>
          <li className="navbar-item"><Link to="/projects">Projects</Link></li>
          <li className="navbar-item"><Link to="/education">Education</Link></li>
          <li className="navbar-item"><Link to="/contact">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
