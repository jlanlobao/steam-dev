import { games } from "../../data/games.js";
import { createNewGame } from "../../scripts/createNewGames.js";

const divNewGame = document.getElementById("new-games");
const divPromoGames = document.getElementById("promo-games");
const btnAction = document.getElementById("btn-action");
const btnSimulation = document.getElementById("btn-simulation");
const btnMmorpg = document.getElementById("btn-mmorpg");
const btnSports = document.getElementById("btn-sports");
const btnFight = document.getElementById("btn-fight");


window.addEventListener("load", () => {
  const url = new URL(window.location.href);
  const category = url.searchParams.get("category");
  const newGames = games.filter((e) => e.category.includes(category));
  console.log(newGames);

btnAction.addEventListener("click", () => {
  window.location.href = `/steam-dev/src/pages/game-category/index.html?category=${btnAction.name}`;
});

btnSimulation.addEventListener("click", () => {
  window.location.href = `/steam-dev/src/pages/game-category/index.html?category=${btnSimulation.name}`;
});

btnMmorpg.addEventListener("click", () => {
  window.location.href = `/steam-dev/src/pages/game-category/index.html?category=${btnMmorpg.name}`;
});

btnSports.addEventListener("click", () => {
  window.location.href = `/steam-dev/src/pages/game-category/index.html?category=${btnSports.name}`;
});

btnFight.addEventListener("click", () => {
  window.location.href = `/steam-dev/src/pages/game-category/index.html?category=${btnFight.name}`;
});

window.addEventListener("load", () => {
  createNewGame(promoGames, divPromoGames);
  createNewGame(recomendedGames, divRecommended);
});

  //Titulo
  const newTitle = document.createElement("h2");
  newTitle.textContent = `${category}`;
  divNewGame.appendChild(newTitle);

  // CRIAR ELEMENTOS A PARTIR DE NEW GAMES
  createNewGame(newGames, divNewGame);

});
