const firstline = document.querySelector('.first-line');
const secondline = document.querySelector('.second-line');
const mailcontainer = document.querySelector('.mail-container');
const firstSection = document.querySelector('.first-section'); // Sélecteur pour la première section (contact)

document.addEventListener('DOMContentLoaded', function() {
  gsap.timeline({
    onComplete: function() {
      firstline.style.visibility = 'visible';
      secondline.style.visibility = 'visible';
      mailcontainer.style.visibility = 'visible';
    }
  });

  // Animation initiale de la première section
  gsap.timeline().from(firstSection, {})
    .from(firstline, { duration: 1, x: -window.innerWidth, ease: 'power2.out' }, 0)
    .from(secondline, { duration: 1.15, x: -window.innerWidth, ease: 'power2.out' }, 0)
    .from(mailcontainer, { duration: 1.3, x: -window.innerWidth, ease: 'power2.out' }, 0);
});

function goToPage(url) {
  gsap.to(firstline, { duration: 1, x: -window.innerWidth, ease: 'power2.inOut' });
  gsap.to(secondline, { duration: 1.15, x: -window.innerWidth, ease: 'power2.inOut' });
  gsap.to(mailcontainer, { duration: 1.3, x: -window.innerWidth, ease: 'power2.inOut', onComplete: () => {
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

// Gestion du retour en arrière (Browser Back)
window.addEventListener('popstate', () => {
  gsap.set([firstline, secondline, mailcontainer], { clearProps: 'all' }); // Réinitialise les propriétés CSS à leur état initial
});
