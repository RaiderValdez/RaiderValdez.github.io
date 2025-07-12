document.getElementById("toggleDarkMode").addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  const icon = document.querySelector("#toggleDarkMode i");
  icon.classList.toggle("bi-sun-fill");
  icon.classList.toggle("bi-moon-fill");
});

document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const nombre = document.getElementById("nombre").value.trim();
  const email = document.getElementById("email").value.trim();
  const mensaje = document.getElementById("mensaje").value.trim();

  if (nombre && email && mensaje) {
    alert(`Gracias ${nombre}, tu mensaje fue enviado correctamente.`);
    this.reset();
  } else {
    alert("Por favor completa todos los campos.");
  }
});

function enviarEmail() {
  const email = "ventas@napolesautos.com";
  window.location.href = `mailto:${email}?subject=Consulta%20Nápoles%20Autos`;
}
