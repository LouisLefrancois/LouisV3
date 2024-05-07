window.addEventListener('scroll', function() {
    var scrollDown = document.getElementById("scroll-down");
    scrollDown.style.opacity = "0"; 
    scrollDown.style.transition = "opacity 1s";
  
    var scrollPosition = window.scrollY; 
  
    // Récupérer la hauteur totale de la page
    var windowHeight = document.documentElement.scrollHeight - window.innerHeight;
  
    // Calculer la position de la barre de défilement en pourcentage
    var scrollPercentage = (scrollPosition / windowHeight) * 100;
  
    // Sélectionner la barre de défilement
    var scrollBar = document.querySelector('.scroll-bar');
  
    // Définir la position de la barre de défilement
    scrollBar.style.height = scrollPercentage + '%';
  });