import { games } from "../../data/games.js";
import { hasIdUser } from "../../scripts/hasIdUser.js";

const btnSearch = document.getElementById("btnSearch");
const gameContent = document.getElementById("gameContent");
const btnProfile = document.getElementById("btnProfile");
const btnLogout = document.getElementById("btnLogout");
const btnLogin = document.getElementById("btnLogin");
const galeryImgs = document.getElementById("galery-imgs");


btnSearch.addEventListener("click", () => {
  window.location.href = `/src/pages/search/search.html?search=${inputSearch.value}`;
});

btnLogout.addEventListener("click", () => {
  localStorage.removeItem("id_user");
  window.location.href = "/index.html";
});

window.addEventListener("load", () => {
  const url = new URL(window.location.href);
  const id = url.searchParams.get("id");
  const newGames = games.filter((e) => e.id == id);
  const game = newGames[0];

  if (hasIdUser()) {
    btnProfile.style.display = "flex";
    btnLogout.style.display = "flex";
    btnLogin.classList.add("hidden");
  } else {
    btnProfile.classList.add("hidden");
    btnLogout.classList.add("hidden");
    btnLogin.style.display = "flex";
  }

  gameContent.innerHTML += `
    <h1 class="container">${game.name}</h1>
    <div class="container d-flex">
      <div class="row d-flex align-items-start">
        <img id="img-current" class="col-md" src="${game.thumb}" alt="${game.name}">
        <div class="col-md d-flex flex-column justify-content-between">
          <p>${game.description}</p>
          <p>Avaliação: ${game.rating}</p>
          <p>${game.promoPrice.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}</p>
          <button id="btnAddToCart" class="btn btn-primary">Adicionar Ao Carrinho</button>
        </div>
      </div>
    </div>`;

  game.photos.forEach(el => {
    galeryImgs.innerHTML += `
      <div>
        <img src="${el}" class="img-gallery"/>
      </div>
    `
  });

  const imgGallery = document.querySelectorAll(".img-gallery");
  imgGallery.forEach(e => {
    e.addEventListener("click", () => {
      document.getElementById("img-current").src = `${e.src}`
    })
  })

  const btnAddToCart = document.getElementById("btnAddToCart");

  btnAddToCart.addEventListener("click", () => {
    const url = new URL(window.location.href);
    const id = url.searchParams.get("id");
    const username = localStorage.getItem("username");

    const chave = "games";

    if (localStorage.getItem(chave) == null) {
      let gamesObjeto = {};
      let gamesJSON = JSON.stringify(gamesObjeto);
      localStorage.setItem("games", gamesJSON);
    }
    
    // resgata item games e converte em objeto
    let games = localStorage.getItem(chave);
    let gamesObjeto = JSON.parse(games);

  // adiciona chave username e array vazio
    if (!gamesObjeto.hasOwnProperty(username)) {
      gamesObjeto[username] = [parseInt(id)];
    }
    gamesObjeto[username].push(parseInt(id));
    gamesObjeto[username] = [...new Set(gamesObjeto[username])];
    let gamesJSON = JSON.stringify(gamesObjeto);
    localStorage.setItem("games", gamesJSON);

    console.log("Adicionado ao carrinho")

  });
});
