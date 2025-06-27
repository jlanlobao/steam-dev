import { games } from "../../data/games.js";

const divNewGame = document.getElementById("new-games");

window.addEventListener("load", () => {
  const url = new URL(window.location.href);
  const category = url.searchParams.get("category");

  const newGames = games.filter((e) => e.category.includes(category));
  console.log(newGames);

  // CRIAR ELEMENTOS A PARTIR DE NEW GAMES
  newGames.forEach((element) => {
    divNewGame.innerHTML += `
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
