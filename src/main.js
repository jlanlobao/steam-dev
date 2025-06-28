import { games } from "./data/games.js";

// SELETORES
const divRecommended = document.getElementById("recommended");
const divPromoGames = document.getElementById("promo-games");
const btnAction = document.getElementById("btn-action");
const btnSimulation = document.getElementById("btn-simulation");
const btnMmorpg = document.getElementById("btn-mmorpg");
const btnSports = document.getElementById("btn-sports");
const btnFight = document.getElementById("btn-fight");

// FUNCOES
const promoGames = games.filter(
  (element) => element.promoPrice < element.originalPrice
);

const recomendedGames = games.filter(
  (element) => element.rating > 8
);

function createNewGame(gamesList, gamesContainer){
  gamesList.forEach((element) => {
    gamesContainer.innerHTML += `
            <div class="col-lg-4">
                <img src="${element.thumb}" class="rounded" />
                <h4>${element.name}</h4>
                <p>${element.promoPrice.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}</p>
            </div>
        `;
  });
}

// Eventos
btnAction.addEventListener("click", () => {
  window.location.href = `src/pages/game-category/index.html?category=${btnAction.name}`;
});

btnSimulation.addEventListener("click", () => {
  window.location.href = `src/pages/game-category/index.html?category=${btnSimulation.name}`;
});

btnMmorpg.addEventListener("click", () => {
  window.location.href = `src/pages/game-category/index.html?category=${btnMmorpg.name}`;
});

btnSports.addEventListener("click", () => {
  window.location.href = `src/pages/game-category/index.html?category=${btnSports.name}`;
});

btnFight.addEventListener("click", () => {
  window.location.href = `src/pages/game-category/index.html?category=${btnFight.name}`;
});

window.addEventListener("load", () => {
  createNewGame(promoGames, divPromoGames);
  createNewGame(recomendedGames, divRecommended);

  /*
  recomendedGames.forEach((element, index) => {
    divRecommended.innerHTML += `
            <div class="col-lg-4">
              <img src="${element.thumb}" class="rounded" />
              <h4>${element.name}</h4>
                
              <p>${
                element.originalPrice > element.promoPrice
                  ? element.promoPrice.toLocaleString("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                  })
                  : element.originalPrice.toLocaleString("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                  })
              }</p>
            </div>
        `;
  });*/
});
