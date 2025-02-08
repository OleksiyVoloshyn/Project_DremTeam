import Swiper from 'swiper';
import 'swiper/css';
var swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: false,
    keyboard: {
        enabled: true,
        onlyInViewport: true,
      },
    
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    on: {
    slideChange: function () {
    updateNavigationButtons();
    },
    },
  });
  const nextButton = document.querySelector('swiper-button-next');
  const prevButton = document.querySelector('.swiper-button-prev');
    
  function updateNavigationButtons() {
    nextButton.addEventListener('click',()=>swiper.slideNext());
    prevButton.addEventListener('click',()=>swiper.slidePrev());

    if (swiper.isEnd) {
       nextButton.classList.add('swiper-button-disabled');
      } else {
      nextButton.classList.remove('swiper-button-disabled');
      }
       if (swiper.isBeginning) {
        prevButton.classList.add('swiper-button-disabled');
      } else {
        prevButton.classList.remove('swiper-button-disabled');
      }
    }
    
  updateNavigationButtons();
  

