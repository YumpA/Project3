'use strict'

const menu = document.querySelector(".main-nav");
const burgerBtn = document.querySelector(".burger");

burgerBtn.addEventListener('click', () => {
    menu.classList.toggle('menu--open');
})