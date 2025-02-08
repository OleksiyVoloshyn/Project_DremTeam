document.addEventListener('DOMContentLoaded', function () {
  const modalHeader = document.querySelector('.modal-header');
  const modalBtnClose = document.querySelector('.modal-btn-close');
  const btnMenu = document.querySelector('.header-icon-burger');
  const menuLinks = document.querySelectorAll('.menu-list a');
  const btnMenuTablet = document.querySelector('.btn-menu-tablet');
  const btnMenuModal = document.querySelector('.btn-menu');
  const menuCenterOpen = document.querySelector('.menu-center-open');
  const menuCenterList = document.querySelector('.menu-center-list');

  function openModal() {
    modalHeader.classList.add('is-open');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    modalHeader.classList.remove('is-open');
    document.body.style.overflow = '';
  }

  if (modalBtnClose) {
    modalBtnClose.addEventListener('click', closeModal);
  }
  if (btnMenu) {
    btnMenu.addEventListener('click', openModal);
  }
  if (btnMenuTablet) {
    btnMenuTablet.addEventListener('click', closeModal);
  }
  if (btnMenuModal) {
    btnMenuModal.addEventListener('click', closeModal);
  }
  menuLinks.forEach(function (link) {
    link.addEventListener('click', closeModal);
  });

  const menuCenterItems = document.querySelectorAll('.menu-center-item a');
  menuCenterItems.forEach(function (link) {
    link.addEventListener('click', function () {
      menuCenterList.classList.remove('is-open');
    });
  });

  if (menuCenterOpen) {
    menuCenterOpen.addEventListener('click', function () {
      menuCenterList.classList.toggle('is-open');
    });
  }

  // Закриває модальне вікно при натисканні поза ним
  modalHeader.addEventListener('click', function (event) {
    if (event.target === modalHeader) {
      closeModal();
    }
  });
});