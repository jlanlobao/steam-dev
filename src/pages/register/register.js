import { hasIdUser } from "/steam-dev/src/scripts/hasIdUser.js";

const btnSearch = document.getElementById("btnSearch");

btnSearch.addEventListener("click", () => {
  window.location.href = `/steam-dev/src/pages/search/search.html?search=${inputSearch.value}`;
});

window.addEventListener("load", ()=> {
  if(hasIdUser()) {
    window.location.href = '/steam-dev/index.html'
  }
})