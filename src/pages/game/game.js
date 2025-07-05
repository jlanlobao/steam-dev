import { games } from "../../data/games.js";

const btnSearch = document.getElementById("btnSearch");

btnSearch.addEventListener("click", () => {
  window.location.href = `/steam-dev/src/pages/search/search.html?search=${inputSearch.value}`;
});

window.addEventListener("load", () => {
    const url = new URL(window.location.href);
      const id = url.searchParams.get("id");
      const newGames = games.filter((e) => e.id == id)
      console.log(newGames)
})