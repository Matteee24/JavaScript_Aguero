
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
  
  actualizarCarrito();
  document.getElementById('realizar-compra').addEventListener('click', realizarCompra);
  