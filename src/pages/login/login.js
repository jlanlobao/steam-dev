const btnSearch = document.getElementById("btnSearch");
const inputSearch = document.getElementById("inputSearch");

btnSearch.addEventListener("click", () => {
  window.location.href = `/steam-dev/src/pages/search/search.html?search=${inputSearch.value}`;
});