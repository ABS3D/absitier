import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <p className="footer-text">© {new Date().getFullYear()} All rights reserved.</p>
      <div className="footer-icons">
        <a href="https://https://github.com/ABS3D" target="_blank" rel="noopener noreferrer">
          <img src="/icons8-github.svg" alt="GitHub" className="footer-icon" />
        </a>
        <a href="https://https://www.linkedin.com/in/youssouf-abbas-absitier/" target="_blank" rel="noopener noreferrer">
          <img src="/linkedin-svgrepo-com.svg" alt="LinkedIn" className="footer-icon" />
        </a>
        <div className="footer-phone">
          <img src="/phone-calling-rounded-svgrepo-com.svg" alt="Phone" className="footer-icon" />
          <span>+33 6 02 37 80 28</span>
        </div>
      </div>
    </footer>
  );
}
