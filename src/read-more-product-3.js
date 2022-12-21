const menuOverlay = document.querySelector('.read-more');
const menuCloseButton = document.querySelector('.read-more__close-btn');
const menuOpenButton = document.querySelector('.read-more__open--product-3');

menuOpenButton.addEventListener('click', e => {
  menuOverlay.classList.remove('is-hidden');
});
menuCloseButton.addEventListener('click', e => {
  menuOverlay.classList.add('is-hidden');
});
