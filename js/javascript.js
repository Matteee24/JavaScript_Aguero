const catalogo = [
    { titulo: "Copos de Avena con chocolate 1kg", precio: 15.99, imagen: "../images/producto1.jpg" },
    { titulo: "Jugo de Naranja", precio: 2.99, imagen: "../images/producto2.jpg" },
    { titulo: "Proteina en polvo 2kg", precio: 59.99, imagen: "../images/producto3.jpg" },
    { titulo: "Platanos de Canarias 1kg", precio: 1.62, imagen: "../images/producto4.jpg" },
    { titulo: "Platanos de Canarias 1kg", precio: 1.62, imagen: "../images/producto5.jpg" }
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
  
    Swal.fire({
      icon: 'success',
      title: 'Producto agregado',
      text: `${productoSeleccionado.titulo} se ha añadido al carrito.`,
      showConfirmButton: false,
      timer: 1500,
      customClass: {
        popup: 'swal-success-popup-class',
      },
    });
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
    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    const listaCarrito = document.getElementById('lista-carrito');
    const totalElementos = document.getElementById('total');
  
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
  
  function realizarCompra() {
    localStorage.removeItem('carrito');
    actualizarCarrito();
  
    Swal.fire({
      icon: 'success',
      title: 'Compra realizada',
      text: 'Gracias por tu compra. Tu pedido ha sido procesado con éxito.',
      showConfirmButton: false,
      timer: 4500,
      customClass: {
        popup: 'swal-success-popup-class',
      },
    });
  }
  
  window.onload = function () {
    const esIndex = window.location.pathname.endsWith('/index.html');
  
    if (esIndex) {
      const bienvenidaMostrada = localStorage.getItem('bienvenidaMostrada');
      if (!bienvenidaMostrada) {
        const swalOptions = {
          title: 'Iniciar Sesión',
          html:
            '<input id="swal-nombre" class="swal2-input" placeholder="Nombre">' +
            '<input id="swal-email" type="email" class="swal2-input" placeholder="Correo Electrónico">',
          focusConfirm: false,
          customClass: {
            confirmButton: 'swal-confirm-button-class',
            cancelButton: 'swal-cancel-button-class',
          },
          showCancelButton: true,
          cancelButtonText: 'Cancelar',
          confirmButtonText: 'Iniciar Sesión',
          preConfirm: () => {
            const nombre = Swal.getPopup().querySelector('#swal-nombre').value;
            const email = Swal.getPopup().querySelector('#swal-email').value;
  
            const autenticacionExitosa = true;
  
            if (autenticacionExitosa) {
              Swal.fire({
                icon: 'success',
                title: `¡Bienvenido/a, ${nombre}!`,
                showConfirmButton: false,
                timer: 1500,
                customClass: {
                  popup: 'swal-success-popup-class',
                },
              });
              localStorage.setItem('bienvenidaMostrada', 'true');
            } else {
              Swal.fire({
                icon: 'error',
                title: 'Error de autenticación',
                text: 'El nombre o el correo electrónico son incorrectos.',
                showConfirmButton: false,
                timer: 1500,
                customClass: {
                  popup: 'swal-error-popup-class',
                },
              });
            }
          }
        };
  
        Swal.fire(swalOptions);
      }
    }
  
    mostrarCatalogo();
    actualizarCarrito();
  
    document.getElementById('realizar-compra').addEventListener('click', realizarCompra);
  };
  