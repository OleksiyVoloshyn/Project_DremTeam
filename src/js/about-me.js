import Accordion from "accordion-js";
import Swiper from 'swiper/bundle';
import 'swiper/css';
import { Navigation, Keyboard } from 'swiper/modules';

const aboutMeBtnIcons = document.querySelectorAll(".about-me-use");
const aboutMeBtnNext = document.querySelector(".about-me-btn-next");

new Accordion(".accordion-container", {
    onOpen: function(element) {
        const btnIcon = element.querySelector('.about-me-use');
        if (btnIcon) {
            btnIcon.setAttribute('href', './img/icons.svg#icon-icon-up');
        }
    },
    onClose: function(element) {
        const btnIcon = element.querySelector('.about-me-use');
        if (btnIcon) {
            btnIcon.setAttribute('href', './img/icons.svg#icon-icon-down');
        };
    }
});

const swiper = new Swiper('.swiper', {
    slideActiveClass: 'swiper-slide-active',
    modules: [ Navigation, Keyboard ],
    spaceBetween: 0,
    loop: true,
    slidesPerView: 2, 
    breakpoints: {
        320: {
            slidesPerView: 2, 
        },
        768: {
            slidesPerView: 3, 
        },
        1440: {
            slidesPerView: 6, 
        },
    },
    navigation: {
        nextEl: '.about-me-btn-next',
    },
    // on: {
    //     slideChange: function () {
    //         const slides = this.slides;
            
    //         slides.forEach(slide => slide.classList.remove('active'));

    //         const activeSlide = slides[this.realIndex];

    //         if (activeSlide) {
    //             activeSlide.classList.add('active');
    //         }
    //     },
    // },
});

aboutMeBtnNext.addEventListener('click', () => {
    swiper.slideNext()
});


