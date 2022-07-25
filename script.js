'use strict';
const modal = document.querySelector('.modal');
const hidden = document.querySelector('.hidden');
const overlay = document.querySelector('.overlay');
const showModal = document.querySelectorAll('.show-modal');
const closeModal = document.querySelector('.close-modal');

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};
const closeModalFn = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

// console.log(showModal);
for (let i = 0; i < showModal.length; i++) {
  showModal[i].addEventListener('click', openModal);
}

closeModal.addEventListener('click', closeModalFn);

overlay.addEventListener('click', closeModalFn);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModalFn();
  }
});
