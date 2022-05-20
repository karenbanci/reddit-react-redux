import React from "react";
import { Search } from "../search/search.js";
import logo from "../images/reddit-logo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons'

import "./navbar.css";

export const NavBar = () => {
  return (
    <nav className="nav">
      <img src={logo} alt="Reddit-logo" className="nav-logo" />

      <div className="nav-toggle">
        <FontAwesomeIcon icon={faBars} />
        {/* <FontAwesomeIcon icon={faCoffee} /> */}
        <Search />
      </div>
    </nav>
  );
};
