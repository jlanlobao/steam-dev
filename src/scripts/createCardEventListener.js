export function createCardEventListener(itemsList){
    let cardList = document.querySelectorAll('.game-card');

    function redirect() {
        window.location.href = `/src/pages/game/game.html?id=${this.dataset.idGame}`;
    }

    cardList.forEach ((card) => {
        card.addEventListener("click", redirect);
    })
}