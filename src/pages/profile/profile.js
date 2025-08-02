import { games } from "../../data/games.js";
import { hasIdUser } from "../../scripts/hasIdUser.js";

const rightContainer = document.getElementById('right-container');


window.addEventListener("load", ()=> {
  if(!hasIdUser()) {
    window.location.href = '/index.html'
  } else {
    btnLogin.classList.add("hidden")
  }

  const username = localStorage.getItem("username");
  let cartGames = localStorage.getItem("games");
  cartGames = JSON.parse(cartGames);
  const userCartIds = cartGames[username];
  let sum = 0;

  const userCartGames = games.filter((e) => userCartIds.includes(e.id));
  userCartGames.forEach((e) => sum += e.promoPrice);
  console.log(sum);


  console.log(userCartGames);

  userCartGames.forEach((game) => {
    rightContainer.innerHTML += `
      <div class="row d-flex align-items-start py-2">
        <img id="img-current" class="col-md-4" src="${game.thumb}" alt="${game.name}">
        <div class="col-md-6">
          <h3>${game.name}</h3>
          <p>${game.promoPrice.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
          })}</p>
        </div>
      </div>
      `;
  })

  rightContainer.innerHTML += `
    <div class="col-md-6">
      <h3>Total</h3>
      <p>${sum.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
      })}</p>
    </div>`
})



