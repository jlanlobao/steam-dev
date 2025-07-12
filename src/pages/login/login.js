import { hasIdUser } from "../../scripts/hasIdUser.js";

const btnSearch = document.getElementById("btnSearch");
const inputSearch = document.getElementById("inputSearch");
const inputUserName = document.getElementById("userName");
// inputpassword
const btnSubmit = document.getElementById("btnSubmit");

btnSearch.addEventListener("click", () => {
  window.location.href = `/steam-dev/src/pages/search/search.html?search=${inputSearch.value}`;
});



btnSubmit.addEventListener("click", async (event) => {
  event.preventDefault();

  const crendentials = {username: "", password: ""}

  const userName = inputUserName.value;

  crendentials.username = userName;

  console.log(crendentials)
  alert(userName)
})


window.addEventListener("load", ()=> {
  if(hasIdUser()) {
    window.location.href = '/steam-dev/index.html'
  }
})