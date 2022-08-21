"use strict";

const btn = document.querySelector('#btn'),
      container = document.querySelector('#container');

btn.addEventListener('click', () => {

    createNotification();
});

function createNotification() {

    const notification = document.createElement('div');
    notification.classList.add('toast');

    notification.innerText = 'This challenge is crazy!';


    container.appendChild(notification);

    setTimeout(() => {

        notification.remove();

    }, 3000);
}