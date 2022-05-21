import React from "react";
import "./newscontent.css";
import { CardsNews } from "../cards/cards-news.js";
import { CardsPosts } from "../cards/cards-posts.js";
import { Search } from "../search/search.js";



export const NewsContent = () => {
  return (
    <div className="container">
        <CardsNews />
        <CardsPosts />
    </div>

  )
};
