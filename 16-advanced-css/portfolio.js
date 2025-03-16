//Navigation ---------------------------------------------
// const nav = document.getElementById('nav');
// const menuIcon = document.querySelector('.menu-icon');

// function toggleMenu() {
//     nav.classList.toggle('active');
//     menuIcon.classList.toggle('active');
// }

// function hideMenu() {
//     nav.classList.remove('active');
//     menuIcon.classList.remove('active');
// }

// Slide Show ------------------------------------------
let currentSlideIndex = 0;

const slide = document.querySelectorAll('.slide');

function nextSlide() {
    console.log(currentSlideIndex);
    console.log(slide);
    slide[currentSlideIndex].classList.remove('active');
    currentSlideIndex = (currentSlideIndex + 1) % slide.length;
    slide[currentSlideIndex].classList.add('active');
}

setInterval(nextSlide, 5000);