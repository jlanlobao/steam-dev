import { games } from "../../data/games.js";
import { createNewGame } from "../../scripts/createNewGames.js";
import { createCardEventListener } from "../../scripts/createCardEventListener.js";
import { hasIdUser } from "../../scripts/hasIdUser.js";

const divNewGame = document.getElementById("new-games");
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


window.addEventListener("load", () => {
  const url = new URL(window.location.href);
  const category = url.searchParams.get("category");
  const newGames = games.filter((e) => e.category.includes(category));
  console.log(newGames);

  if(hasIdUser()) {
    btnProfile.style.display = "flex";
    btnLogout.style.display = "flex";
    btnLogin.classList.add("hidden")
  } else {
    btnProfile.classList.add("hidden")
    btnLogout.classList.add("hidden")
    btnLogin.style.display = "flex";
  }

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

  btnLogout.addEventListener("click", () => {
    localStorage.removeItem("id_user");
    window.location.href = '/index.html';
  });

  //Titulo
  const newTitle = document.createElement("h2");
  newTitle.textContent = `${category}`;
  divNewGame.appendChild(newTitle);

  btnSearch.addEventListener("click", () => {
  window.location.href = `/src/pages/search/search.html?search=${inputSearch.value}`;

});

  // CRIAR ELEMENTOS A PARTIR DE NEW GAMES
  createNewGame(newGames, divNewGame);
  
  createCardEventListener();
});
