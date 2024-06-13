const firstline = document.querySelector('.first-line');
const secondline = document.querySelector('.second-line');

document.addEventListener('DOMContentLoaded', function() {
  gsap.timeline({
    onComplete: function() {
      firstline.style.visibility = 'visible';
      secondline.style.visibility = 'visible';
    }
  });
});

gsap.set('.first-section', {});

gsap.timeline().from('.first-section', {})
  .from('.first-line', { duration: 1.1, x: window.innerWidth, ease: 'power2.out' }, 0)
  .from('.second-line', { duration: 1.4, x: window.innerWidth, ease: 'power2.out' }, 0);

function goToPage(url) {
  gsap.to('.first-line', { duration: 1, x: window.innerWidth, ease: 'power2.inOut' });
  gsap.to('.second-line', { duration: 1.2, x: window.innerWidth, ease: 'power2.inOut', onComplete: () => {
    window.location.href = url;
  }});
}

document.querySelectorAll('.menu a').forEach(link => {
  link.addEventListener('click', function(event) {
    event.preventDefault(); // Empêche le comportement par défaut du lien
    const url = this.getAttribute('href'); // Récupère l'URL du lien
    goToPage(url); // Déclenche la transition de page
  });
});

// Cette partie du code gère le retour en arrière (Browser Back)
window.addEventListener('popstate', () => {
  gsap.set(['.first-line', '.second-line'], { x: window.innerWidth });
});
