import { games } from "./data/games.js";

// SELETORES
const divRecommended = document.getElementById("recommended");
const divPromoGames = document.getElementById("promo-games");
const btnAction = document.getElementById("btn-action");
const btnSimulation = document.getElementById("btn-simulation");

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

window.addEventListener("load", () => {
  promoGames.forEach((element, index) => {
    divPromoGames.innerHTML += `
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
  });
});
