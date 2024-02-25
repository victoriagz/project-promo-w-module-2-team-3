const arrowUpDesign = document.querySelector('.js-arrow-up-design');
const arrowUpForm = document.querySelector('.js-arrow-up-form');
const arrowUpShare = document.querySelector('.js-arrow-up-share');
const textDesign = document.querySelector('.js-text-design');
const textForm = document.querySelector('.js-text-form');
const textShare = document.querySelector('.js-text-share');
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

function handleText(container) {
  closeOtherContainers(container);
  toggleContainer(container);
}

arrowUpDesign.addEventListener('click', () => handleArrowUp(designContainer, arrowUpDesign));
arrowUpForm.addEventListener('click', () => handleArrowUp(formContainer, arrowUpForm));
arrowUpShare.addEventListener('click', () => handleArrowUp(shareContainer, arrowUpShare));
textDesign.addEventListener('click', () => handleText(designContainer, textDesign));
textForm.addEventListener('click', () => handleText(formContainer, textForm));
textShare.addEventListener('click', () => handleText(shareContainer, textShare));
