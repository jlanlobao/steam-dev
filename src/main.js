import { games } from "./data/games.js";
import { createNewGame } from "./scripts/createNewGames.js";
import { hasIdUser } from "./scripts/hasIdUser.js";
import { createCardEventListener } from "./scripts/createCardEventListener.js";

// SELETORES
const divRecommended = document.getElementById("recommended");
const divPromoGames = document.getElementById("promo-games");
const btnAction = document.getElementById("btn-action");
const btnSimulation = document.getElementById("btn-simulation");
const btnMmorpg = document.getElementById("btn-mmorpg");
const btnSports = document.getElementById("btn-sports");
const btnFight = document.getElementById("btn-fight");
const btnSearch = document.getElementById("btnSearch");
const inputSearch = document.getElementById("inputSearch");
const btnProfile = document.getElementById("btnProfile");
const btnLogout = document.getElementById("btnLogout");
const btnLogin = document.getElementById("btnLogin");


// FUNCOES
const promoGames = games.filter(
  (element) => element.promoPrice < element.originalPrice
);

const recomendedGames = games.filter(
  (element) => element.rating > 8
);

// Eventos
btnAction.addEventListener("click", () => {
  window.location.href = `/src/pages/game-category/index.html?category=${btnAction.name}`;
});

btnSimulation.addEventListener("click", () => {
  window.location.href = `/src/pages/game-category/index.html?category=${btnSimulation.name}`;
});

btnMmorpg.addEventListener("click", () => {
  window.location.href = `/src/pages/game-category/index.html?category=${btnMmorpg.name}`;
});

btnSports.addEventListener("click", () => {
  window.location.href = `/src/pages/game-category/index.html?category=${btnSports.name}`;
});

btnFight.addEventListener("click", () => {
  window.location.href = `/src/pages/game-category/index.html?category=${btnFight.name}`;
});

btnSearch.addEventListener("click", () => {
  window.location.href = `/src/pages/search/search.html?search=${inputSearch.value}`;
});

btnLogout.addEventListener("click", () => {
  localStorage.removeItem("id_user");
  window.location.href = '/index.html';
});

window.addEventListener("load", () => {
  createNewGame(promoGames, divPromoGames);
  createNewGame(recomendedGames, divRecommended);

  createCardEventListener();

  if(hasIdUser()) {
    btnLogin.classList.add("hidden");
  } else {
    btnProfile.classList.add("hidden")
    btnLogout.classList.add("hidden")
  }
});
