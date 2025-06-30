import { games } from "./data/games.js";
import { createNewGame } from "./scripts/createNewGames.js";

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
});
