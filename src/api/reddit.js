
export const Reddit = {
  getHot() {
    // retorna uma promise que eventualmente
    // solicitação GET
    // pego dos dados
    return fetch("https://api.reddit.com/hot")
    //então pego a resposta da solicitação do json que me forneceu os dados
      .then((response) => {
        // convertendo os dados no formato JSON
        return response.json();
      });
  },

  search(q) {
    return fetch(`https://api.reddit.com/search/?q=${q}`)
      .then((response) => {
        return response.json();
      });
  }

}
