import { games } from "./data/games.js";

// SELETORES
const divRecommended = document.getElementById("recommended");
//*****
const divPromoGames = document.getElementById("promo-games");
const btnAction = document.getElementById("btn-action");
const divCarouselInner = document.getElementById("carousel-inner");

// FUNCOES


// A PARTIR DA BASE DE DADOS CRIAR UM NOVO ARRAY APENAS COM OS JOGOS QUE SAO PROMOCAO
// DICA => FILTER
//*****
const createPromoGames = games.filter(element => (element.promoPrice < element.originalPrice))
  
// Eventos
btnAction.addEventListener("click", () => {
  window.location.href = "src/pages/game-category";
});

window.addEventListener("load", () => {

  //CRIA OS ELEMENTOS DO CAROUSEL 
  games.forEach((element, index) => {
    const divCarouselItem = document.createElement("div");

    index===0
      ? divCarouselItem.classList.add("carousel-item", "active")
      : divCarouselItem.classList.add("carousel-item")
    
    divCarouselItem.innerHTML += `
      <img src="${element.thumb}" class="d-block w-100" alt="${element.name}">
      <div class="carousel-caption d-none d-md-block">
        <h5>${element.name}</h5>
        <p>R$ ${
          element.originalPrice > element.promoPrice
            ? element.promoPrice.toFixed(2)
            : element.originalPrice.toFixed(2)
        }</p>
      </div>`

    divCarouselInner.appendChild(divCarouselItem)
  })

  //*****PROMOÇAO
  createPromoGames.forEach((element, index) => {
    divPromoGames.innerHTML += `
            <div class="col-lg-4">
                <h4>${element.name}</h4>
                <img src="${element.thumb}" />
                <p>R$ ${element.promoPrice.toFixed(2)}</p>
            </div>
        `;
  });

  games.forEach((element, index) => {
    divRecommended.innerHTML += `
            <div class="col-lg-4">
                <h4>${element.name}</h4>
                <img src="${element.thumb}" />
                <p>R$ ${
                  element.originalPrice > element.promoPrice
                    ? element.promoPrice.toFixed(2)
                    : element.originalPrice.toFixed(2)
                }</p>
            </div>
        `;
  });

});



/*
  games.forEach((element, index) => {
    divCarouselInner.innerHTML += `
      <div class=${index===0
            ? "carousel-item active"
            : "carousel-item"
      }>
        <img src="${element.thumb}" class="d-block w-100" alt="${element.name}">
          <div class="carousel-caption d-none d-md-block">
            <h5>${element.name}</h5>
            <p>R$ ${
              element.originalPrice > element.promoPrice
                ? element.promoPrice.toFixed(2)
                : element.originalPrice.toFixed(2)
            }</p>
          </div>
      </div>
      `;
  });
*/

