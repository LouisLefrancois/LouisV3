document.addEventListener("DOMContentLoaded", function () {
  const mailElement = document.querySelector(".mail");
  const copyNotification = document.querySelector(".copy-notification");

  if (mailElement && copyNotification) {
    mailElement.addEventListener("click", function () {
      // crée un input temporaire pour copier le mail
      const tempInput = document.createElement("input");
      tempInput.value = mailElement.textContent.trim();
      document.body.appendChild(tempInput);

      // select + copie
      tempInput.select();
      document.execCommand("copy");

      // remove le texte
      document.body.removeChild(tempInput);

      // affiche la notif
      copyNotification.classList.add("show");

      // cache la notif après 1.5s
      setTimeout(function () {
        copyNotification.classList.remove("show");
      }, 1500);
    });
  }
});
