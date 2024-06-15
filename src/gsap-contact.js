const firstline = document.querySelector(".first-line");
const secondline = document.querySelector(".second-line");
const mailcontainer = document.querySelector(".mail-container");

function resetAnimations() {
  gsap.set(".first-line", { x: 0, visibility: 'visible'});
  gsap.set(".second-line", { x: 0, visibility: 'visible'});
  gsap.set(".mail-container", { x: 0, visibility: 'visible'});
}

function startAnimations() {
  gsap
    .timeline({
      onComplete: function () {
        firstline.style.visibility = "visible";
        secondline.style.visibility = "visible";
        mailcontainer.style.visibility = "visible";
      },
    })
    .from(
      ".first-line",
      { duration: 1, x: -window.innerWidth, ease: "power2.out" },
      0
    )
    .from(
      ".second-line",
      { duration: 1.4, x: -window.innerWidth, ease: "power2.out" },
      0
    )
    .from(
      ".mail-container",
      { duration: 1.75, x: -window.innerWidth, ease: "power2.out" },
      0
    );
}

document.addEventListener("DOMContentLoaded", function () {
  startAnimations();
});

function goToPage(url) {
  gsap.to(".first-line", {
    duration: 1,
    x: -window.innerWidth,
    ease: "power2.inOut",
  });
  gsap.to(".second-line", {
    duration: 1.15,
    x: -window.innerWidth,
    ease: "power2.inOut",
  });
  gsap.to(".mail-container", {
    duration: 1.3,
    x: -window.innerWidth,
    ease: "power2.inOut",
    onComplete: () => {
      window.location.href = url;
    },
  });
}

document.querySelectorAll(".menu a").forEach((link) => {
  link.addEventListener("click", function (event) {
    event.preventDefault(); // empêche le comportement par défaut du lien
    const url = this.getAttribute("href"); // récupère lien
    goToPage(url); // déclanche la transition de page
  });
});

window.addEventListener("pageshow", function (event) {
  if (event.persisted) {
    resetAnimations();
    startAnimations();
  }
});
