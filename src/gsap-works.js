const textsection = document.querySelector('.text-section');
const transition = document.querySelector('.transition');

function resetAnimations() {
  // Réinitialiser les propriétés des éléments animés
  gsap.set(textsection, { clearProps: "all" });
  gsap.set(transition, { clearProps: "all" });
}

function startAnimations() {
  gsap.timeline({
    onComplete: function () {
      textsection.style.visibility = 'visible';
      textsection.style.mixBlendMode = 'difference';
    }
  });

  if (window.innerWidth > 768) {
    gsap.timeline().from('.text-section', { duration: 1, x: window.innerWidth, ease: 'power2.out' }, 1.2);
  }

  gsap.timeline().from('.transition', { duration: 1.2, scaleY: -1, y: -window.innerHeight, transformOrigin: 'bottom', ease: 'power4.inOut' }, .5);
}

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
  gsap.to('.transition', { duration: 1, scaleY: 1, transformOrigin: 'bottom', ease: 'power4.inOut', onComplete: () => { window.location.href = url; }
  });
}

document.querySelectorAll('.logo a, .menu a, .thanks a.next-project').forEach(link => {
  link.addEventListener('click', function (event) {
    event.preventDefault(); // empêche le comportement par défaut du lien
    const url = this.getAttribute('href'); // récupère lien
    goToPage(url); // déclenche la transition de page
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

// Mise à jour des écouteurs d'événements avec la nouvelle fonction goToPageWithState
document.querySelectorAll('.logo a, .menu a, .thanks a.next-project').forEach(link => {
  link.addEventListener('click', function(event) {
    event.preventDefault(); // empêche le comportement par défaut du lien
    const url = this.getAttribute('href'); // récupère le lien
    goToPageWithState(url); // déclenche la transition de page avec état de navigation
  });
});
