import React from "react";
import "./content.css";
import { CardsPosts } from "../cards/cards-posts.js";
import { Search } from "../search/search.js";

export function Content(props) {
  return (
    <div className="container">
      <Search />
      {/* a propriedade será usada no CardPosts */}
      <CardsPosts searchingTerm={props.searchingTerm} />
    </div>
  );
}
