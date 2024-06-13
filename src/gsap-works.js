const textsection = document.querySelector('.text-section');
const transition = document.querySelector('.transition');

function resetAnimations() {
  gsap.set(textsection, { clearProps: "all" });
  gsap.set(transition, { clearProps: "all" });
}

function startAnimations() {
  const timeline = gsap.timeline({
    onComplete: function () {
      textsection.style.visibility = 'visible';
      textsection.style.mixBlendMode = 'difference';
    }
  });

  if (window.innerWidth > 768) {
    timeline.from('.text-section', { duration: 1, x: window.innerWidth, ease: 'power2.out' }, 1.2);
  }

  timeline.from('.transition', { duration: 1.2, scaleY: -1, y: -window.innerHeight, transformOrigin: 'bottom', ease: 'power4.inOut' }, .5);
}

function goToPage(url, addState = false) {
  gsap.to('.transition', {
    duration: 1,
    scaleY: 1,
    transformOrigin: 'bottom',
    ease: 'power4.inOut',
    onComplete: () => {
      if (addState) {
        history.pushState({ isBack: true }, '', ''); // Ajoute un état de navigation
      }
      window.location.href = url;
    }
  });
}

document.addEventListener('DOMContentLoaded', startAnimations);

window.addEventListener('pageshow', function(event) {
  if (event.persisted) {
    resetAnimations();
    startAnimations();
  }
});

document.querySelectorAll('.logo a, .menu a, .thanks a.next-project').forEach(link => {
  link.addEventListener('click', function (event) {
    event.preventDefault();
    const url = this.getAttribute('href');
    goToPage(url, true);
  });
});

window.addEventListener('popstate', function(event) {
  if (event.state && event.state.isBack) {
    resetAnimations();
    startAnimations();
  }
});
