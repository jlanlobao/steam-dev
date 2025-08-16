import { hasIdUser } from "../../scripts/hasIdUser.js";

const btnSearch = document.getElementById("btnSearch");
const inputSearch = document.getElementById("inputSearch");
const btnSubmit = document.getElementById("btnSubmit");
const errorAlert = document.getElementById("errorAlert");

async function login() {
  const inputUser = document.getElementById("inputUser")
  const username = inputUser.value
  const inputPassword = document.getElementById("inputPassword")
  const password = inputPassword.value

  postLogin(username, password);
}

async function postLogin(username, password) {
  const url = "https://fakestoreapi.com/auth/login";
  const credentials = { username, password };

  try {
    const req = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(credentials)
    });

    if (!req.ok) {
      //logica card erro
      errorAlert.classList.remove("hidden");
      throw new Error('Usuário ou senha incorretos');
    }

    const res = await req.json();
    console.log(res);
    console.log(res.token);

    localStorage.setItem('id_user', res.token);
    localStorage.setItem('username', username);
    window.location.href = '/index.html';
  
  } catch (error) {
    console.error('Erro no login:', error.message);
  }
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
  login();
});