import React from "react";
import "./newscontent.css";
import { CardsNews } from "../../components/cards/cards-news.js";
import { CardsPosts } from "../../components/cards/cards-posts.js";


export const NewsContent = () => {
  return (
    <div>
      <CardsNews />
      <CardsPosts />
    </div>

  )
};
