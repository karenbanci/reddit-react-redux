import React from "react";
import "./cards-posts.css";
import "../buttons.css";
import icone from "../images/icone.png";
import imagePost from "../images/sidebar.jpeg";

import { LikeCount } from "../likes/likes-count.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { faComment } from "@fortawesome/free-solid-svg-icons";
import { faShareNodes } from "@fortawesome/free-solid-svg-icons";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";




export const CardsPosts = () => {
  return (
    <div className="Main">
      <div className="Card-Top-Five"></div>

      <div className="Card-Post-Container">
        <div className="Card-Status">
          <button className="btn-like-deslike">
            <FontAwesomeIcon icon={faArrowUp} />

          </button>
          <LikeCount />
          <button className="btn-like-deslike">
            <FontAwesomeIcon icon={faArrowDown} />
          </button>
        </div>
        <div className="Card-Content">
          <div className="Card-Content-Header">
            <img src={icone} alt="Reddit-logo" className="icone" />
            <h2>r/BayArea</h2>
            <h3>Posted by r/KakisB1</h3>
          </div>
          <div className="Card-Content-Body">
            <h1>
              After close to 10 years of working in the food industry, I just
              purchased a convenient store that I’m gonna turn into a Brick oven
              Pizza restaurant! WISH ME LUCK!
            </h1>
            <img src={imagePost} alt="" />
          </div>
          <div className="Card-Content-Footer">
            <button className="btn-card-actions">
              <FontAwesomeIcon icon={faComment} />
              <h2> 902 Comments</h2>
            </button>
            <button className="btn-card-actions">
              <FontAwesomeIcon icon={faShareNodes} />
              <h2> Share</h2>
            </button>
            <button className="btn-card-actions">
              <FontAwesomeIcon icon={faBookmark} />
              <h2> Save</h2>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
