import Swiper from 'swiper';
import 'swiper/css';

var swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 30,
    centeredSlidesPerView: true,
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
      slideChangeTransitionEnd: function () {
      const nextButton = document.querySelector('.swiper-button-next');
      const prevButton = document.querySelector('.swiper-button-prev');
      if (swiper.isEnd) {
        nextButton.disabled = true;
      } else {
        nextButton.disabled = false;
      }
      if (swiper.isBeginning) {
        prevButton.disabled = true;
      } else {
        prevButton.disabled = false;
      }
    }
        
    },
    },
  );
  
  
    
    
 
  