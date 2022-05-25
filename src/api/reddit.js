import React from "react";

export const Reddit = {
  getHot() {
    console.log("tentando ler o reddit");
    // retorna uma promise que eventualmente será resolvida na lista de tracks da pesquisa
    // solicitação GET

    return fetch("https://api.reddit.com/hot")
      .then((response) => {
        return response.json();
      })
      .then((jsonresponse) => {
        console.log(jsonresponse);
        return jsonresponse;
      });
  }
}


// export const getSubReddit = async () => {
//   const requestUrl = `/subreddit`;
//   const response = await fetch(requestUrl, {
//     method: "GET",
//   });

//   const json = await response.json();

//   return json;
// };
