'use strict';

const arrowUpDesign = document.querySelector('.js-arrow-up-design');
const arrowUpForm = document.querySelector('.js-arrow-up-form');
const arrowUpShare = document.querySelector('.js-arrow-up-share');

const designContainer = document.querySelector('.js-color-container');
const formContainer = document.querySelector('.js-form');
const shareContainer = document.querySelector('.js-share');


function showArrowUpDesign() {
    designContainer.classList.remove('collapsed');
}

function hideArrowUpDesign() {
    designContainer.classList.add('collapsed');
}

function handleArrowUpDesign (event) {
    event.preventDefault();
    if (designContainer.classList.contains('collapsed')) {
        showArrowUpDesign();
    } else {
        hideArrowUpDesign();
    }
}

arrowUpDesign.addEventListener('click', handleArrowUpDesign);


function showArrowUpForm() {
    formContainer.classList.remove('collapsed');
}

function hideArrowUpForm() {
    formContainer.classList.add('collapsed');
}

function handleArrowUpForm (event) {
    event.preventDefault();
    if (designContainer.classList.contains('collapsed')) {
        showArrowUpForm();
    } else {
        hideArrowUpForm();
    }
}

arrowUpForm.addEventListener('click', handleArrowUpForm);
