"use strict";

const open = document.querySelector('#open'),
      container = document.querySelector('#container'),
      close = document.querySelector('#close');

open.addEventListener('click', () => {

    container.classList.add('active');
});

close.addEventListener('click', () => {

    container.classList.remove('active');
});