// Función de saludo con validación
function saludar() {
  let nombre = prompt("¿Cómo te llamás?");
  
  if (!nombre || nombre.trim() === "") {
    alert("Por favor, ingresá tu nombre para continuar.");
    return;
  }

  alert("¡Hola " + nombre + "! Bienvenida a Llanten 🌿");
  document.getElementById("mensaje").textContent = "Hola " + nombre + ", nos alegra tenerte aquí.";

  // Descuento para primera visita
  let primeraVez = confirm("¿Es tu primera vez en Llanten?");
  if (primeraVez) {
    alert("Usá el código NATURAL10 para un 10% OFF en tu primera compra 💚");
  }
}

// Función para sugerencias según estado de ánimo
function sugerencia() {
  let estado = prompt("¿Cómo te sentís hoy? (estresada, cansada, feliz, ansiosa)");

  if (!estado || estado.trim() === "") {
    alert("Por favor, ingresá cómo te sentís.");
    return;
  }

  estado = estado.toLowerCase();
  let respuesta = "";

  if (estado === "estresada") {
    respuesta = "🌼 Recomendamos nuestros aceites esenciales y velas calmantes.";
  } else if (estado === "cansada") {
    respuesta = "🛁 Probá nuestros kits de spa para revitalizarte.";
  } else if (estado === "ansiosa") {
    respuesta = "🍵 Nuestros tés naturales te pueden ayudar a relajarte.";
  } else if (estado === "feliz") {
    respuesta = "🎁 ¡Qué bueno! Aprovechá para hacerte un regalo.";
  } else {
    respuesta = "🌿 Explorá nuestros productos y elegí lo que más te guste.";
  }

  console.log("El estado ingresado fue:", estado);
  document.getElementById("respuesta").textContent = respuesta;
}
// Función para abrir el modal
function abrirModal() {
  document.getElementById('modal').style.display = 'flex';
}

// Cerrar modal al hacer clic en el botón Aceptar
document.getElementById('cerrarModal').addEventListener('click', function() {
  document.getElementById('modal').style.display = 'none';
});

// Capturar envío del formulario
document.getElementById('formulario-contacto').addEventListener('submit', function(e) {
  e.preventDefault(); // Evita recargar la página
  abrirModal(); // Abre el modal de gracias
});
fetch('datos.json')
  .then(response => response.json())
  .then(data => {
    console.log(data); // Aquí seve el objeto JSON en la consola
    // Ejemplo: mostrar datos en tu web
    document.getElementById('direccion').innerText = data.direccion;
  })
  .catch(error => console.error('Error cargando JSON:', error));

fetch('productos.json')
  .then(res => res.json())
  .then(data => {
    const contenedor = document.getElementById('productos');
    data.productos.forEach(prod => {
      const div = document.createElement('div');
      div.classList.add('producto');
      div.innerHTML = `
        <a href="${prod.detalle}">
          <img src="${prod.imagen}" alt="${prod.nombre}">
          <h3>${prod.nombre}</h3>
          <p>${prod.descripcion}</p>
          <p>$${prod.precio}</p>
        </a>
      `;
      contenedor.appendChild(div);
    });
  })
  .catch(err => console.error(err));
