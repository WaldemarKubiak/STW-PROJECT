(() => {
  const refs = {
    openModalBtn: document.querySelector('.header-form__button'),
    closeModalBtn: document.querySelector('.backdrop__close-button'),
    modal: document.querySelector('[data-modal]'),
  }

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();
