const catalogo = [
  { titulo: "FUNKO POP! CAPITÁN AMÉRICA", precio: 15.99, imagen: "../images/producto1.jpg" },
  { titulo: "FUNKO POP! GUARDIANES DE LA GALAXIA: ROCKET", precio: 15.99, imagen: "../images/producto2.jpg" },
  { titulo: "FUNKO POP! SPIDERMAN-ACROSS THE SPIDERVERSE: SPIDER-GWEN", precio: 20.75, imagen: "../images/producto3.jpg" },
  { titulo: "FUNKO POP! DRAGON BALL Z: SHENRON DRAGON", precio: 30, imagen: "../images/producto4.jpg" },
  { titulo: "FUNKO POP! IRON MAN (GAMERVERSE)", precio: 16.99, imagen: "../images/producto5.jpg" },
  { titulo: "FUNKO POP! STAR WARS: DARTH VADER", precio: 16.99, imagen: "../images/producto6.jpg" },
  { titulo: "FUNKO POP! SPIDER-MAN NO WAY HOME: SPIDER-MAN", precio: 16.99, imagen: "../images/producto7.jpg" },
  { titulo: "FUNKO POP! STAR WARS: STORMTROOPER", precio: 16.99, imagen: "../images/producto8.jpg" },
  { titulo: "FUNKO POP! STAR WARS: THE MANDALORIAN WITH THE CHILD", precio: 16.99, imagen: "../images/producto9.jpg" },
  { titulo: "FUNKO POP! STAR WARS: CHEWBACCA", precio: 16.99, imagen: "../images/producto10.jpg" },
  { titulo: "FUNKO POP! LILO & STICH: SKELETON STICH ESPECIAL EDITION", precio: 40.99, imagen: "../images/producto11.jpg" },
  { titulo: "FUNKO POP! MY HERO ACADEMIA: IZUKU MIDORIYA", precio: 16.99, imagen: "../images/producto12.jpg" },
  { titulo: "FUNKO POP! HARRY POTTER", precio: 14.99, imagen: "../images/producto13.jpg" },
  { titulo: "FUNKO POP! GUARDIANES DE LA GALAXIA: DANCING GROOT", precio: 16.99, imagen: "../images/producto14.jpg" },
  { titulo: "FUNKO POP! ATTACK ON TITAN: MIKASA ACKERMANN", precio: 16.99, imagen: "../images/producto15.jpg" },
  { titulo: "FUNKO POP! ATTACK ON TITAN: BATTLE LEVI SPECIAL EDITION", precio: 29.99, imagen: "../images/producto16.jpg" },
  { titulo: "FUNKO POP! ATTACK ON TITAN: EREN JAEGAR", precio: 19.99, imagen: "../images/producto17.jpg" },
  { titulo: "FUNKO POP! TORTUGAS NINJAS TEEN: RAPHAEL", precio: 18.99, imagen: "../images/producto18.jpg" },
  { titulo: "FUNKO POP! TORTUGAS NINJAS TEEN: LEONARDO", precio: 18.99, imagen: "../images/producto19.jpg" },
  { titulo: "FUNKO POP! TORTUGAS NINJAS TEEN: MICHELANGELO", precio: 18.99, imagen: "../images/producto20.jpg" },
  { titulo: "FUNKO POP! TORTUGAS NINJAS TEEN: DONATELLO", precio: 18.99, imagen: "../images/producto21.jpg" },
  { titulo: "FUNKO POP! TORTUGAS NINJAS TEEN:SPLINTER", precio: 14.99, imagen: "../images/producto22.jpg" },
  { titulo: "FUNKO POP! THE LAST RONIN", precio: 19.99, imagen: "../images/producto23.jpg" },
  { titulo: "FUNKO POP! POKEMON: EEVEE", precio: 16.99, imagen: "../images/producto24.jpg" },
  { titulo: "FUNKO POP! POKEMON: CHARMANDER", precio: 16.99, imagen: "../images/producto25.jpg" },
  { titulo: "FUNKO POP! SQUIRTLE PLATEADO", precio: 24.99, imagen: "../images/producto26.jpg" },
  { titulo: "FUNKO POP! BLACK CLOVER: BLACK ASTA", precio: 19.99, imagen: "../images/producto27.jpg" },
  { titulo: "FUNKO POP! BLACK CLOVER: YAMI", precio: 16.99, imagen: "../images/producto28.jpg" },
  { titulo: "FUNKO POP! MY HERO ACADEMIA: SHOTO TODOROKI", precio: 25, imagen: "../images/producto29.jpg" },
  { titulo: "FUNKO POP! MY HERO ACADEMIA: BAKUGO(KATSUKI)", precio: 16.99, imagen: "../images/producto30.jpg" },
  { titulo: "FUNKO POP! MY HERO ACADEMIA: INFINITE DEKU WITH ERI", precio: 25, imagen: "../images/producto31.jpg" },
  { titulo: "FUNKO POP! POKEMON: LUCARIO", precio: 30, imagen: "../images/producto32.jpg" }
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
