window.addEventListener("scroll", function () {
  var scrollPosition = window.scrollY;

  // récupère hauteur totale de la page
  var windowHeight = document.documentElement.scrollHeight - window.innerHeight;

  // calcul le % de défilement : divise la pos du scroll actuel par la hauteur totale de la page, et en multipliant par 100 (pour %)
  var scrollPercentage = (scrollPosition / windowHeight) * 100;

  var scrollBar = document.querySelector(".scroll-bar");

  // définir la hauteur du scroll en %
  scrollBar.style.height = scrollPercentage + "%";
});
