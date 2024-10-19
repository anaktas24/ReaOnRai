// src/components/Navbar.tsx
import React from 'react';
import { faHome, faBook, faGavel, faUsers, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Navbar.css'

const Navbar: React.FC = () => {
  return (
    <div className="navbar">
        <a href="#home" className="nav-item">
            <FontAwesomeIcon icon={faHome} className="icon" />
            
        </a>
        <a href="#resources" className="nav-item">
            <FontAwesomeIcon icon={faBook} className="icon" />
        </a>
        <a href="#legal" className="nav-item">
            <FontAwesomeIcon icon={faGavel} className="icon" />
        </a>
        <a href="#community" className="nav-item">
            <FontAwesomeIcon icon={faUsers} className="icon" />
        </a>
        <a href="#profile" className="nav-item">
            <FontAwesomeIcon icon={faUser} className="icon" />
        </a>
    </div>
  );
};

export default Navbar;