import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import "./search.css";
import "../buttons.css";

export function Search() {
  let searchTerm = "";

  return (
    <form className="search" >
      <input
        type="text"
        className="search-input"
        placeholder="Search"
        value={searchTerm}
      />
      <button type="submit" className="btn-search">
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </button>
    </form>
  );
}
