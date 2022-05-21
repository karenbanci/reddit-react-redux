import React from "react";
import "./search.css";
import "../buttons.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";



export const Search = () => {
  return (
    <form className="search-navegation">
      <input type="text" className="search" placeholder="Search" />
      <button type="submit" className="btn-search">
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </button>
    </form>
  );
};
