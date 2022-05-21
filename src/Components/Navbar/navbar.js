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
    <nav className="nav">
      <img src={logo} alt="Reddit-logo" className="nav-logo" />

      <Search />

      <button className="btn-nav-toggle">
        <FontAwesomeIcon icon={faBars} />
      </button>

      <button className="btn-nav-login">
        <FontAwesomeIcon icon={faUser} />
        <FontAwesomeIcon icon={faCaretDown} />
      </button>
    </nav>
  );
};
