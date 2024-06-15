const textSection = document.querySelector('.text-section');
const transition = document.querySelector('.transition');

// Réinitialise les propriétés des éléments animés
function resetAnimations() {
  gsap.set(textSection, { clearProps: 'all' });
  gsap.set(transition, { clearProps: 'all' });
}

// Démarre les animations
function startAnimations() {
  // Assurez-vous que les timelines ne se chevauchent pas
  const tl = gsap.timeline({
    onComplete: function() {
      textSection.style.visibility = 'visible';
      textSection.style.mixBlendMode = 'difference';
    }
  });

  if (window.innerWidth > 768) {
    tl.from('.text-section', { duration: 1, x: window.innerWidth, ease: 'power2.out' }, 1.2);
  }

  tl.from('.transition', { duration: 1.2, scaleY: -1, y: -window.innerHeight, transformOrigin: 'bottom', ease: 'power4.inOut' }, 0.5);
}

// Gère la transition de page avec animation
function goToPage(url) {
  gsap.to('.transition', {
    duration: 1,
    scaleY: 1,
    transformOrigin: 'bottom',
    ease: 'power4.inOut',
    onComplete: () => {
      window.location.href = url;
    }
  });
}

// Gère la transition de page avec animation et ajoute un état de navigation
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

// Initialise les animations au chargement de la page
document.addEventListener('DOMContentLoaded', function() {
  startAnimations();
});

// Réinitialise et relance les animations lorsque la page est restaurée depuis le cache
window.addEventListener('pageshow', function(event) {
  if (event.persisted) {
    resetAnimations(); // Réinitialise les propriétés
    startAnimations(); // Relance les animations
  }
});

// Réinitialise et relance les animations lors du retour en arrière du navigateur
window.addEventListener('popstate', function(event) {
  if (event.state && event.state.isBack) {
    resetAnimations(); // Réinitialise les propriétés
    startAnimations(); // Relance les animations
  }
});

// Ajoute des écouteurs d'événements aux liens pour gérer les transitions de page
document.querySelectorAll('.logo a, .menu a, .thanks a.next-project').forEach(link => {
  link.addEventListener('click', function(event) {
    event.preventDefault(); // Empêche le comportement par défaut du lien
    const url = this.getAttribute('href'); // Récupère le lien
    goToPageWithState(url); // Déclenche la transition de page avec état de navigation
  });
});
