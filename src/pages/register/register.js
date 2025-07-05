const btnSearch = document.getElementById("btnSearch");

btnSearch.addEventListener("click", () => {
  window.location.href = `/steam-dev/src/pages/search/search.html?search=${inputSearch.value}`;
});
