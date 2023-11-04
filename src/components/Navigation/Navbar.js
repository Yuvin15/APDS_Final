// Navbar.js

import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
      <a className="navbar-brand" href="#">
        <i className="fas fa-user-md fa-2x"></i>
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarTogglerDemo03"
        aria-controls="navbarTogglerDemo03"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
        <ul className="navbar-nav mx-auto">
          <li className="nav-item active mr-4">
            <a className="nav-link" href="index.html">
              Home <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item mr-4">
            <a className="nav-link" href="#maria">
              All Posts
            </a>
          </li>
          <li className="nav-item mr-4">
            <a className="nav-link" href="#maria">
              Log out
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
