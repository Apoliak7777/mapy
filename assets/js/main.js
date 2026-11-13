"use strict";
// Rok v pätičke. Nič iné web nepotrebuje: žiadne cookies, merania ani skripty tretích strán.
document.querySelectorAll("[data-year]").forEach(function (el) {
  el.textContent = String(new Date().getFullYear());
});
