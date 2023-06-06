// Código JavaScript para desactivar el desplazamiento automático de la galería
const productGallery = document.querySelector('.product-gallery');
const products = productGallery.querySelectorAll('.product');

let currentPosition = 0;
const galleryWidth = productGallery.offsetWidth;

function slideGallery() {
    // Comentario la función slideGallery() para desactivar el desplazamiento automático
    // currentPosition -= galleryWidth;
    // if (currentPosition < -(galleryWidth * (products.length - 1))) {
    //     currentPosition = 0;
    // }
    // productGallery.style.transform = `translateX(${currentPosition}px)`;
}

// setInterval(slideGallery, 3000); // Comenta también esta línea para desactivar el desplazamiento automático
document.getElementById("contactForm").addEventListener("submit", function(event) {
  event.preventDefault();
  // Aquí puedes agregar el código para enviar el formulario o realizar otras acciones
  // Por ejemplo, puedes utilizar AJAX para enviar los datos a un servidor
});
