export function createNewGame(gamesList, gamesContainer){
  gamesList.forEach((element) => {
    gamesContainer.innerHTML += `
            <div class="game-card col-lg-4" data-id-game="${element.id}">
                <img src="${element.thumb}" class="rounded" />
                <h4>${element.name}</h4>
                <p>${element.promoPrice.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}</p>
            </div>
        `;
  });
}