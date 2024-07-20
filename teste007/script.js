let slideIndex = 0;
showSlides();

// Função para mostrar os slides
function showSlides() {
    let slides = document.getElementsByClassName("carousel-item");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 3000); // Altera a imagem a cada 3 segundos
}

// Função para ir para o próximo slide
function nextSlide() {
    let slides = document.getElementsByClassName("carousel-item");
    slides[slideIndex - 1].style.display = "none";
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = "block";
}

// Função para ir para o slide anterior
function prevSlide() {
    let slides = document.getElementsByClassName("carousel-item");
    slides[slideIndex - 1].style.display = "none";
    slideIndex--;
    if (slideIndex < 1) {
        slideIndex = slides.length;
    }
    slides[slideIndex - 1].style.display = "block";
}

