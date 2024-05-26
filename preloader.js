window.addEventListener("load", function () {
  var loader = document.getElementById("loader");
  loader.classList.add("fadeOut");
  setTimeout(function() {
    loader.style.display = "none";
  }, 500);
});