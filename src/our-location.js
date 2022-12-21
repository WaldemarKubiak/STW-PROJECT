const menuOverlay = document.querySelector('.our-location');
const menuCloseButton = document.querySelector('.our-location__close-btn');
const menuOpenButton = document.querySelector('.our-location__open-btn');

menuOpenButton.addEventListener('click', e => {
  menuOverlay.classList.remove('is-hidden');
});
menuCloseButton.addEventListener('click', e => {
  menuOverlay.classList.add('is-hidden');
});
