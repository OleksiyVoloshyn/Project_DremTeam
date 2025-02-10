import Accordion from "accordion-js";
import Swiper from 'swiper/bundle';
import 'swiper/css';
import { Navigation, Keyboard } from 'swiper/modules';

const aboutMeBtnIcons = document.querySelectorAll(".about-me-use");
const aboutMeBtnNext = document.querySelector(".about-me-btn-next");

new Accordion(".accordion-container", {
    onOpen: function(element) {},
    onClose: function(element) {},
    openOnInit: [0],
    });

const swiper = new Swiper('.swiper', {
    slideActiveClass: 'swiper-slide-active',
    modules: [ Navigation, Keyboard ],
    keyboard: {
        enabled: true, 
        onlyInViewport: true,
    },
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
});

aboutMeBtnNext.addEventListener('click', () => {
    swiper.slideNext()
});


