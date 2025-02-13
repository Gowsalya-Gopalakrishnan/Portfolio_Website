
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Navbar.css';
import hamburger from '../assets/hamburgericon.png';  

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false); // State to handle hamburger menu toggle

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className='navbar'>
      <h1 className='heading'>Port<span>folio</span></h1>

      <div className={`hamburger-icon ${menuOpen ? 'active' : ''}`} onClick={toggleMenu}>
        <img src={hamburger} alt="hamburger menu" />
      </div>

      <div className={`nav-links ${menuOpen ? 'active' : ''}`}>
        <NavLink to="/" exact className={({ isActive }) => (isActive ? 'active' : '')}
          style={{ textDecoration: "none", marginRight: "50px" }}>
          Home
        </NavLink>
        <NavLink to="/about" className={({ isActive }) => (isActive ? 'active' : '')}
          style={{ textDecoration: "none", marginRight: "50px" }}>
          About
        </NavLink>
        <NavLink to="/skills" className={({ isActive }) => (isActive ? 'active' : '')}
          style={{ textDecoration: "none", marginRight: "50px" }}>
          Skills
        </NavLink>
        <NavLink to="/projects" className={({ isActive }) => (isActive ? 'active' : '')}
          style={{ textDecoration: "none", marginRight: "50px" }}>
          Projects
        </NavLink>
        <NavLink to="/contact" className={({ isActive }) => (isActive ? 'active' : '')}
          style={{ textDecoration: "none", marginRight: "60px" ,marginTop:""}}>
          Contact
        </NavLink>
        <NavLink to='https://drive.google.com/file/d/1wp1eaOLZW22XAkwS-aV2bU-Y1QYU1KXJ/view?usp=sharing'
         className={({ isActive }) => (isActive ? 'active' : '')}
          style={{ textDecoration: "none", marginRight: "90px" }}  download="resume.pdf" 
          target="_blank" 
          rel="noopener noreferrer" >
               Resume
        </NavLink>
      </div>
    </div>
  );
}

export default Navbar;

