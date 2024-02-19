
'use strict';
const resetForm = document.querySelector('.js-reset-button');
const buttonCreate = document.querySelector('.js_button_create_card');
const arrowUpDesign = document.querySelector('.js-arrow-up-design');
const arrowUpForm = document.querySelector('.js-arrow-up-form');
const arrowUpShare = document.querySelector('.js-arrow-up-share');
const designContainer = document.querySelector('.js-color-container');
const formContainer = document.querySelector('.js-form');
const shareContainer = document.querySelector('.js-share');

function closeOtherContainers(currentContainer) {
  if (currentContainer !== designContainer) {
    designContainer.classList.add('collapsed');
  }
  if (currentContainer !== formContainer) {
    formContainer.classList.add('collapsed');
  }
  if (currentContainer !== shareContainer) {
    shareContainer.classList.add('collapsed');
  }
}

function toggleContainer(container) {
  container.classList.toggle('collapsed');
}
function handleArrowUp(container, arrow) {
  closeOtherContainers(container);
  toggleContainer(container);
  arrow.classList.toggle('rotate-down'); // Agregamos o quitamos la clase rotate-down
}
arrowUpDesign.addEventListener('click', () => handleArrowUp(designContainer, arrowUpDesign));
arrowUpForm.addEventListener('click', () => handleArrowUp(formContainer, arrowUpForm));
arrowUpShare.addEventListener('click', () => handleArrowUp(shareContainer, arrowUpShare));



// BUTTON CREATE
const handleClickButtonCreate = (event) => {
  const dropDown = document.querySelector('.js_drop_down');
  event.preventDefault();
  if (dropDown.classList.contains('collapsed')) {
    dropDown.classList.remove('collapsed');
    buttonCreate.style.backgroundColor = '#d5d5d5';
    buttonCreate.style.pointerEvents = 'none';
  }
};

buttonCreate.addEventListener('click', handleClickButtonCreate);



// reset-button
const handleResetForm = () => {
  console.log ('The user has clicked the button');
  document.getElementById('card__title__id').innerHTML = 'Nombre Apellido';
  document.getElementById('card__job__id').innerHTML = 'Front-end developer';
  document.getElementById('card__img__id').src = 'https://i.pinimg.com/564x/da/f7/8c/daf78c186a9d4fa2bcfd1d84d9c956ca.jpg';
  document.getElementById('social__email__id').href = '#';
  document.getElementById('social__mobile__id').href = 'tel:#';
  document.getElementById('social__linkedin__id').href = '#';
  document.getElementById('social__github__id').href = '#'; 
};

resetForm.addEventListener('click', handleResetForm);

