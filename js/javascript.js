document.querySelector(".menu").addEventListener("click", function (e) {
  e.preventDefault();
  window.location.href = "index.htnl";
});

document.querySelector(".salir").addEventListener("click", function (e) {
  e.preventDefault();
  window.location.href = "salir.html";
});

document.querySelector(".menu__salir").addEventListener("click", function (e) {
  e.preventDefault();
  window.location.href = "/index.htnl";
});

document.querySelector(".brinco").addEventListener("click", function (e) {
  e.preventDefault();
  window.location.href = "/components/brinco.html";
});

document.querySelector(".quini").addEventListener("click", function (e) {
  e.preventDefault();
  window.location.href = "/components/quini.html";
});

document.querySelector(".menu__brinco").addEventListener("click", function (e) {
  e.preventDefault();
  window.location.href = "/index.htnl";
});

document
  .querySelector(".salir__brinco")
  .addEventListener("click", function (e) {
    e.preventDefault();
    window.location.href = "/salir.html";
  });

document.querySelector(".menu__quini").addEventListener("click", function (e) {
  e.preventDefault();
  window.location.href = "/index.htnl";
});

document.querySelector(".salir__quini").addEventListener("click", function (e) {
  e.preventDefault();
  window.location.href = "/salir.html";
});

/*
// funcion que permite cargar solo numeros
$(function () {
  $(".validar").keydown(function (event) {
    //alert(event.keyCode);
    if (
      (event.keyCode < 48 || event.keyCode > 57) &&
      (event.keyCode < 96 || event.keyCode > 105) &&
      event.keyCode !== 190 &&
      event.keyCode !== 110 &&
      event.keyCode !== 8 &&
      event.keyCode !== 9
    ) {
      return false;
    }
  });
});
*/