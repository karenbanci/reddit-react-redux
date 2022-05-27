import React from "react";
import { Search } from "../search/search.js";
import { useState }  from 'react';

// import { Collapse } from "./menu/menu.js";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

import logo from "../images/reddit-logo.png";
import "./navbar.css";
import "../buttons.css";


// NAVBAR
export function NavBar() {
  // MENU
  const data = [
    { id: 0, label: "Login", destination: "/login"},
    { id: 1, label: "About", destination: "/about"},
  ];

  const [isOpen, setOpen] = useState(false);
  const [items, setItem] = useState(data);
  const [selectedItem, setSelectedItem] = useState(null);

  const toggleDropdown = () => setOpen(!isOpen);

  // manipulador da caixa do menu, aqui que ocorre a ação e direciona para a link do destino
  const handleItemClick = (id) => {
    selectedItem === id ? setSelectedItem(null) : setSelectedItem(id);
    // quando clica no Login ou About, além de ter direcionado para o destino, a caixa fecha
    setOpen(false);
  };

  return (
    <nav className="nav-global">
      <div className="nav-logo-search">
        <Link to="/">
          <img src={logo} alt="Reddit-logo" className="nav-logo" />
        </Link>

        <Search className="search" />

        <div className="nav-login-user">
          <Link to="/login">
            <button className="btn-submit">Log in</button>
          </Link>

          <Link to="/about">
            <button className="btn-nav-user">
              <FontAwesomeIcon icon={faUser} />
              <FontAwesomeIcon icon={faCaretDown} />
            </button>
          </Link>

          <button
            className="btn-nav-toggle dropdown-header"
            onClick={toggleDropdown}
          >
            <FontAwesomeIcon icon={faBars} />
          </button>

          <div className={`dropdown-body ${isOpen && "open"}`}>
            {items.map((item) => (
              <Link
                to={item.destination}
                className="dropdown-item"
                onClick={(e) => handleItemClick(e.target.id)}
                id={item.id}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};
