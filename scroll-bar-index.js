window.addEventListener('scroll', function() {
    var scrollDown = document.getElementById("scroll-down");

    scrollDown.style.opacity = "0"; 
    scrollDown.style.transition = "opacity 1s";
  
    var scrollPosition = window.scrollY; // scrollPosition = pos fenêtre
    var windowHeight = document.documentElement.scrollHeight - window.innerHeight; // windowHeight = hauteur totale de la page moins la hauteur de la fenêtre visible
    var scrollPercentage = (scrollPosition / windowHeight) * 100; // calcul le % de défilement : divise la pos du scroll actuel par la hauteur totale de la page, et en multipliant par 100 (pour %)

    var scrollBar = document.querySelector('.scroll-bar');

    scrollBar.style.height = scrollPercentage + '%'; // définir la hauteur du scroll en %
  });