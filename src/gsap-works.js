const textsection = document.querySelector('.text-section');

document.addEventListener('DOMContentLoaded', function () {
    // Set session storage item to indicate Page2 has been visited
    sessionStorage.setItem("Page2Visited", "True");

    // GSAP animation for textsection
    gsap.timeline({
        onComplete: function () {
            textsection.style.visibility = 'visible';
            textsection.style.mixBlendMode = 'difference';
        }
    });
});

if (window.innerWidth > 768) {
    gsap.timeline().from('.text-section', { duration: 1, x: window.innerWidth, ease: 'power2.out' }, 1.2);
}

gsap.timeline().from('.transition', { duration: 1.2, scaleY: -1, y: -window.innerHeight, transformOrigin: 'bottom', ease: 'power4.inOut' }, .5);

function goToPage(url) {
    gsap.to('.transition', { duration: 1, scaleY: 1, transformOrigin: 'bottom', ease: 'power4.inOut', onComplete: () => { window.location.href = url; }});
}

document.querySelectorAll('.logo a, .menu a, .thanks a.next-project').forEach(link => {
    link.addEventListener('click', function (event) {
        event.preventDefault(); // empêche le comportement par défaut du lien
        const url = this.getAttribute('href'); // récupère lien
        goToPage(url); // déclanche la transition de page
    });
});
