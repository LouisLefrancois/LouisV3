const lenis = new Lenis({
  lerp: 0.13, // effet lissage smooth
  wheelMultiplier: 1, // valeur par défaut, défilement molette ni amplifié ni atténué
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);
