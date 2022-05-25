import React from "react";
import "./search.css";
import "../buttons.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";



export class Search  extends React.Component{
  render() {
    return (
      <form className="search">
        <input type="text" className="search-input" placeholder="Search" />
        <button type="submit" className="btn-search">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
      </form>
    );
  }
};
