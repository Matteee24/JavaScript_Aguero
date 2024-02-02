const catalogo = [
  { titulo: "FUNKO POP! CAPITÁN AMÉRICA", precio: 15.99, imagen: "../images/producto1.jpg" },
  { titulo: "FUNKO POP! GUARDIANES DE LA GALAXIA: ROCKET", precio: 15.99, imagen: "../images/producto2.jpg" },
  { titulo: "FUNKO POP! SPIDERMAN-ACROSS THE SPIDERVERSE: SPIDER-GWEN", precio: 20.75, imagen: "../images/producto3.jpg" },
  { titulo: "FUNKO POP! DRAGON BALL Z: SHENRON DRAGON", precio: 30, imagen: "../images/producto4.jpg" },
  { titulo: "FUNKO POP! AVENGERS: IRON MAN(GAMERVERSE)", precio: 16.99, imagen: "../images/producto5.jpg" },
  { titulo: "FUNKO POP! AVENGERS: IRON MAN(GAMERVERSE)", precio: 16.99, imagen: "../images/producto6.jpg" },
  { titulo: "FUNKO POP! AVENGERS: IRON MAN(GAMERVERSE)", precio: 16.99, imagen: "../images/producto7.jpg" },
  { titulo: "FUNKO POP! AVENGERS: IRON MAN(GAMERVERSE)", precio: 16.99, imagen: "../images/producto8.jpg" },
  { titulo: "FUNKO POP! AVENGERS: IRON MAN(GAMERVERSE)", precio: 16.99, imagen: "../images/producto9.jpg" },
  { titulo: "FUNKO POP! AVENGERS: IRON MAN(GAMERVERSE)", precio: 16.99, imagen: "../images/producto10.jpg" },
  { titulo: "FUNKO POP! AVENGERS: IRON MAN(GAMERVERSE)", precio: 16.99, imagen: "../images/producto8.jpg" },
  { titulo: "FUNKO POP! AVENGERS: IRON MAN(GAMERVERSE)", precio: 16.99, imagen: "../images/producto9.jpg" },
  { titulo: "FUNKO POP! AVENGERS: IRON MAN(GAMERVERSE)", precio: 16.99, imagen: "../images/producto10.jpg" },
  { titulo: "FUNKO POP! AVENGERS: IRON MAN(GAMERVERSE)", precio: 16.99, imagen: "../images/producto8.jpg" },
  { titulo: "FUNKO POP! AVENGERS: IRON MAN(GAMERVERSE)", precio: 16.99, imagen: "../images/producto9.jpg" },
  { titulo: "FUNKO POP! AVENGERS: IRON MAN(GAMERVERSE)", precio: 16.99, imagen: "../images/producto10.jpg" },
  { titulo: "FUNKO POP! AVENGERS: IRON MAN(GAMERVERSE)", precio: 16.99, imagen: "../images/producto8.jpg" },
  { titulo: "FUNKO POP! AVENGERS: IRON MAN(GAMERVERSE)", precio: 16.99, imagen: "../images/producto9.jpg" },
  { titulo: "FUNKO POP! AVENGERS: IRON MAN(GAMERVERSE)", precio: 16.99, imagen: "../images/producto10.jpg" },
  { titulo: "FUNKO POP! AVENGERS: IRON MAN(GAMERVERSE)", precio: 16.99, imagen: "../images/producto8.jpg" },
  { titulo: "FUNKO POP! AVENGERS: IRON MAN(GAMERVERSE)", precio: 16.99, imagen: "../images/producto9.jpg" },
  { titulo: "FUNKO POP! AVENGERS: IRON MAN(GAMERVERSE)", precio: 16.99, imagen: "../images/producto10.jpg" },
  { titulo: "FUNKO POP! AVENGERS: IRON MAN(GAMERVERSE)", precio: 16.99, imagen: "../images/producto8.jpg" },
  { titulo: "FUNKO POP! AVENGERS: IRON MAN(GAMERVERSE)", precio: 16.99, imagen: "../images/producto9.jpg" },
  { titulo: "FUNKO POP! AVENGERS: IRON MAN(GAMERVERSE)", precio: 16.99, imagen: "../images/producto10.jpg" },
  { titulo: "FUNKO POP! AVENGERS: IRON MAN(GAMERVERSE)", precio: 16.99, imagen: "../images/producto8.jpg" },
  { titulo: "FUNKO POP! AVENGERS: IRON MAN(GAMERVERSE)", precio: 16.99, imagen: "../images/producto9.jpg" },
  { titulo: "FUNKO POP! AVENGERS: IRON MAN(GAMERVERSE)", precio: 16.99, imagen: "../images/producto11.jpg" }
];

