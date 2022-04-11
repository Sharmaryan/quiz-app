import React from "react";
import { Link } from "react-router-dom";
import "./Nabar.css";
export const Navbar = () => {
  return (
    <nav className="nav">
      <div className="nav-brand">
        <Link to="/" className="nav-brand-text">
          QuizApp
        </Link>
      </div>
      <div className="nav-links">
        <a href="https://github.com/Sharmaryan">
          <i className="fab fa-github  nav-links-git"></i>
        </a>
      </div>
    </nav>
  );
};
