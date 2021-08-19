` use strict `;

const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');
const overlay = document.querySelector('.header');

hamburger.addEventListener('click', () => {
	menu.classList.toggle('active');
	overlay.classList.toggle('overlay');
	//prevent body scroll Y when menu is open
	document.body.classList.toggle('prevent-scroll');
});

// slider functionality

let slides = document.querySelectorAll('.slide');
let nextSlide = document.querySelector('.next');
let previousSlide = document.querySelector('.previous');
let totalSlides = slides.length;
let index = 0;

// when right arrow is clicked, run function next
nextSlide.addEventListener('click', () => {
	slideTo('nextSlide');
});

previousSlide.addEventListener('click', () => {
	slideTo('previousSlide');
});

// determine which slide will be displayed next
function slideTo(direction) {
	if (direction == 'nextSlide') {
		index++;
		if (index == totalSlides) {
			index = 0;
		}
	} else {
		if (index == 0) {
			index = totalSlides - 1;
		} else {
			index--;
		}
	}

	for (i = 0; i < slides.length; i++) {
		slides[i].classList.remove('active');
	}
	slides[index].classList.add('active');
}
