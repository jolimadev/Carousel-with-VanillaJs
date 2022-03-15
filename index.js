
let slidePosition = 0;
const slides = document.getElementsByClassName('carousel__item');
const totalSlides = slides.length; /*0,1,2 = 3 elements = imgs*/

document.getElementById('carousel__button--next')
.addEventListener("click", function() {
    moveToNextSlide();
});

document.getElementById('carousel__button--prev')
.addEventListener("click", function() {
    moveToPrevSlide();
});

function updateSlidePosition() {
    for (let slide of slides) {
      slide.classList.remove('carousel__item--visible');
      slide.classList.add('carousel__item--hidden');
    }

    slides[slidePosition].classList.add('carousel__item--visible');
}

function moveToNextSlide() {
    if (slidePosition === totalSlides - 1) {
        slidePosition = 0; /*we start from 0, but the 3rd img is 2 in the array so that i put -1*/
    } else {
        slidePosition++;
    }
    updateSlidePosition();
}

function moveToPrevSlide() {  
    if (slidePosition === 0) {
        slidePosition = totalSlides - 1; /*you  wanna go back, so in the array is..2..1..0 so slidepostiion --*/
    } else {
        slidePosition--;
    }
    updateSlidePosition();
}