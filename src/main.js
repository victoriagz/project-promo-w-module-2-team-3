'use strict';
const arrowUpDesign = document.querySelector('.js-arrow-up-design');
const arrowUpForm = document.querySelector('.js-arrow-up-form');
const arrowUpShare = document.querySelector('.js-arrow-up-share');
const designContainer = document.querySelector('.js-color-container');
const formContainer = document.querySelector('.js-form');
const shareContainer = document.querySelector('.js-share');

// Función para cerrar todos los contenedores excepto el actual
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

// Función genérica para mostrar u ocultar un contenedor
function toggleContainer(container) {
  container.classList.toggle('collapsed');
}

// Manejador de eventos para los botones de flecha
function handleArrowUp(container, arrow) {
  closeOtherContainers(container);
  toggleContainer(container);
  arrow.classList.toggle('rotate-down'); // Agregamos o quitamos la clase rotate-down
}


// Asociar los botones de flecha con sus respectivos contenedores
arrowUpDesign.addEventListener('click', () => handleArrowUp(designContainer, arrowUpDesign));
arrowUpForm.addEventListener('click', () => handleArrowUp(formContainer, arrowUpForm));
arrowUpShare.addEventListener('click', () => handleArrowUp(shareContainer, arrowUpShare));
