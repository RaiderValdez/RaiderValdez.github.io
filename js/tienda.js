const vehiculos = [
  {
    id: 1,
    marca: "Honda",
    modelo: "CR-V",
    ano: 2023,
    condicion: "Nuevo",
    precio: 32000,
    descripcion: "Honda CR-V 2023, SUV, motor 2.4L, automático.",
    imagen: "../img/HondaCRV2020.jpg"
  },
  {
    id: 2,
    marca: "Honda",
    modelo: "Civic",
    ano: 2022,
    condicion: "Usado",
    precio: 22000,
    descripcion: "Honda Civic 2022, sedán, motor 2.0L, manual.",
    imagen: "../img/HondaCivic2019.jpg"
  },
  {
    id: 3,
    marca: "Mercedes-Benz",
    modelo: "C300",
    ano: 2023,
    condicion: "Nuevo",
    precio: 54000,
    descripcion: "Mercedes-Benz C300 2023, sedán de lujo, motor turbo.",
    imagen: "../img/MercedesBenzC300-2018.jpg"
  },
  {
    id: 4,
    marca: "Volvo",
    modelo: "XC90",
    ano: 2021,
    condicion: "Usado",
    precio: 45000,
    descripcion: "Volvo XC90 2021, SUV familiar, motor 2.0L turbo.",
    imagen: "../img/VolvoXC90 2020.jpg"
  },
  {
    id: 5,
    marca: "Kia",
    modelo: "K5",
    ano: 2023,
    condicion: "Nuevo",
    precio: 47000,
    descripcion: "Kia K5 2023, vehículo de gas.",
    imagen: "../img/KiaK5-2023.jpg"
  },
  {
    id: 6,
    marca: "Tesla",
    modelo: "Model 3",
    ano: 2022,
    condicion: "Usado",
    precio: 48000,
    descripcion: "Tesla Model 3 2022, sedán eléctrico con piloto automático.",
    imagen: "../img/TeslaModel3.jpg"
  },
  {
    id: 7,
    marca: "Honda",
    modelo: "Accord",
    ano: 2020,
    condicion: "Usado",
    precio: 21000,
    descripcion: "Honda Accord 2020, sedán, motor 1.5L turbo.",
    imagen: "../img/HondaAccord2020 1.5.jpg"
  },
  {
    id: 8,
    marca: "Mercedes-Benz",
    modelo: "GLE",
    ano: 2022,
    condicion: "Nuevo",
    precio: 67000,
    descripcion: "Mercedes-Benz GLE 2025, SUV de lujo, motor V6.",
    imagen: "../img/MercedesBenzGLE450-2025.jpg"
  }
];

const listadoVehiculos = document.getElementById("listadoVehiculos");
const marcaFiltro = document.getElementById("marcaFiltro");
const anoFiltro = document.getElementById("anoFiltro");
const condicionFiltros = document.getElementsByName("condicionFiltro");
const precioFiltro = document.getElementById("precioFiltro");
const limpiarFiltrosBtn = document.getElementById("limpiarFiltros");

// Función para mostrar vehículos
function mostrarVehiculos(vehiculosFiltrados) {
  listadoVehiculos.innerHTML = "";

  if (vehiculosFiltrados.length === 0) {
    listadoVehiculos.innerHTML = "<p>No se encontraron vehículos con esos filtros.</p>";
    return;
  }

  vehiculosFiltrados.forEach(vehiculo => {
    const card = document.createElement("div");
    card.className = "card-vehiculo";

    card.innerHTML = `
      <img src="${vehiculo.imagen}" alt="${vehiculo.marca} ${vehiculo.modelo}" />
      <div class="card-body p-3">
        <h5>${vehiculo.marca} ${vehiculo.modelo}</h5>
        <p><strong>Año:</strong> ${vehiculo.ano}</p>
        <p><strong>Condición:</strong> ${vehiculo.condicion}</p>
        <p><strong>Precio:</strong> $${vehiculo.precio.toLocaleString()}</p>
        <p>${vehiculo.descripcion}</p>
      </div>
    `;

    listadoVehiculos.appendChild(card);
  });
}

// Obtener condición seleccionada
function obtenerCondicionSeleccionada() {
  for (const radio of condicionFiltros) {
    if (radio.checked) {
      return radio.value;
    }
  }
  return "todos";
}

// Función para filtrar vehículos
function filtrarVehiculos() {
  let resultado = vehiculos;

  const marca = marcaFiltro.value;
  const ano = anoFiltro.value;
  const condicion = obtenerCondicionSeleccionada();
  const precioOrden = precioFiltro.value;

  if (marca !== "todos") {
    resultado = resultado.filter(v => v.marca === marca);
  }

  if (ano !== "todos") {
    resultado = resultado.filter(v => v.ano.toString() === ano);
  }

  if (condicion !== "todos") {
    resultado = resultado.filter(v => v.condicion === condicion);
  }

  if (precioOrden === "asc") {
    resultado = resultado.sort((a, b) => a.precio - b.precio);
  } else if (precioOrden === "desc") {
    resultado = resultado.sort((a, b) => b.precio - a.precio);
  }

  mostrarVehiculos(resultado);
}

// Función para limpiar filtros
function limpiarFiltros() {
  marcaFiltro.value = "todos";
  anoFiltro.value = "todos";
  condicionFiltros.forEach(radio => {
    if (radio.value === "todos") radio.checked = true;
  });
  precioFiltro.value = "ninguno";
  mostrarVehiculos(vehiculos);
}

// Eventos filtro
marcaFiltro.addEventListener("change", filtrarVehiculos);
anoFiltro.addEventListener("change", filtrarVehiculos);
condicionFiltros.forEach(radio => radio.addEventListener("change", filtrarVehiculos));
precioFiltro.addEventListener("change", filtrarVehiculos);
limpiarFiltrosBtn.addEventListener("click", limpiarFiltros);

// Mostrar todos al cargar
mostrarVehiculos(vehiculos);

// ----------- Modo Oscuro -----------

const toggleModoOscuroBtn = document.getElementById("toggleModoOscuro");
const iconoModoOscuro = document.getElementById("iconoModoOscuro");

function actualizarIcono() {
  if (document.body.classList.contains("dark")) {
    iconoModoOscuro.classList.remove("bi-moon-fill");
    iconoModoOscuro.classList.add("bi-sun-fill");
  } else {
    iconoModoOscuro.classList.remove("bi-sun-fill");
    iconoModoOscuro.classList.add("bi-moon-fill");
  }
}

if (localStorage.getItem("modoOscuro") === "true") {
  document.body.classList.add("dark");
} else {
  document.body.classList.remove("dark");
}
actualizarIcono();

toggleModoOscuroBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  localStorage.setItem("modoOscuro", document.body.classList.contains("dark"));
  actualizarIcono();
});
