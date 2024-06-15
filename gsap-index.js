const fullcontainer = document.querySelectorAll('.full-container');
const navbar = document.querySelector('.navbar');
const scrolldowntxt = document.querySelector('.scroll-down');
const buttondarkmode = document.querySelector('.buttondarkmode');

function resetFullContainers() {
  fullcontainer.forEach(container => {
    gsap.set(container, { x: 0, opacity: 1 });
  });
}

function playTimeline() {
  const TL = gsap.timeline({ paused: true });
  TL
      .from(navbar, .2, { top: 10, opacity: 0 }, .5) //  durée d'exec , sec avant exec
      .from(fullcontainer, .75, { opacity: 0 }, 1) 
      .from(scrolldowntxt, .75, { opacity: 0 }, 1.5) 
      .from(buttondarkmode, .75, { opacity: 0 }, 1.5) 
  TL.play();
}

window.addEventListener('load', () => {
  resetFullContainers();
  playTimeline();
});

function goToPage(url, element) {
  gsap.to(element, { duration: .75, x: -window.innerWidth, opacity: 0, ease: 'power2.inOut', onComplete: () => {
    window.location.href = url;
  }});
}

document.querySelectorAll('.menu a, .full-container a').forEach(link => {
  link.addEventListener('click', function(event) {
    event.preventDefault(); // empêche le comportement par défaut du lien
    const url = this.getAttribute('href'); // récupère lien
    const container = this.closest('.full-container'); // récupère le conteneur parent
    goToPage(url, container); // déclenche la transition de page
  });
});

// Réinitialise les styles des conteneurs lorsque l'utilisateur utilise les boutons du navigateur
window.addEventListener('pageshow', (event) => {
  if (event.persisted) {
    resetFullContainers();
    playTimeline();
  }
});
