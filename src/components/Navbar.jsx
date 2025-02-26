
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Navbar.css';
import hamburger from '../assets/hamburgericon.png';  

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false); // State to handle hamburger menu toggle

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleDownloadAndOpen = (event) => {
  window.open('https://drive.google.com/file/d/1fesoX6EViYCv4dV_G0CHyrFVrepgvn1e/view?usp=sharing', '_blank');

  const link = document.createElement('a');
  link.href = 'https://drive.google.com/uc?id=1fesoX6EViYCv4dV_G0CHyrFVrepgvn1e&export=download';  
  link.download = 'resume.pdf'; 
  document.body.appendChild(link);
  link.click();  
  document.body.removeChild(link);  
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
        <NavLink
          to="#"
          onClick={handleDownloadAndOpen}
          className={({ isActive }) => (isActive ? 'active' : '')}
          style={{ textDecoration: "none", marginRight: "90px" }}>
          Resume
        </NavLink>
      </div>
    </div>
  );
}

export default Navbar;

