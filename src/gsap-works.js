const textsection = document.querySelector('.text-section');
const transition = document.querySelector('.transition');

window.addEventListener('load', () => {
  // Réinitialise les éléments à leur état initial
  gsap.set([textsection, transition], { clearProps: 'all' });

  // Votre animation pour textsection
  if (window.innerWidth > 768) {
    gsap.timeline().from('.text-section', { duration: 1, x: window.innerWidth, ease: 'power2.out' }, 1.2);
  }

  // Votre animation pour transition
  gsap.timeline().from('.transition', { duration: 1.2, scaleY: -1, y: -window.innerHeight, transformOrigin: 'bottom', ease: 'power4.inOut' }, .5);

  gsap.timeline({
    onComplete: function () {
      textsection.style.visibility = 'visible';
      textsection.style.mixBlendMode = 'difference';
    }
  });
});

function goToPage(url) {
  gsap.to('.transition', { 
    duration: 1, 
    scaleY: 1, 
    transformOrigin: 'bottom', 
    ease: 'power4.inOut', 
    onComplete: () => { window.location.href = url; }
  });
}

document.querySelectorAll('.logo a, .menu a, .thanks a.next-project').forEach(link => {
  link.addEventListener('click', function (event) {
    event.preventDefault(); // Empêche le comportement par défaut du lien
    const url = this.getAttribute('href'); // Récupère le lien
    goToPage(url); // Déclenche la transition de page
  });
});
