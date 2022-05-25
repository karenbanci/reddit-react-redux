import React from "react";
import { Search } from "../search/search.js";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

import logo from "../images/reddit-logo.png";
import "./navbar.css";
import "../buttons.css";


export class NavBar  extends React.Component {
  render() {
    return (
      <nav className="nav-global">
        <div className="nav-logo-search">
          <Link to="/">
            <img src={logo} alt="Reddit-logo" className="nav-logo" />
          </Link>

          <Search className="search" />
          <div className="nav-login-user">
            <Link to="/login">
              <button className="btn-nav-login">Log in</button>
            </Link>

            <button className="btn-nav-toggle">
              <FontAwesomeIcon icon={faBars} />
            </button>

            <Link to="/about">
              <button className="btn-nav-user">
                <FontAwesomeIcon icon={faUser} />
                <FontAwesomeIcon icon={faCaretDown} />
              </button>
            </Link>
          </div>
        </div>
      </nav>
    );
  }
};
