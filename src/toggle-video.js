window.onload = function () {
  var video = document.querySelector(".firstContainer video");
  video.play(); // démarrage automatique de la vidéo
  video.volume = 0; // son video mute onload
  toggleSound("off"); // son off
};

function toggleSound(action) {
  var video = document.querySelector(".firstContainer video");
  var soundOn = document.querySelector(".sound-on");
  var soundOff = document.querySelector(".sound-off");

  if (action === "on") {
    video.volume = .03;
    video.muted = false;
    soundOn.style.display = "inline-block";
    soundOff.style.display = "none";
  } else if (action === "off") {
    video.muted = true;
    soundOn.style.display = "none";
    soundOff.style.display = "inline-block";
  }
}

function toggleVideo() {
  var image = document.querySelector(".firstContainer img");
  var video = document.querySelector(".firstContainer video");
  var soundOn = document.querySelector(".sound-on");
  var soundOff = document.querySelector(".sound-off");
  var hideVideoButton = document.querySelector(".hide-video");
  var showVideoButton = document.querySelector(".show-video");
  
  // si video caché
  if (video.style.display === "none") {
    // on l'affiche
    video.style.display = "block";
    // on cache l'img
    image.style.display = "none";

    // on affiche le btn "hide video"
    hideVideoButton.style.display = "block";
    // on cache le btn "hide video"
    showVideoButton.style.display = "none";

    soundOff.style.display = "inline-block";
    soundOn.style.display = "none";

    video.play(); // démarrage automatique de la vidéo (test dans condition)

  } else {
    video.style.display = "none";
    image.style.display = "block";

    hideVideoButton.style.display = "none";
    showVideoButton.style.display = "block";

    soundOff.style.display = "none";
    soundOn.style.display = "none";

    video.volume = 0;
    video.pause();
  }
}
