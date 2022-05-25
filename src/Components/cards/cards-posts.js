import React, { useState, useEffect } from "react";
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

import { Reddit } from "../../api/reddit.js";


export function CardsPosts() {
  // Hook para o nome da comunidade
  // const [subreddit, setSubreddit] = useState("");
  const [postsData, setPostsData] = useState([]);

  // useEffect é similar ao componentDidMount e componentDidUpdate:
  useEffect(() => {
    async function getPostsData() {
      Reddit.getHot().then((jsonresponse) => {
        setPostsData(jsonresponse.data.children);
      });
    }
    getPostsData();
  }, []);

  // tempo de publicação */
  function timeSince(epoch) {
    var date = new Date(0); // The 0 there is the key, which sets the date to the epoch
    date.setUTCSeconds(epoch);

    var seconds = Math.floor((new Date() - date) / 1000);

    var interval = seconds / 31536000;

    if (interval > 1) {
      return Math.floor(interval) + " years ago";
    }
    interval = seconds / 2592000;
    if (interval > 1) {
      return Math.floor(interval) + " months ago";
    }
    interval = seconds / 86400;
    if (interval > 1) {
      return Math.floor(interval) + " days ago";
    }
    interval = seconds / 3600;
    if (interval > 1) {
      return Math.floor(interval) + " hours ago";
    }
    interval = seconds / 60;
    if (interval > 1) {
      return Math.floor(interval) + " minutes ago";
    }
    return Math.floor(seconds) + " seconds ago";
  }

  return (
    <div className="Main">

      {postsData.map((post) => {
        // return post.data.subreddit;
        return (
          <div>
            <div className="Card-Post-Container">
              <div className="Card-Status">
                <button className="btn-like-deslike btn-like">
                  <FontAwesomeIcon icon={faArrowUp} />
                </button>
                <h1>{post.data.score}</h1>
                <button className="btn-like-deslike">
                  <FontAwesomeIcon icon={faArrowDown} />
                </button>
              </div>
              <div className="Card-Content">
                <div className="Card-Content-Header">
                  <img src={icone} alt="Reddit-logo" className="icone" />

                  {/* nome da comunidade */}
                  <h2>
                    r/
                    {post.data.subreddit}
                  </h2>

                  {/* nome do usuário */}
                  <h3>Posted by: r/{post.data.author}</h3>
                  <h3>{timeSince(post.data.created)}</h3>
                </div>
                <div className="Card-Content-Body">
                  {/* título da publicação */}
                  <h1>{post.data.title}</h1>

                  {/* imagem da publicação */}
                  <img src={imagePost} alt="" />
                </div>

                {/* interatividade */}
                <div className="Card-Content-Footer">
                  {/* comentários */}
                  <button className="btn-card-actions">
                    <FontAwesomeIcon icon={faComment} />
                    <h2> {post.data.num_comments} Comments</h2>
                  </button>

                  {/* compartilhamento */}
                  <button className="btn-card-actions">
                    <FontAwesomeIcon icon={faShareNodes} />
                    <h2> Share</h2>
                  </button>

                  {/* salvar publicação */}
                  <button className="btn-card-actions">
                    <FontAwesomeIcon icon={faBookmark} />
                    <h2> Save</h2>
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })}


    </div>
  );
}
