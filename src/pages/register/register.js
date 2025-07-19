import { hasIdUser } from "/src/scripts/hasIdUser.js";

const btnSearch = document.getElementById("btnSearch");
const btnSubmit = document.getElementById("btnSubmit");

async function newUser() {
  const inputUser = document.getElementById("inputUser");
  const user = inputUser.value;
  const inputEmail = document.getElementById("inputEmail");
  const email = inputEmail.value;
  const inputPassword = document.getElementById("inputPassword");
  const password = inputPassword.value;

  postNewUser(user, email, password);
}

async function postNewUser(user, email, password) {
  const newUser = { username: user, email: email, password: password };
  console.log(newUser)
  const url = 'https://fakestoreapi.com/users'

  const req = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(newUser)
  })

  const res = await req.json();
  console.log(res);
}

window.addEventListener("load", ()=> {
  if(hasIdUser()) {
    window.location.href = '/index.html'
  }
})

btnSearch.addEventListener("click", () => {
  window.location.href = `/src/pages/search/search.html?search=${inputSearch.value}`;
});

btnSubmit.addEventListener("click", () => {
  event.preventDefault();
  newUser();
});