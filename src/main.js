'use strict';

// Seleccionar los botones de flecha y contenedores
const arrowUpDesign = document.querySelector('.js-arrow-up-design');
const arrowUpForm = document.querySelector('.js-arrow-up-form');
const arrowUpShare = document.querySelector('.js-arrow-up-share');
//const arrowUpShareAfter = document.querySelector('.js-arrow-up-share-after');
const designContainer = document.querySelector('.js-color-container');
const formContainer = document.querySelector('.js-form');
const shareContainer = document.querySelector('.js-share');
//const shareAfterContainer = document.querySelector('.js-share-after');

// Función genérica para mostrar u ocultar un contenedor
function toggleContainer(container) {
  container.classList.toggle('collapsed');
}

// Manejador de eventos para los botones de flecha
function handleArrowUp(container) {
  toggleContainer(container);
}

// Asociar los botones de flecha con sus respectivos contenedores
<<<<<<< HEAD
arrowUpDesign.addEventListener('click', () => handleArrowUp(designContainer));
arrowUpForm.addEventListener('click', () => handleArrowUp(formContainer));
arrowUpShare.addEventListener('click', () => handleArrowUp(shareContainer));
=======
// arrowUpDesign.addEventListener('click', () => handleArrowUp(designContainer));
// arrowUpForm.addEventListener('click', () => handleArrowUp(formContainer));
// arrowUpShare.addEventListener('click', () => handleArrowUp(shareContainer));
>>>>>>> reset-button
// arrowUpShareAfter.addEventListener('click', () => handleArrowUp(shareAfterContainer));

// FUNCIONES QUE VAMOS A NECESITAR:

//     1- Desplegar los contenidos del apartado section2 DISEÑA, RELLANA,COMPARTE.
//     2- Cambiar los colores de la tarjeta con la paleta de colores.
//     3- Aplicar cambios en el boton RESET para volver a empezar.
//     4-

// const arrowUpDesign = document.querySelector('.js-arrow-up-design');
// const arrowUpForm = document.querySelector('.js-arrow-up-form');
// const arrowUpShare = document.querySelector('.js-arrow-up-share');

// const designContainer = document.querySelector('.js-color-container');
// const formContainer = document.querySelector('.js-form');
// const shareContainer = document.querySelector('.js-share');

// function showArrowUp(patata) {
//     patata.classList.remove('collapsed');
// }

// function hideArrowUp(patata) {
//     patata.classList.add('collapsed');
// }

// function handleArrowUp (event) {
//     event.preventDefault();
//     if (patata.classList.contains('collapsed')) {
//         showArrowUp();
//     } else {
//         hideArrowUp();
//     }
// }

// arrowUp.addEventListener('click', handleArrowUp(designContainer));
// arrowUp.addEventListener('click', handleArrowUp(formContainer));

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

const buttonCreate = document.querySelector('.js_button_create_card');

const handleClickButtonCreate = (event) => {
  const dropDown = document.querySelector('.js_drop_down');
  event.preventDefault();
  if (dropDown.classList.contains('hidden')) {
    dropDown.classList.remove('hidden');
    buttonCreate.style.backgroundColor = '#d5d5d5';
    buttonCreate.style.pointerEvents = 'none';
  }
};

buttonCreate.addEventListener('click', handleClickButtonCreate);
// reset-button

const resetForm = document.querySelector('.js-reset-button');

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


