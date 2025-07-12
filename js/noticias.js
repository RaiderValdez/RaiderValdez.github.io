const noticias = [
  {
    titulo: "Honda CR-V 2024: Renovación total",
    descripcion: "La Honda CR-V 2024 llega con una propuesta renovada y electrificada. Se ofrece en versiones híbrida e híbrida enchufable (PHEV), con una autonomía eléctrica de hasta 81 km. Su diseño ha sido actualizado con una presencia más robusta y elegante, y el interior incorpora doble pantalla (instrumentación digital de 10.2” y multimedia de 9”) con conectividad inalámbrica para Android Auto y Apple CarPlay 1. También destaca por su amplitud, ideal para familias, y su eficiencia energética",
    imagen: "https://cdn-images.motor.es/image/m/1320w/fotos-noticias/2023/06/honda-cr-v-2024-precios-alemania-202395727-1687426068_1.jpg",
  },
  {
    titulo: "Honda Civic 2023: Elegancia Compacta",
    descripcion: "El Honda Civic 2023 sigue consolidándose como uno de los compactos más confiables y deportivos del mercado. La versión híbrida ofrece eficiencia y buen rendimiento, mientras que el Civic Type R ha logrado récords en Nürburgring, destacando como uno de los compactos deportivos más rápidos. Sin embargo, Honda ha anunciado que esta versión dejará de venderse en Europa debido a regulaciones de emisiones ",
    imagen: "https://www.edmunds.com/assets/m/cs/bltc825abe263b43329/63935c945ccf102f82deca5e/2023_Honda_Civic_Sedan_Red_Front_Quarter_Action_1600.jpg",
  },
  {
    titulo: "Mercedes Benz C300: Rediseño en 2025",
    descripcion: "El Mercedes-Benz Clase C, incluyendo el modelo C300, se prepara para un rediseño en 2025. Se han filtrado imágenes de pruebas en condiciones extremas en Escandinavia. El facelift incluirá mejoras en diseño exterior (nueva parrilla, faros y parachoques), tecnología y motorizaciones híbridas ligeras (MHEV) de 48V. Se espera que llegue a concesionarios en verano de 2025",
    imagen: "https://vehicle-images.dealerinspire.com/2f85-210004761/W1KAF4HB3SR251843/79727c864c1cd5f11cff0be10d1f9780.jpeg",
  },
  {
    titulo: "Volvo XC90: Volvo ha decidido extender la vida",
    descripcion: "Volvo ha decidido extender la vida del XC90 más allá de lo previsto, a pesar del lanzamiento del nuevo EX90 eléctrico. El XC90 se mantendrá en el mercado como un modelo híbrido enchufable (PHEV), con mejoras en autonomía (hasta 100 km eléctricos) y un rediseño sustancial. Esta decisión responde a la demanda global, que aún no se alinea completamente con la electrificación total ",
    imagen: "https://hips.hearstapps.com/hmg-prod/images/new-xc90-long-lead-2-66d82785d0686.jpg?crop=0.392xw:0.520xh;0.225xw,0.257xh&resize=1200:*",
  },
  {
    titulo: "Toyota Corolla: Avance eléctrico, un paso al futuro",
    descripcion: "Toyota está trabajando en una nueva generación del Corolla, que se espera para finales de 2025 o inicios de 2026. El rediseño incluirá una estética más moderna y deportiva, inspirada en modelos como el Prius y el Crown. También se anticipa una nueva plataforma híbrida más eficiente, alineada con los objetivos de carbono neutro de la marca. El Corolla sigue siendo uno de los sedanes más vendidos del mundo ",
    imagen: "https://acnews.blob.core.windows.net/imgnews/medium/NAZ_1131c4af4c454e418c9ac4b8e90d8962.webp",
  },
  {
    titulo: "Tesla Model 3: Una actualización con mejoras",
    descripcion: "El Tesla Model 3 ha recibido una actualización con mejoras en seguridad (más airbags) y eficiencia. La versión Long Range RWD promete hasta 702 km de autonomía. Sin embargo, Tesla enfrenta una caída del 13% en ventas y críticas por la figura de Elon Musk, lo que ha afectado la percepción de la marca. A pesar de esto, el Model 3 sigue siendo competitivo, con precios agresivos y mejoras constantes .",
    imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Tesla_Model_3_%282023%29_Autofr%C3%BChling_Ulm_IMG_9282.jpg/960px-Tesla_Model_3_%282023%29_Autofr%C3%BChling_Ulm_IMG_9282.jpg",
  }
];

const container = document.getElementById("newsContainer");

noticias.forEach((noticia, index) => {
  const col = document.createElement("div");
  col.className = "col-md-4 mb-4";

  const card = document.createElement("div");
  card.className = "card shadow hover-card";

  const img = document.createElement("img");
  img.src = noticia.imagen;
  img.className = "card-img-top";
  img.alt = noticia.titulo;

  const body = document.createElement("div");
  body.className = "card-body";

  const titulo = document.createElement("h5");
  titulo.className = "card-title";
  titulo.innerText = noticia.titulo;

  const texto = document.createElement("p");
  texto.className = "card-text collapsed";
  texto.innerText = noticia.descripcion;
  texto.id = `texto-${index}`;

  const btn = document.createElement("button");
  btn.className = "btn btn-outline-primary btn-toggle";
  btn.innerText = "Ver más";
  btn.onclick = function () {
    if (texto.classList.contains("collapsed")) {
      texto.classList.remove("collapsed");
      texto.classList.add("full");
      btn.innerText = "Cerrar";
    } else {
      texto.classList.remove("full");
      texto.classList.add("collapsed");
      btn.innerText = "Ver más";
    }
  };

  body.appendChild(titulo);
  body.appendChild(texto);
  body.appendChild(btn);

  card.appendChild(img);
  card.appendChild(body);
  col.appendChild(card);
  container.appendChild(col);
});
