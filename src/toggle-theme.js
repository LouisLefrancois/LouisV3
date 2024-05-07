function toggleTheme() {
  const body = document.body;
  body.classList.toggle("dark-theme");

  // enregistre le thème
  const theme = body.classList.contains("dark-theme") ? "dark" : "";
  localStorage.setItem("theme", theme);
}

window.addEventListener("DOMContentLoaded", function () {
  // récupère le thème
  const savedTheme = localStorage.getItem("theme");

  // si thème enregistré = sombre, applique thème sombre
  if (savedTheme === "dark") {
    document.body.classList.add("dark-theme");
  }
});
