import React from "react";
import "./content.css";
import { CardsPosts } from "../cards/cards-posts.js";
import { Search } from "../search/search.js";



export const Content = () => {
  return (
    <div className="container">
        <Search/>
        <CardsPosts />
    </div>

  )
};
