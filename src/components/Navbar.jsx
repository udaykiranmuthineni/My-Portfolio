import React from 'react';
import '../style.css';

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="nav-left">Personal Portfolio</div>
      <nav className="nav-right">
        <a href="#profile">Profile</a>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
};

export default Navbar;
