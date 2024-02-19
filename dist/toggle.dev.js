"use strict";

var menuToggle = document.querySelector(".toggle");

menuToggle.onclick = function () {
  menuToggle.classList.toggle('active');
};

var toggler = document.querySelector(".hamburger");
var navLinksContainer = document.querySelector(".navbar-collapse");

var toggleNav = function toggleNav(e) {
  // Animation du bouton
  toggler.classList.toggle("open");
  var ariaToggle = toggler.getAttribute("aria-expanded") === "true" ? "false" : "true";
  toggler.setAttribute("aria-expanded", ariaToggle); // Slide de la navigation

  navLinksContainer.classList.toggle("open");
};

new ResizeObserver(function (entries) {
  if (entries[0].contentRect.width <= 900) {
    navLinksContainer.style.transition = "transform 0.4s ease-out";
  } else {
    navLinksContainer.style.transition = "none";
  }
}).observe(document.body);