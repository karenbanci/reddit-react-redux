import React, {useState, useContext}  from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import "./search.css";
import "../buttons.css";
import AppContext from "../../appcontext"

export function Search() {
  const [searchTerm, setSearchTerm] = useState('');
  const appContext = useContext(AppContext)

  // manipulando um evento, quando o usuário está mudando o valor de Search (muda o texto)
  function handleSearchChange(event) {
    setSearchTerm(event.target.value)
  }

  // evento que irá mudar o searchTerm, depois que o texto foi mudado e o usuário clicar em submit, ele executa o change que está lá no App.js
  function handleSearchSubmit(event) {
    event.preventDefault();
    appContext.change(searchTerm);
  }

  return (
    <form className="search" onSubmit={handleSearchSubmit}>
      <input
        type="text"
        className="search-input"
        placeholder="Search"
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <button type="submit" className="btn-search">
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </button>
    </form>
  );
}
