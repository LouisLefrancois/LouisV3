const fullcontainer = document.querySelectorAll('.full-container');
const navbar = document.querySelector('.navbar');
const scrolldowntxt = document.querySelector('.scroll-down');
const buttondarkmode = document.querySelector('.buttondarkmode');

// reset fullcontainer
function resetFullContainer() {
  fullcontainer.forEach(container => {
    gsap.set(container, { x: 0, opacity: 1 });
  });
}

// exec les anims
function playTimeline() {
  const TL = gsap.timeline({ paused: true });
  TL
      .from(navbar, .2, { top: 10, opacity: 0 }, .5) //  durée d'exec , sec avant exec
      .from(fullcontainer, .75, { opacity: 0 }, 1) 
      .from(scrolldowntxt, .75, { opacity: 0 }, 1.5) 
      .from(buttondarkmode, .75, { opacity: 0 }, 1.5) 
  TL.play();
}

// exec les fonctions au chargement de la page
window.addEventListener('load', () => {
  resetFullContainer();
  playTimeline();
});

// anim quand on part de la page, (quand on clique sur .menu a ou .full-container a)
function goToPage(url, element) {
  gsap.to(element, { duration: .75, x: -window.innerWidth, opacity: 0, ease: 'power2.inOut', onComplete: () => {
    window.location.href = url;
  }});
}

document.querySelectorAll('.menu a, .full-container a').forEach(link => {
  link.addEventListener('click', function(event) {
    event.preventDefault(); // empêche le comportement par défaut du lien, important pour avoir les anims
    const url = this.getAttribute('href'); // récupère lien
    const container = this.closest('.full-container'); // récupère le conteneur parent
    goToPage(url, container); // déclenche la transition de page
  });
});

// reset le style de container + exec la fonction playTimeline lorsque btn nav est cliqué
window.addEventListener('pageshow', (event) => {
  if (event.persisted) {
    resetFullContainer();
    playTimeline();
  }
});
