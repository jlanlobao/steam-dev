export function createNewGame(gamesList, gamesContainer){
  gamesList.forEach((element) => {
    gamesContainer.innerHTML += `
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
}