let currentImgIndex = 0;
const carouselImgs = document.querySelectorAll('.carousel-img');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

// Función para cambiar aleatoriamente el orden de las imágenes
function shuffleImgs() {
carouselImgs.forEach(img => {
    // Generar un número aleatorio entre 0 y 1
    const rand = Math.random();
    // Asignar el número aleatorio como el orden de la imagen
    img.style.order = rand;
});
}

// Mostrar la primera imagen y luego barajar el orden de las imágenes
showImg(0);
shuffleImgs();

prevBtn.addEventListener('click', () => {
showImg(currentImgIndex - 1);
});

nextBtn.addEventListener('click', () => {
showImg(currentImgIndex + 1);
});

setInterval(() => {
showImg(currentImgIndex + 1);
  shuffleImgs(); // Barajar el orden de las imágenes cada vez que cambia la imagen
}, 5000);


function showImg(index) {
    if (index < 0) {
    index = carouselImgs.length - 1;
    } else if (index >= carouselImgs.length) {
    index = 0;
    }
    carouselImgs.forEach(img => {
    img.classList.remove('active', 'prev', 'next');
    });
    carouselImgs[index].classList.add('active');
    if (index > 0) {
    carouselImgs[index - 1].classList.add('prev');
    } else {
    carouselImgs[carouselImgs.length - 1].classList.add('prev');
    }
    if (index < carouselImgs.length - 1) {
    carouselImgs[index + 1].classList.add('next');
    } else {
    carouselImgs[0].classList.add('next');
    }
    currentImgIndex = index;
}