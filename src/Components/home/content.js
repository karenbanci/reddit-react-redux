import React from "react";
import "./content.css";
import { CardsNews } from "../cards/cards-news.js";
import { CardsPosts } from "../cards/cards-posts.js";
import { Search } from "../search/search.js";



export const Content = () => {
  return (
    <div className="container">
        <Search/>
        <CardsNews />
        <CardsPosts />
    </div>

  )
};
