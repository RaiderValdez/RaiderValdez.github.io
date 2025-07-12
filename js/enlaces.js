document.getElementById("toggleDarkMode").addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  const icon = document.querySelector("#toggleDarkMode i");
  icon.classList.toggle("bi-sun-fill");
  icon.classList.toggle("bi-moon-fill");
});
