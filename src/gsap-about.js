const firstline = document.querySelector('.first-line');
const secondline = document.querySelector('.second-line');

function resetAnimations() {
  gsap.set('.first-line', { x: 0 });
  gsap.set('.second-line', { x: 0 });
}

function startAnimations() {
  gsap.timeline({
    onComplete: function () {
      firstline.style.visibility = 'visible';
      secondline.style.visibility = 'visible';
    }
  }).from('.first-line', { duration: 1.1, x: window.innerWidth, ease: 'power2.out' }, 0)
    .from('.second-line', { duration: 1.4, x: window.innerWidth, ease: 'power2.out' }, 0);
}

document.addEventListener('DOMContentLoaded', function () {
  startAnimations();
});

function goToPage(url) {
  gsap.to('.first-line', { duration: 1, x: window.innerWidth, ease: 'power2.inOut' });
  gsap.to('.second-line', { duration: 1.2, x: window.innerWidth, ease: 'power2.inOut', onComplete: () => {
    window.location.href = url;
  }});
}

document.querySelectorAll('.menu a').forEach(link => {
  link.addEventListener('click', function (event) {
    event.preventDefault();
    const url = this.getAttribute('href');
    goToPage(url);
  });
});

window.addEventListener('pageshow', function (event) {
  if (event.persisted) {
    resetAnimations();
    startAnimations();
  }
});