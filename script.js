let email = document.getElementById("input#email");
let senha = document.getElementById("input#senha");

function entrar() {
  let email = document.querySelector("input#email");
  let senha = document.querySelector("input#senha");

  if (email.value == "") {
    alert("E-mail não informado!");
    email.focus();
    return;
  }
  if (senha.value == "") {
    alert("Favor, insira sua senha!");
    senha.focus();
    return;
  }
  alert("SEJA BEM VINDO!");
}