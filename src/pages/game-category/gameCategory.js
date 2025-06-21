import { games } from "../../data/games.js";

window.addEventListener("load", () => {
  const url = new URL(window.location.href);
  const category = url.searchParams.get("category");

  const newGames = games.filter((e) => e.category.includes(category));
  console.log(newGames);

  // CRIAR ELEMENTOS A PARTIR DE NEW GAMES
});
