import React from "react";
import "./content.css";
import { CardsPosts } from "../cards/cards-posts.js";
import { Search } from "../search/search.js";

export class Content  extends React.Component {
  render() {
    return (
      <div className="container">
          <Search/>
          <CardsPosts />
      </div>

    )
  }
};
