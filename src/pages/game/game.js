import { games } from "../../data/games.js";

const btnSearch = document.getElementById("btnSearch");
const gameContent = document.getElementById("gameContent")

btnSearch.addEventListener("click", () => {
  window.location.href = `/steam-dev/src/pages/search/search.html?search=${inputSearch.value}`;
});

window.addEventListener("load", () => {
  const url = new URL(window.location.href);
  const id = url.searchParams.get("id");
  const newGames = games.filter((e) => e.id == id);
  const game = newGames[0];

  gameContent.innerHTML += `
            <h1 class="container">${game.name}</h1>
        <div class="container d-flex">
            <img class="col-md-6" src="${game.thumb}" alt="">
            <div class="col-md-6 mx-4 d-flex flex-column justify-content-between">
                <p>${game.description}</p>
                <p>Avaliação: ${game.rating}</p>
                <p>${game.promoPrice.toLocaleString('pt-BR', {
                  style: 'currency',
                  currency: 'BRL'
                })}</p>
                <button id="btnAddToCart" class="btn btn-primary">Adicionar Ao Carrinho</button>
            </div>
        </div>
`;
  
})