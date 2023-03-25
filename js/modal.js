const openModal = document.querySelector(".btn-modal-datos");
const modal = document.querySelector(".modal");
const closeModal = document.querySelector(".modal__close");

openModal.addEventListener("click", (e) => {
  e.preventDefault();
  modal.classList.add("modal--show");
});

closeModal.addEventListener("click", (e) => {
  e.preventDefault();
  modal.classList.remove("modal--show");
});
