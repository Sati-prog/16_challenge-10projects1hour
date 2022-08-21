"use strict";

const btn = document.querySelector('#btn'),
      nav = document.querySelector('#nav');

btn.addEventListener('click', () => {

    nav.classList.toggle('active');
    btn.classList.toggle('active');
});