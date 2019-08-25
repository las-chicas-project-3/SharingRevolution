import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

// //JB added
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="d-flex flex-grow-1">
        <span className="w-100 d-lg-none d-block"></span>
        <Link className="navbar-brand d-none d-lg-inline-block" to="/">
          Sharing Revolution
          </Link>
      </div>


      <div className="collapse navbar-collapse flex-grow-1 text-right" id="myNavbar">
        <ul className="navbar-nav ml-auto flex-nowrap">
          <li className="nav-item">
            <Link
              to="/products"
              className={window.location.pathname === "/products"
                ? "nav-link active"
                : "nav-link"
              }
            >
              PRODUCTS •
          </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/signup"
              className={window.location.pathname === "/signup" ? "nav-link active" : "nav-link"}
            >SIGN UP • </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/login"
              className={window.location.pathname === "/login" ? "nav-link active" : "nav-link"}
            >
              LOGIN</Link>
          </li>
        </ul>
      </div>
    </nav>

  )
}

export default Navbar;


