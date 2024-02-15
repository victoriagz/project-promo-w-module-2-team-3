'use strict';

const arrowUpDesign = document.querySelector('.js-arrow-up-design');
const arrowUpForm = document.querySelector('.js-arrow-up-form');
const arrowUpShare = document.querySelector('.js-arrow-up-share');

const designContainer = document.querySelector('.js-color-container');
const formContainer = document.querySelector('.js-form');
const shareContainer = document.querySelector('.js-share');

function showArrowUp(patata) {
    patata.classList.remove('collapsed');
}

function hideArrowUp(patata) {
    patata.classList.add('collapsed');
}

function handleArrowUp (event) {
    event.preventDefault();
    if (patata.classList.contains('collapsed')) {
        showArrowUp();
    } else {
        hideArrowUp();
    }
}

arrowUp.addEventListener('click', handleArrowUp(designContainer));
arrowUp.addEventListener('click', handleArrowUp(formContainer));


// function showArrowUpForm() {
//     formContainer.classList.remove('collapsed');
// }

// function hideArrowUpForm() {
//     formContainer.classList.add('collapsed');
// }

// function handleArrowUpForm (event) {
//     event.preventDefault();
//     if (designContainer.classList.contains('collapsed')) {
//         showArrowUpForm();
//     } else {
//         hideArrowUpForm();
//     }
// }

// arrowUpForm.addEventListener('click', handleArrowUpForm);
