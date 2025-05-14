import React from "react";
import { Link } from "react-router-dom";
import "./Tete.css";

export default function Tete() {
  return (
    <div className="logo-wrapper">
      <Link to="/">
        <img src="/logo.png" alt="absitier logo" className="main-logo" />
      </Link>
    </div>
  );
}
