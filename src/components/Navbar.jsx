import React, { useState, useEffect } from "react";
import "../style.css";

const Navbar = () => {
  const [theme, setTheme] = useState("light");

  // Load saved theme on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
    document.documentElement.setAttribute("data-theme", savedTheme);
  }, []);

  // Toggle theme
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <header className="navbar">
      <div className="nav-left">Personal Portfolio</div>
      <nav className="nav-right">
        <a href="#profile">Profile</a>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>

        {/* Theme Switch */}
        <label className="switch">
          <input type="checkbox" onChange={toggleTheme} checked={theme === "dark"} />
          <span className="slider"></span>
        </label>
      </nav>
    </header>
  );
};

export default Navbar;
