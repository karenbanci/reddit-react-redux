import React from "react";
import { Search } from "../search/search.js";
import logo from "../images/reddit-logo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

import "./navbar.css";
import "../buttons.css";

export const NavBar = () => {
  return (
    <nav className="nav-global">
      <div className="nav-logo-search">
        <img src={logo} alt="Reddit-logo" className="nav-logo" />
        <Search className="search" />
        <div className="nav-login-user">
          <button className="btn-nav-login">Log in</button>

          <button className="btn-nav-toggle">
            <FontAwesomeIcon icon={faBars} />
          </button>

          <button className="btn-nav-user">
            <FontAwesomeIcon icon={faUser} />
            <FontAwesomeIcon icon={faCaretDown} />
          </button>
        </div>
      </div>
    </nav>
  );
};
