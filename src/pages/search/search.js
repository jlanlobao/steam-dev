import { games } from "../../data/games.js";
import { createNewGame } from "../../scripts/createNewGames.js";
import { createCardEventListener } from "../../scripts/createCardEventListener.js";
import { hasIdUser } from "../../scripts/hasIdUser.js";

const gamesContainer = document.getElementById("gamesContainer");
const btnSearch = document.getElementById("btnSearch");
const inputSearch = document.getElementById("inputSearch");
const btnProfile = document.getElementById("btnProfile");
const btnLogout = document.getElementById("btnLogout");
const btnLogin = document.getElementById("btnLogin");

btnSearch.addEventListener("click", () => {
  window.location.href = `/src/pages/search/search.html?search=${inputSearch.value}`;
});

window.addEventListener("load", () => {
  const url = new URL(window.location.href);
  const search = url.searchParams.get("search");
  const newGames = games.filter((e) => e.name.toLowerCase().includes(search.toLowerCase()));

  if(hasIdUser()) {
    btnLogin.classList.add("hidden");
    console.log("oi")
  } else {
    btnProfile.classList.add("hidden")
    btnLogout.classList.add("hidden")
  }
  
  const newTitle = document.createElement("h4");
  newTitle.textContent = `Buscando por "${search}"`;
  gamesContainer.appendChild(newTitle);

  createNewGame(newGames, gamesContainer);
  createCardEventListener();
});

