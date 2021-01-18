"use strict";

const BTN_OPEN = document.querySelector(".header__login");
const BTN_CLOSE = document.querySelector(".modal__close");
const MODAL = document.querySelector(".modal");
const OVERLAY = document.querySelector(".overlay");
const FORM_EMAIL = document.querySelector(".form__input--email");
const ESC_KEYCODE = 27;

function openModal() {
  MODAL.classList.remove("hidden");
  OVERLAY.classList.remove("hidden");
  FORM_EMAIL.focus();
}

function closeModal() {
  MODAL.classList.add("hidden");
  OVERLAY.classList.add("hidden");
}

function closeModalByKey(evt) {
  if (evt.keyCode === ESC_KEYCODE) {
    closeModal();
  }
}

BTN_OPEN.addEventListener("click", openModal);
BTN_CLOSE.addEventListener("click", closeModal);
document.addEventListener("keydown", closeModalByKey);
