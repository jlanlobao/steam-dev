import { games } from "../../data/games.js";

const btnSearch = document.getElementById("btnSearch");
const gameContent = document.getElementById("gameContent");
const btnProfile = document.getElementById("btnProfile");
const btnLogout = document.getElementById("btnLogout");
const btnLogin = document.getElementById("btnLogin");
import { hasIdUser } from "../../scripts/hasIdUser.js";

btnSearch.addEventListener("click", () => {
  window.location.href = `/src/pages/search/search.html?search=${inputSearch.value}`;
});

btnLogout.addEventListener("click", () => {
  localStorage.removeItem("id_user");
  window.location.href = '/index.html';
});

window.addEventListener("load", () => {
  const url = new URL(window.location.href);
  const id = url.searchParams.get("id");
  const newGames = games.filter((e) => e.id == id);
  const game = newGames[0];

  gameContent.innerHTML += `
    <h1 class="container">${game.name}</h1>
    <div class="container d-flex">
      <div class="row d-flex align-items-start">
        <img class="col-md" src="${game.thumb}" alt="${game.name}">

          <div class="col-md d-flex flex-column justify-content-between">
            <p>${game.description}</p>
            <p>Avaliação: ${game.rating}</p>
            <p>${game.promoPrice.toLocaleString('pt-BR', {
              style: 'currency',
              currency: 'BRL'
            })}</p>
            <button id="btnAddToCart" class="btn btn-primary">Adicionar Ao Carrinho</button>
   
        </div>
      </div>
        
    </div>
`;

if(hasIdUser()) {
    btnProfile.style.display = "flex";
    btnLogout.style.display = "flex";
    btnLogin.className += " hidden";
  } else {
    btnProfile.className += " hidden";
    btnLogout.className += " hidden";
    btnLogin.style.display = "flex";
  }
  
})