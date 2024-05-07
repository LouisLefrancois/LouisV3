window.addEventListener("load", function () {
  var loader = document.getElementById("loader");
  loader.classList.add("fadeOut");
  setTimeout(function() {
    loader.style.display = "none";
  }, 500);
});


// document.addEventListener('DOMContentLoaded', function() {
//   window.addEventListener('load', function() {
//       function Preloader() {
//           var preloader = document.querySelector('.loader');
//           setTimeout(function() {
//               preloader.classList.add('fadeOut');
//               setTimeout(function() {
//                   preloader.style.display = 'none';
//               }, 500);
//           }, 1000);
//       }

//       if (!sessionStorage.getItem('doNotShow')) {
//           sessionStorage.setItem('doNotShow', 'true');
//           Preloader();
//       } else {
//           var preloader = document.querySelector('.loader');
//           if (preloader) {
//               preloader.style.display = 'none';
//           }
//       }
//   });
// });
