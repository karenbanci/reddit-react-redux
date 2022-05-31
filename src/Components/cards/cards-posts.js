import React, { useState, useEffect } from "react";
import { Reddit } from "../../api/reddit.js";

import "./cards-posts.css";
import "../buttons.css";
import "../side-bar.css";

import icone from "../images/icone.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment } from "@fortawesome/free-solid-svg-icons";
import { faShareNodes } from "@fortawesome/free-solid-svg-icons";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";

// tempo de publicação */
export function timeSince(epoch) {
  // criamos um novo objeto tipo Date e definimos o epoch nele
  var date = new Date(0); // The 0 there is the key, which sets the date to the epoch
  date.setUTCSeconds(epoch);

  // Date() com () vazio é a data atual, pego ela e subitraio com a data do post(da pessoa que publicou), divido entre 1000 para converter o tempo em segundos
  var seconds = Math.floor((new Date() - date) / 1000);

  // 3156000 é o valor de quantos segundos tem no ano
  var interval = seconds / 31536000;

  // se a data é mais de um ano atras, ele vai retornar uma string do X years ago
  if (interval > 1) {
    return Math.floor(interval) + " years ago";
  }
  // se for igual a um mês
  interval = seconds / 2592000;
  if (interval > 1) {
    return Math.floor(interval) + " months ago";
  }
  // se for igual a um dia
  interval = seconds / 86400;
  if (interval > 1) {
    return Math.floor(interval) + " days ago";
  }
  // se for igual a uma hora
  interval = seconds / 3600;
  if (interval > 1) {
    return Math.floor(interval) + " hours ago";
  }
  // se for igual a um minuto
  interval = seconds / 60;
  if (interval > 1) {
    return Math.floor(interval) + " minutes ago";
  }
  // se for em segundos
  return Math.floor(seconds) + " seconds ago";
}

// (props) é a propriedade do functional component
export function CardsPosts(props) {
  // // Hook para os datos da publicação
  const [postsData, setPostsData] = useState([]);

  // useEffect é similar ao componentDidMount e componentDidUpdate:
  useEffect(() => {
    console.log("use effect");
    setPostsData([]);

    if (props.searchingTerm) {
      console.log("searching...");
      // criando uma promessa
      (async () => {
        // pego a função que eu importei, dentro dela tem outra função chamada search, recebi a promisse
        Reddit.search(props.searchingTerm).then((jsonresponse) => {
          // então o conteúdo dessa promessa que é o (jsonresponse) procuro os dados e o filho
          setPostsData(jsonresponse.data.children);
          // se o usuário digitou uma palavra que não tem resultados, vai abrir um alert
          if (jsonresponse.data.children.length === 0) {
            alert("not found");
          }
        });

      })();
    } else {
      console.log("loading hot...");
      // criando uma promessa
      (async () => {
        // pego a função que eu importei, dentro dela tem outra função chamada getHot, recebi a promisse
        Reddit.getHot().then((jsonresponse) => {
          // então o conteúdo dessa promessa que é o (jsonresponse) coloco dentro de setPostsData
          setPostsData(jsonresponse.data.children);
        });
        // aqui estou chamando a função assincrona
      })();
    }
    // se coloco array vazio no segundo argumento, ele executa o useEffect 1 vez
  }, [props]);

  return (
    <div className="Main">
      {postsData.map((post) => {
        // return post.data.subreddit;
        return (
          <div>
            <div className="Card-Post-Container">
              <div className="side-bar"></div>
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
                  <h3 className="time-since-mobile">
                    {timeSince(post.data.created)}
                  </h3>
                </div>
                <div className="Card-Content-Body">
                  {/* título da publicação */}
                  <h1>{post.data.title}</h1>

                  {/* imagem da publicação */}
                  <div className="image-content">
                    <img src={post.data.thumbnail} alt="" />
                  </div>
                </div>

                {/* interatividade */}
                <div className="Card-Content-Footer">
                  {/* likes */}
                  <button className="btn-card-actions">
                    <FontAwesomeIcon icon={faThumbsUp} />
                    <h2>{post.data.score} likes </h2>
                  </button>

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
