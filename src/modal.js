(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-product-open1]'),
    closeModalBtn: document.querySelector('[data-modal-product-close1]'),
    modal: document.querySelector('[data-modal-product1]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();

(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-product-open2]'),
    closeModalBtn: document.querySelector('[data-modal-product-close2]'),
    modal: document.querySelector('[data-modal-product2]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();

(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-product-open3]'),
    closeModalBtn: document.querySelector('[data-modal-product-close3]'),
    modal: document.querySelector('[data-modal-product3]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();
