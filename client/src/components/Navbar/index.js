import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./style.css";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";


class Navbar extends Component {

  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="d-flex flex-grow-1">
          <span className="w-100 d-lg-none d-block"></span>
          <Link className="navbar-brand d-none d-lg-inline-block" to="/">
            Lieren
          </Link>
        </div>


        <div className="collapse navbar-collapse flex-grow-1 text-right" id="myNavbar">
          {
            this.props.auth.isAuthenticated ?
              <ul className="navbar-nav ml-auto flex-nowrap">

                <li className="nav-item">
                  <Link
                    to="/dashboard"
                    className={window.location.pathname === "/dashboard"
                      ? "nav-link active"
                      : "nav-link"
                    }
                  >
                    Products
          </Link>
                </li>
                <li className={window.location.pathname === "/logout"
                  ? "nav-item nav-link active"
                  : "nav-item nav-link"
                } 
                onClick={this.onLogoutClick}
                >
                  Logout
                </li>
              </ul>
              :
              <ul className="navbar-nav ml-auto flex-nowrap">
                <li className="nav-item">
                  <Link
                    to="/register"
                    className={window.location.pathname === "/register" ? "nav-link active" : "nav-link"}
                  >Sign Up</Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/login"
                    className={window.location.pathname === "/login" ? "nav-link active" : "nav-link"}
                  >
                    Log In</Link>
                </li>
              </ul>
          }
        </div>
      </nav>

    )
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
  objects: state.objects
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(Navbar);

