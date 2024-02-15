'use strict';

const arrowUpDesign = document.querySelector('.js-arrow-up-design');
const arrowUpForm = document.querySelector('.js-arrow-up-form');
const arrowUpShare = document.querySelector('.js-arrow-up-share');

const designContainer = document.querySelector('.js-color-container');
const formContainer = document.querySelector('.js-form');
const shareContainer = document.querySelector('.js-share');

function showArrowUp() {
    designContainer.classList.remove('collapsed');
}
function hideArrowUp() {
    designContainer.classList.add('collapsed');
}

function handleArrowUp (event) {
    event.preventDefault();
    if (designContainer.classList.contains('collapsed')) {
        showArrowUp();
    } else {
        hideArrowUp();
    }
}

arrowUpDesign.addEventListener('click', handleArrowUp);
