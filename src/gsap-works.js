const textsection = document.querySelector('.text-section');
const transition = document.querySelector('.transition');

// reset le style des éléments animés
function resetAnimations() {
  gsap.set(textsection, { clearProps: "all" });
  gsap.set(transition, { clearProps: "all" });
}

// change le styles de textsection
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

// exec la fonction startAnimations lorsque la page est chargée
document.addEventListener('DOMContentLoaded', function () {
  startAnimations();
});

// reset les anims + les exec lorsque btn nav est cliqué
window.addEventListener('pageshow', function(event) {
  if (event.persisted) {
    resetAnimations();
    startAnimations();
  }
});

// anim quand on part de la page, (quand on clique sur .logo a, .menu a ou .thanks a.next-project)
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

// détecte le retour en arrière du navigateur
window.addEventListener('popstate', function(event) {
  // verif si l'event popstate est déclenché par un retour en arrière du navigateur
  if (event.state && event.state.isBack) {
    resetAnimations();
    startAnimations();
  }
});

// ajoute un état de nav
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

// met à jour goToPageWithState
document.querySelectorAll('.logo a, .menu a, .thanks a.next-project').forEach(link => {
  link.addEventListener('click', function(event) {
    event.preventDefault(); // empêche le comportement par défaut du lien
    const url = this.getAttribute('href'); // récupère le lien
    goToPageWithState(url); // déclenche la transition de page avec état de navigation
  });
});
