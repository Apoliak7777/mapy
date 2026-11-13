"use strict";
// Rok v pätičke. Nič iné web nepotrebuje: žiadne cookies, merania ani skripty tretích strán.
document.querySelectorAll("[data-year]").forEach(function (el) {
  el.textContent = String(new Date().getFullYear());
});

// Odpočet do dátumu v data-odpocet (e-faktúry od 1. 1. 2027). Po dátume ostane pôvodný text zo stránky.
document.querySelectorAll("[data-odpocet]").forEach(function (el) {
  var ciel = new Date(el.getAttribute("data-odpocet") + "T00:00:00");
  var dni = Math.ceil((ciel - new Date()) / 86400000);
  if (!(dni > 0)) return;
  var slovo = dni === 1 ? "deň" : (dni <= 4 ? "dni" : "dní");
  var sloveso = dni >= 2 && dni <= 4 ? "zostávajú" : "zostáva";
  el.textContent = "Do povinných e-faktúr " + sloveso + " " + dni + " " + slovo;
});
