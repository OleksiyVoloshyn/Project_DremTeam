import Swiper from 'swiper';
import 'swiper/css';

// const swiper = new Swiper('.swiper-slide', {
//   slidesPerView: 'auto', // Кількість слайдів на екран
//   spaceBetween: 30, // Простір між слайдами
//   loop: false, // Без циклічної прокрутки
//   navigation: {
//     nextEl: '.swiper-button-prev',
//     prevEl: '.swiper-button-next',
//   },
//   keyboard: {
//     enabled: true,
//     onlyInViewport: true,
//   },
//   breakpoints: {
//     768: {
//       slidesPerView: 1,
//     },
//     1440: {
//       slidesPerView: 1,
//     },
//   },
// });

// swiper.on('slideChange', function () {
//   const nextButton = document.querySelector('.swiper-button-prev');
//   const prevButton = document.querySelector('.swiper-button-next');
//   if (swiper.isEnd) {
//     nextButton.setAttribute('disabled', 'true');
//   } else {
//     nextButton.removeAttribute('disabled');
//   }
//   if (swiper.isBeginning) {
//     prevButton.setAttribute('disabled', 'true');
//   } else {
//     prevButton.removeAttribute('disabled');
//   }
// });

var swiper = new Swiper('.swiper-container', {
  slidesPerView: 'auto', // Відображати кілька слайдів
  spaceBetween: 30, // Відстань між слайдами
  loop: false, // Без зациклення слайдів
  keyboard: {
    // Підтримка клавіатури
    enabled: true,
    onlyInViewport: true,
  },
  mousewheel: {
    // Підтримка миші
    enabled: true,
  },
  navigation: {
    // Кнопки навігації
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  on: {
    slideChange: function () {
      // Перевірка на деактивацію кнопок
      updateNavigationButtons();
    },
  },
});

// Оновлення стану кнопок (активна/неактивна)
function updateNavigationButtons() {
  const nextButton = document.querySelector('.swiper-button-next');
  const prevButton = document.querySelector('.swiper-button-prev');

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
