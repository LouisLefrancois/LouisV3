const fullcontainer = document.querySelectorAll('.full-container');
const navbar = document.querySelector('.navbar');
const scrolldowntxt = document.querySelector('.scroll-down');
const buttondarkmode = document.querySelector('.buttondarkmode');

window.addEventListener('load', () => {

    const TL = gsap.timeline({ paused: true });

    TL
        .from(navbar, .2, { top: 10, opacity: 0 }, .5) //  durée d'exec , sec avant exec
        .from(fullcontainer, .75, { opacity: 0 }, 1) 
        .from(scrolldowntxt, .75, { opacity: 0 }, 1.5) 
        .from(buttondarkmode, .75, { opacity: 0 }, 1.5) 
    TL.play();
});

function goToPage(url) {
    gsap.to('.full-container, .scroll-down', { duration: .75, x: -window.innerWidth, opacity: 0, ease: 'power2.inOut', onComplete: () => {
      window.location.href = url;
    }});
  }
  
  document.querySelectorAll('.menu a, .full-container a').forEach(link => {
    link.addEventListener('click', function(event) {
      event.preventDefault(); // empêche le comportement par défaut du lien
      const url = this.getAttribute('href'); // récupère lien
      goToPage(url); // déclanche la transition de page
    });
  });