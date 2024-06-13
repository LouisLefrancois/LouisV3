const fullcontainer = document.querySelectorAll('.full-container');
const navbar = document.querySelector('.navbar');
const scrolldowntxt = document.querySelector('.scroll-down');
const buttondarkmode = document.querySelector('.buttondarkmode');

function resetAnimations() {
  // Réinitialiser les propriétés des éléments animés
  gsap.set(fullcontainer, { clearProps: "all" });
  gsap.set(navbar, { clearProps: "all" });
  gsap.set(scrolldowntxt, { clearProps: "all" });
  gsap.set(buttondarkmode, { clearProps: "all" });
}

function startAnimations() {
  const TL = gsap.timeline({
    onComplete: function () {
      fullcontainer.forEach(container => {
        container.style.visibility = 'visible';
      });
    }
  });

  TL
    .from(navbar, .2, { top: 10, opacity: 0 }, .5) // durée d'exec, sec avant exec
    .from(fullcontainer, .75, { opacity: 0 }, 1)
    .from(scrolldowntxt, .75, { opacity: 0 }, 1.5)
    .from(buttondarkmode, .75, { opacity: 0 }, 1.5);

  if (window.innerWidth > 768) {
    TL.from('.text-section', { duration: 1, x: window.innerWidth, ease: 'power2.out' }, 1.2);
  }

  TL.from('.transition', { duration: 1.2, scaleY: -1, y: -window.innerHeight, transformOrigin: 'bottom', ease: 'power4.inOut' }, .5);
}

window.addEventListener('load', () => {
  startAnimations();
});

document.addEventListener('DOMContentLoaded', function () {
  startAnimations();
});

window.addEventListener('pageshow', function(event) {
  if (event.persisted) {
    // La page a été restaurée depuis le cache
    resetAnimations(); // Réinitialiser les propriétés avant de relancer les animations
    startAnimations();
  }
});

function goToPage(url) {
  gsap.to('.full-container, .scroll-down', {
    duration: .75,
    x: -window.innerWidth,
    opacity: 1,
    ease: 'power2.inOut',
    onComplete: () => {
      window.location.href = url;
    }
  });
}

// Fonction pour ajouter l'état de navigation
function goToPageWithState(url) {
  gsap.to('.transition', {
    duration: 1,
    scaleY: 1,
    transformOrigin: 'bottom',
    ease: 'power4.inOut',
    onComplete: () => {
      history.pushState({ isBack: true }, '', ''); // Ajoute un état de navigation
      window.location.href = url;
    }
  });
}

document.querySelectorAll('.menu a, .full-container a').forEach(link => {
  link.addEventListener('click', function(event) {
    event.preventDefault(); // empêche le comportement par défaut du lien
    const url = this.getAttribute('href'); // récupère lien
    goToPageWithState(url); // déclenche la transition de page avec état de navigation
  });
});

// Écouteur d'événement pour détecter le retour en arrière du navigateur
window.addEventListener('popstate', function(event) {
  // Vérifie si l'événement popstate est déclenché par un retour en arrière du navigateur
  if (event.state && event.state.isBack) {
    resetAnimations(); // Réinitialiser les propriétés avant de relancer les animations
    startAnimations(); // Redémarre les animations lors du retour en arrière
  }
});
