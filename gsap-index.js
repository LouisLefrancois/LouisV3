const fullcontainer = document.querySelector('.full-container');
const navbar = document.querySelector('.navbar');
const scrolldowntxt = document.querySelector('.scroll-down');
const buttondarkmode = document.querySelector('.buttondarkmode');

function startAnimations() {
  const TL = gsap.timeline({ paused: true });

  TL
    .from(navbar, { duration: 0.2, top: 10, opacity: 0 }, 0.5)
    .from(fullcontainer, { duration: 0.75, opacity: 0 }, 1)
    .from(scrolldowntxt, { duration: 0.75, opacity: 0 }, 1.5)
    .from(buttondarkmode, { duration: 0.75, opacity: 0 }, 1.5);

  TL.play();
}

document.addEventListener('DOMContentLoaded', function() {
  startAnimations();
});

window.addEventListener('pageshow', function(event) {
  if (event.persisted) {
    // La page a été restaurée depuis le cache
    startAnimations();
  }
});

function goToPage(url) {
  gsap.to('.full-container, .scroll-down, .buttondarkmode', {
    duration: 0.75,
    x: -window.innerWidth,
    opacity: 0,
    ease: 'power2.inOut',
    onComplete: () => {
      window.location.href = url;
    }
  });
}

document.querySelectorAll('.menu a, .full-container a').forEach(link => {
  link.addEventListener('click', function(event) {
    event.preventDefault(); // empêche le comportement par défaut du lien
    const url = this.getAttribute('href'); // récupère lien
    goToPage(url); // déclenche la transition de page
  });
});

// Écouteur d'événement pour détecter le retour en arrière du navigateur
window.addEventListener('popstate', function(event) {
  // Vérifie si l'événement popstate est déclenché par un retour en arrière du navigateur
  if (event.state && event.state.isBack) {
    startAnimations(); // Redémarre les animations lors du retour en arrière
  }
});

// Fonction pour ajouter l'état de navigation
function goToPageWithState(url) {
  gsap.to('.full-container, .scroll-down, .buttondarkmode', {
    duration: 0.75,
    x: -window.innerWidth,
    opacity: 0,
    ease: 'power2.inOut',
    onComplete: () => {
      history.pushState({ isBack: true }, '', ''); // Ajoute un état de navigation
      window.location.href = url;
    }
  });
}

// Mise à jour des écouteurs d'événements avec la nouvelle fonction goToPageWithState
document.querySelectorAll('.menu a, .full-container a').forEach(link => {
  link.addEventListener('click', function(event) {
    event.preventDefault(); // empêche le comportement par défaut du lien
    const url = this.getAttribute('href'); // récupère le lien
    goToPageWithState(url); // déclenche la transition de page avec état de navigation
  });
});
