(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
    document.body.classList.toggle("no-scroll");

    // Add a small delay when closing the modal
    if (refs.modal.classList.contains("is-hidden")) {
      setTimeout(() => {
        refs.modal.style.display = "none";
      }, 300); // This should match the transition duration
    } else {
      refs.modal.style.display = "block";
    }
  }
})();
