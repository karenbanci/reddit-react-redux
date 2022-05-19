import React from "react";
import { Search } from "./search/index.js";
// import logo from "./images/reddit-logo.png";
import "./navbar.css";

export const NavBar = () => {
  return (
    <nav className="nav">
      <div className="nav-logo">
        {/* <img src={require("./images/reddit-logo.png").default} alt="Reddit-logo" /> */}
        <Search />
      </div>
    </nav>
  );
};
