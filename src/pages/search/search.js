import { games } from "../../data/games.js";
import { createNewGame } from "../../scripts/createNewGames.js";

const mainContainer = document.getElementById("mainContainer");
const gamesContainer = document.getElementById("gamesContainer");
const btnSearch = document.getElementById("btnSearch");
const inputSearch = document.getElementById("inputSearch");

btnSearch.addEventListener("click", () => {
  window.location.href = `/steam-dev/src/pages/search/search.html?search=${inputSearch.value}`;
});

window.addEventListener("load", () => {
  const url = new URL(window.location.href);
  const search = url.searchParams.get("search");
  console.log(search);
  const newGames = games.filter((e) => e.name.toLowerCase().includes(search.toLowerCase()));
  
  const newTitle = document.createElement("h4");
  newTitle.textContent = `Buscando por "${search}"`;
  gamesContainer.appendChild(newTitle);

  createNewGame(newGames, gamesContainer);
});

