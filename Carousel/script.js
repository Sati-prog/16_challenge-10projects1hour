"use strict";

const images = document.querySelector('#images'),
      img = document.querySelectorAll('img');

let idx = 0;

function run() {

    idx++;

    if (idx > img.length - 1) {

        idx = 0;
    }

    images.style.transform = `translateX(${-idx * 500}px)`;
}

setInterval(run, 2000);