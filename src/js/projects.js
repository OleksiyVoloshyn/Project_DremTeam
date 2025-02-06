import Swiper from 'swiper';
import 'swiper/css';

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

