import { hasIdUser } from "../../scripts/hasIdUser.js";

window.addEventListener("load", ()=> {
  if(!hasIdUser()) {
    window.location.href = '/index.html'
  } else {
    btnLogin.className += " hidden";
  }
})