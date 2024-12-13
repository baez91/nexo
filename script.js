// Seleccionar las imágenes del carrusel principal
const carouselImages = document.querySelectorAll('.carousel-image');
let currentIndex = 0;

// Asegurarse de que las imágenes estén listas y visibles
carouselImages.forEach((img, index) => {
    img.addEventListener('load', () => {
        img.style.backgroundColor = 'transparent'; // Remover fondo una vez cargadas
        console.log(`Imagen ${index + 1} cargada correctamente`);
    });

    img.addEventListener('error', () => {
        console.error(`Error al cargar la imagen ${index + 1}. Verifica la ruta.`);
        img.style.backgroundColor = '#000'; // Fondo negro en caso de error
    });
});

// Función para cambiar las imágenes del carrusel
function changeImage() {
    carouselImages[currentIndex].classList.remove('active'); // Quitar clase activa de la imagen actual
    currentIndex = (currentIndex + 1) % carouselImages.length; // Pasar a la siguiente imagen
    carouselImages[currentIndex].classList.add('active'); // Agregar clase activa a la nueva imagen
}

// Intervalo de cambio automático cada 3 segundos
let carouselInterval = setInterval(changeImage, 3000);

// Detener y reiniciar el carrusel al cambiar de pestaña
document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        clearInterval(carouselInterval); // Pausar carrusel
        console.log("Carrusel pausado: pestaña inactiva.");
    } else {
        carouselInterval = setInterval(changeImage, 3000); // Reiniciar carrusel
        console.log("Carrusel reiniciado: pestaña activa.");
    }
});
