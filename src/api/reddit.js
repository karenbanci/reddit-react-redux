
export const Reddit = {
  getHot() {
    // console.log("tentando ler o reddit");
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
  },

  search(q) {
    return fetch(`https://api.reddit.com/search/?q=${q}`)
      .then((response) => {
        return response.json();
      })
      .then((jsonresponse) => {
        return jsonresponse;
      });
  }

}
