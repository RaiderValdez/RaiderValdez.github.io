// Modo oscuro
document.getElementById("toggleDarkMode").addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  const icon = document.querySelector("#toggleDarkMode i");
  icon.classList.toggle("bi-sun-fill");
  icon.classList.toggle("bi-moon-fill");
});

// Cards
const vehicles = [
  { img: "img/HondaCRV2020.jpg", title: 'Honda CRV 2020', short: 'Vehículo como nuevo.', more: 'Es una SUV compacta reconocida por su eficiencia, comodidad y confiabilidad. Equipada con un motor turbo de 1.5L, ofrece un excelente rendimiento de combustible y una conducción suave. Ideal para familias o quienes buscan espacio sin sacrificar estilo.' },
  { img: "img/HondaCivic2019.jpg", title: 'Honda Civic 2019', short: 'Vehículo en excelente estado.', more: 'combina diseño deportivo con eficiencia y tecnología. Su motor ágil y su interior bien equipado lo convierten en una excelente opción para quienes buscan un sedán confiable, económico y con gran valor de reventa.' },
  { img: 'img/KiaSportage2021.jpg', title: 'Kia Sportage 2021', short: 'Camioneta deportiva familiar.', more: 'SUV con 4x4, sistema de navegación, cámara 360°, destaca por su diseño moderno, amplio espacio interior y tecnología avanzada. Con opciones de tracción delantera o total, es perfecta tanto para la ciudad como para aventuras fuera del asfalto. Seguridad y estilo en un solo paquete.' },
  { img: 'img/MercedesBenzC300-2018.jpg', title: 'Mercedes Benz C300', short: 'Compacto, económico y cómodo.', more: 'Interior impecable, pantalla digital, es sinónimo de lujo y rendimiento. Este sedán premium ofrece un motor turbo potente, acabados de alta gama y tecnología de asistencia al conductor. Ideal para quienes buscan elegancia, confort y dinamismo en cada trayecto.' },
  { img: "img/MercedesBenzGLE450-2025.jpg", title: 'Mercedes Benz GLE 450 2025', short: 'Vehículo espacioso para familia.', more: 'representa lo último en innovación y lujo SUV. Con un motor híbrido suave (mild hybrid), suspensión inteligente y un interior de alta tecnología, este modelo redefine el confort y la potencia en su categoría. Una experiencia de conducción superior.' },
  { img: 'img/MazdaCX5 2020.jpg', title: 'Mazda CX-5 2020', short: 'SUV elegante y potente.', more: 'Motor 2.5L Skyactiv, AWD, ofrece una mezcla perfecta de diseño elegante, manejo deportivo y eficiencia. Su interior refinado y su tecnología intuitiva la convierten en una de las SUV más completas del mercado. Ideal para quienes valoran el estilo y la funcionalidad.' },
  { img: 'img/HondaAccord2020 1.5.jpg', title: 'Honda Accord 2020', short: 'Sedan Deportivo con estilo único.', more: 'es un sedán mediano que destaca por su espacio, tecnología y eficiencia. Con opciones de motor turbo y una conducción suave, es una excelente elección para quienes buscan un vehículo cómodo, seguro y duradero.' },
  { img: 'img/VolvoXC90 2020.jpg', title: 'Volvo XC90 2020', short: 'Ideal para ciudad.', more: 'es una SUV de lujo con enfoque en seguridad, confort y sostenibilidad. Con capacidad para 7 pasajeros, materiales premium y tecnología avanzada, es ideal para familias que buscan elegancia sin comprometer la protección.' },
];

function generateCards() {
  const container = document.getElementById('cardsContainer');
  vehicles.forEach((car, index) => {
    const card = document.createElement('div');
    card.className = 'col';
    card.innerHTML = `
      <div class="card h-100" id="card-${index}">
        <img src="${car.img}" class="card-img-top" alt="${car.title}">
        <div class="card-body">
          <h5 class="card-title">${car.title}</h5>
          <p class="card-text card-short-info">${car.short}</p>
          <p class="card-text card-more-info">${car.more}</p>
          <button class="btn btn-primary btn-expand" onclick="expandCard(${index})">Ver más información</button>
          <button class="btn btn-secondary btn-collapse mt-2 d-none" onclick="collapseCard(${index})">Cerrar</button>
        </div>
      </div>
    `;
    container.appendChild(card);
  });
}

function expandCard(index) {
  const card = document.getElementById(`card-${index}`);
  card.classList.add('expanded');
  card.querySelector('.btn-expand').classList.add('d-none');
  card.querySelector('.btn-collapse').classList.remove('d-none');
}

function collapseCard(index) {
  const card = document.getElementById(`card-${index}`);
  card.classList.remove('expanded');
  card.querySelector('.btn-expand').classList.remove('d-none');
  card.querySelector('.btn-collapse').classList.add('d-none');
}

window.addEventListener('DOMContentLoaded', generateCards);

function enviarCorreo(event) {
  event.preventDefault();
  alert("Estamos redireccionándote a tu cliente de correo...");
  window.location.href = "mailto:rv23-1099@unphu.edu.do?subject=Consulta desde la web&body=Hola, quiero información sobre un vehículo.";
}