const firstline = document.querySelector('.first-line');
const secondline = document.querySelector('.second-line');

function startAnimations() {
  gsap.timeline({
    onComplete: function() {
      firstline.style.visibility = 'visible';
      secondline.style.visibility = 'visible';
    }
  });

  gsap.set('.first-section', {});

  gsap.timeline().from('.first-section', {})
    .from('.first-line', { duration: 1.1, x: window.innerWidth, ease: 'power2.out' }, 0)
    .from('.second-line', { duration: 1.4, x: window.innerWidth, ease: 'power2.out' }, 0);
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
  gsap.to('.first-line', { duration: 1, x: window.innerWidth, ease: 'power2.inOut'}, );
  gsap.to('.second-line', { duration: 1.2, x: window.innerWidth, ease: 'power2.inOut', onComplete: () => {
    window.location.href = url;
  }});
}

document.querySelectorAll('.menu a').forEach(link => {
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
  gsap.to('.first-line', { duration: 1, x: window.innerWidth, ease: 'power2.inOut'}, );
  gsap.to('.second-line', { duration: 1.2, x: window.innerWidth, ease: 'power2.inOut', onComplete: () => {
    history.pushState({ isBack: true }, '', ''); // Ajoute un état de navigation
    window.location.href = url;
  }});
}

// Mise à jour des écouteurs d'événements avec la nouvelle fonction goToPageWithState
document.querySelectorAll('.menu a').forEach(link => {
  link.addEventListener('click', function(event) {
    event.preventDefault(); // empêche le comportement par défaut du lien
    const url = this.getAttribute('href'); // récupère le lien
    goToPageWithState(url); // déclenche la transition de page avec état de navigation
  });
});
