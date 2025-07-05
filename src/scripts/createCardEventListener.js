export function createCardEventListener(){
    let cardList = document.querySelectorAll('.game-card');

    function redirect() {
        window.location.href = `/steam-dev/src/pages/game/game.html?id=${this.dataset.idGame}`;
    }

    cardList.forEach ((card) => {
        card.addEventListener("click", redirect);
    })
}