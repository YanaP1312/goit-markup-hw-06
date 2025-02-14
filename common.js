// modal for order
const openModalBtn = document.querySelector(".button");
const modalOverlay = document.querySelector(".modal-overlay");
const modal = document.querySelector(".modal");
const closeModalBtn = document.querySelector(".form-close-btn");

const openModal = () => {
  modalOverlay.classList.add("is-open");
};
const closeModal = () => {
  modalOverlay.classList.remove("is-open");
  openModalBtn.blur();
};

openModalBtn.addEventListener("click", openModal);
closeModalBtn.addEventListener("click", closeModal);
modalOverlay.addEventListener("click", (e) => {
  if (e.target === modalOverlay) {
    closeModal();
  }
});

// mob menu
const closeMobMenuBtn = document.querySelector(".mobile-menu-close-btn");
const mobMenu = document.querySelector(".mobile-menu");
const openMobMenuBtn = document.querySelector(".menu-open-btn");
const linkNav = document.querySelectorAll(".link");

const openMobMenu = () => {
  mobMenu.classList.add("is-open");
};
const closeMobMenu = () => {
  mobMenu.classList.remove("is-open");
  openMobMenuBtn.blur();
};

openMobMenuBtn.addEventListener("click", openMobMenu);
closeMobMenuBtn.addEventListener("click", closeMobMenu);
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeMobMenu();
    closeModal();
  }
});
linkNav.forEach((link) => {
  link.addEventListener("click", closeMobMenu);
});
