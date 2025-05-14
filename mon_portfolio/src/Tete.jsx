import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";
import "./Typewriter.css";
import "./components/Tete.css"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      <nav className="navbar">
        <button className={`menu-toggle ${isOpen ? "open" : ""}`} onClick={toggleMenu}></button>
        <ul className={`nav-links ${isOpen ? "open" : ""}`}>
          <li className={`nav-item ${location.pathname === "/" ? "active" : ""}`}><Link to="/" onClick={closeMenu}><span className="typewriter">Home</span></Link></li>
          <li className={`nav-item ${location.pathname === "/about" ? "active" : ""}`}><Link to="/about" onClick={closeMenu}><span className="typewriter">About</span></Link></li>
          <li className={`nav-item ${location.pathname === "/competences" ? "active" : ""}`}><Link to="/competences" onClick={closeMenu}><span className="typewriter">Skills</span></Link></li>
          <li className={`nav-item ${location.pathname === "/contact" ? "active" : ""}`}><Link to="/contact" onClick={closeMenu}><span className="typewriter">Contact</span></Link></li>
        </ul>
      </nav>
      {isOpen && <div className="nav-overlay show" onClick={toggleMenu}></div>}
    </>
  );
}
