// Cette fonction gère la transition de sortie vers une nouvelle page
function goToPage(url) {
  gsap.to(['.full-container', '.scroll-down'], {
    duration: 0.75,
    x: -window.innerWidth,
    opacity: 0,
    ease: 'power2.inOut',
    onComplete: () => {
      window.location.href = url; // Redirection vers la nouvelle URL
    }
  });
}

// Cette partie du code initialise l'animation à la fin du chargement de la page
window.addEventListener('load', () => {
  const TL = gsap.timeline({ paused: true });

  TL.from('.navbar', { duration: 0.2, top: 10, opacity: 0 }, 0.5)
    .from('.full-container', { duration: 0.75, opacity: 0 }, 1)
    .from('.scroll-down', { duration: 0.75, opacity: 0 }, 1.5)
    .from('.buttondarkmode', { duration: 0.75, opacity: 0 }, 1.5);

  TL.play();
});

// Cette partie du code gère le retour en arrière (Browser Back)
window.addEventListener('popstate', () => {
  gsap.set(['.full-container', '.scroll-down'], { x: -window.innerWidth, opacity: 0 });
});
