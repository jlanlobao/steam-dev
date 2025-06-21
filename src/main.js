import { games } from "./data/games.js";

// SELETORES
const divRecommended = document.getElementById("recommended");
const divPromoGames = document.getElementById("promo-games");
const btnAction = document.getElementById("btn-action");
const btnSimulation = document.getElementById("btn-simulation");

// FUNCOES
const createPromoGames = games.filter(
  (element) => element.promoPrice < element.originalPrice
);

// Eventos
btnAction.addEventListener("click", () => {
  window.location.href = `src/pages/game-category/index.html?category=${btnAction.name}`;
});

btnSimulation.addEventListener("click", () => {
  window.location.href = `src/pages/game-category/index.html?category=${btnSimulation.name}`;
});

window.addEventListener("load", () => {
  createPromoGames.forEach((element, index) => {
    divPromoGames.innerHTML += `
            <div class="col-lg-4">
                <h4>${element.name}</h4>
                <img src="${element.thumb}" />
                <p>${element.promoPrice.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}</p>
            </div>
        `;
  });

  games.forEach((element, index) => {
    divRecommended.innerHTML += `
            <div class="col-lg-4">
                <h4>${element.name}</h4>
                <img src="${element.thumb}" />
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
