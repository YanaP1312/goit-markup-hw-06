// modal for order
const openModalBtn = document.querySelector(".button");
const modalOverlay = document.querySelector(".modal-overlay");
const modal = document.querySelector(".modal");
const closeModalBtn = document.querySelector(".form-close-btn");

const openModal = () => {
  modalOverlay.classList.add("is-open");
  document.body.classList.add("no-scroll");
};
const closeModal = () => {
  modalOverlay.classList.remove("is-open");
  document.body.classList.remove("no-scroll");
  openModalBtn.blur();
};

openModalBtn.addEventListener("click", openModal);
closeModalBtn.addEventListener("click", closeModal);
modalOverlay.addEventListener("click", (e) => {
  if (e.target === modalOverlay) {
    closeModal();
  }
});

function showToast(message, duration = 3000) {
  const toast = document.createElement("div");
  toast.className = "toast";
  toast.textContent = message;
  document.body.appendChild(toast);

  setTimeout(() => toast.classList.add("show"), 100);

  setTimeout(() => {
    toast.classList.remove("show");
    setTimeout(() => toast.remove(), 400);
  }, duration);
}

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".review-form");

  if (!form) return;

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    showToast("Thank you, our manager will contact you!");
    closeModal();
    form.reset();
  });
});

// mob menu
const closeMobMenuBtn = document.querySelector(".mobile-menu-close-btn");
const mobMenu = document.querySelector(".mobile-menu");
const openMobMenuBtn = document.querySelector(".menu-open-btn");
const linkNav = document.querySelectorAll(".link");

const openMobMenu = () => {
  mobMenu.classList.add("is-open");
  document.body.classList.add("no-scroll");
};
const closeMobMenu = () => {
  mobMenu.classList.remove("is-open");
  document.body.classList.remove("no-scroll");
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
