import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item"><Link to="/">Home</Link></li>
        <li className="navbar-item"><Link to="/about">About Me</Link></li>
        <li className="navbar-item"><Link to="/skills">Skills</Link></li>
        <li className="navbar-item"><Link to="/projects">Projects</Link></li>
        <li className="navbar-item"><Link to="/education">Education</Link></li>
        <li className="navbar-item"><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
