import React from "react";
import "./search.css";


export const Search = () => {
  return (
    <form className="search">
      <input type="text" placeholder="Search" />
      <button type="submit" className="search-button">
        🔎
      </button>
    </form>
  );
};
