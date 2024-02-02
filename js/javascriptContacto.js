document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
   
    setTimeout(function() {
      Swal.fire({
        icon: 'success',
        title: '¡Mensaje enviado con éxito!',
        showConfirmButton: false,
        timer: 1500
      });
      document.getElementById('contactForm').reset();
    }, 1000);
  });
  