function mostrarCatalogo() {
  const productosDiv = document.getElementById('productos');

  catalogo.forEach((producto, index) => {
    const productoDiv = document.createElement('div');
    productoDiv.classList.add('producto');
    productoDiv.innerHTML = `
      <img src="${producto.imagen}" alt="${producto.titulo}" class="avena">
      <p>${producto.titulo} - ${producto.precio}€</p>
      <button class="agregar-carrito" data-index="${index}">Agregar al carrito</button>`;
    productosDiv.appendChild(productoDiv);
  });

  document.querySelectorAll('.agregar-carrito').forEach(button => {
    button.addEventListener('click', function (event) {
      agregarAlCarrito(event);
    });
  });
}

function agregarAlCarrito(event) {
  const index = event.target.dataset.index;
  const productoSeleccionado = catalogo[index];

  const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
  carrito.push(productoSeleccionado);
  localStorage.setItem('carrito', JSON.stringify(carrito));

  actualizarCarrito();

  (async () => {
    await Swal.fire({
      icon: 'success',
      title: 'Producto agregado',
      text: `${productoSeleccionado.titulo} se ha añadido al carrito.`,
      showConfirmButton: false,
      timer: 1500,
      customClass: {
        popup: 'swal-success-popup-class',
      },
    });
  })();
}

function eliminarDelCarrito(index) {
  const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
  const productoEliminado = carrito[index].titulo;
  carrito.splice(index, 1);
  localStorage.setItem('carrito', JSON.stringify(carrito));
  actualizarCarrito();

  Swal.fire({
    icon: 'info',
    title: 'Producto eliminado',
    text: `${productoEliminado} se ha eliminado del carrito.`,
    showConfirmButton: false,
    timer: 1500,
    customClass: {
      popup: 'swal-info-popup-class',
    },
  });
}

function actualizarCarrito() {
  const esCarritoHtml = window.location.pathname.endsWith('/carrito.html');
  if (!esCarritoHtml) {
  
    return;
  }

  const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
  const listaCarrito = document.getElementById('lista-carrito');
  const totalElementos = document.getElementById('total');

  if (!listaCarrito || !totalElementos) {
    console.error('Elementos del DOM no encontrados.');
    return;
  }

  listaCarrito.innerHTML = '';
  let total = 0;

  carrito.forEach((producto, index) => {
    const productoLi = document.createElement('li');
    productoLi.innerHTML = `
      <img src="${producto.imagen}" alt="${producto.titulo}" class="avena imagen-carrito">
      ${producto.titulo} - ${producto.precio}€ 
      <button class="eliminar" data-index="${index}">Eliminar</button>`;
    listaCarrito.appendChild(productoLi);
    total += producto.precio;
  });

  totalElementos.textContent = total.toFixed(2);

  const eliminarButtons = document.querySelectorAll('.eliminar');
  eliminarButtons.forEach(button => {
    button.addEventListener('click', function () {
      eliminarDelCarrito(button.dataset.index);
    });
  });
}


window.onload = function () {
  mostrarCatalogo();
  actualizarCarrito();
 
};
