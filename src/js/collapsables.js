//Arrows & texts
const arrowUpDesign = document.querySelector('js-arrow-up-design');
const arrowUpForm = document.querySelector('.js-arrow-up-form');
const arrowUpShare = document.querySelector('.js-arrow-up-share');
const textDesign = document.querySelector('.js-text-design');
const textForm = document.querySelector('.js-text-form');
const textShare = document.querySelector('.js-text-share');

//Containers
const designContainer = document.querySelector('.js-color-container');
const formContainer = document.querySelector('.js-form');
const shareContainer = document.querySelector('.js-share');
const dropDownSection = document.querySelector('.js_drop_down');

//Create button
const buttonCreate = document.querySelector('.js_button_create_card');

//Form fields
const inputPalette = document.querySelector('.color__container--group');
const inputName = document.querySelector('.js-name');
const inputJob = document.querySelector('.js-job');
const inputEmail = document.querySelector('.js-email-2');
const inputPhone = document.querySelector('.js-phone');
const inputLinkedin = document.querySelector('.js-linkedin-2');
const inputGithub = document.querySelector('.js-github-2');
const inputImage = document.querySelector('.js-image');
const requiredFields = document.querySelectorAll('.js-required');
const requiredMessage = document.querySelector('.js-field-required-message');

function handleCollapseShare() {
  console.log('successful deploy');

  const nameField = requiredFields[0];
  const nameFieldValue = nameField.value;

  const jobField = requiredFields[1];
  const jobFieldValue = jobField.value;

  const emailField = requiredFields[2];
  const emailFieldValue = emailField.value;

  const phoneField = requiredFields[3];
  const phoneFieldNumber = parseInt(phoneField.value);

  const linkedinField = requiredFields[4];
  const linkedinFieldValue = linkedinField.value;

  const githubField = requiredFields[5];
  const githubFieldValue = githubField.value;

  if (nameFieldValue === '') {
    requiredMessage.innerHTML = 'Por favor, rellena los campos que faltan*';
    nameField.style.border = '1px solid #ad6868';
    nameField.focus();
    return;
  }
  nameField.style.border = '1px solid #a2deaf';

  if (jobFieldValue === '') {
    requiredMessage.innerHTML = 'Por favor, rellena los campos que faltan*';
    jobField.style.border = '1px solid #ad6868';
    jobField.focus();
    return;
  }
  jobField.style.border = '1px solid #a2deaf';

<<<<<<< HEAD
  if (emailFieldValue  === "") {
    requiredMessage.innerHTML = "Por favor, rellena los campos que faltan*";
    emailField.style.border = "1px solid #ad6868";
=======
  if (emailFieldValue === '') {
    requiredMessage.innerHTML = 'Por favor, rellena los campos que faltan*';
    emailField.style.border = '1px solid #ad6868';
>>>>>>> 7eaa80be7e8b484feeb399da6a9fb46df760594b
    emailField.focus();
    return;
  }
  emailField.style.border = '1px solid #a2deaf';

  if (!emailFieldValue.includes('@')) {
    requiredMessage.innerHTML = 'Por favor, introduce un email válido*';
    emailField.style.border = '1px solid #ad6868';
    emailField.focus();
    return;
  }
  emailField.style.border = '1px solid #a2deaf';

<<<<<<< HEAD
  if (phoneFieldNumber === "") {
    requiredMessage.innerHTML = "Por favor, rellena los campos que faltan*";
    phoneField.style.border = "1px solid #ad6868";
=======
  if (phoneFieldNumber === '') {
    requiredMessage.innerHTML = 'Por favor, rellena los campos que faltan*';
    phoneField.style.border = '1px solid #ad6868';
>>>>>>> 7eaa80be7e8b484feeb399da6a9fb46df760594b
    phoneField.focus();
    return;
  }
  phoneField.style.border = '1px solid #a2deaf';

  if (isNaN(phoneFieldNumber)) {
    requiredMessage.innerHTML = 'Por favor, introduce un teléfono válido*';
    phoneField.style.border = '1px solid #ad6868';
    phoneField.focus();
    return;
  }
  phoneField.style.border = '1px solid #a2deaf';

  if (linkedinFieldValue === '') {
    requiredMessage.innerHTML = 'Por favor, rellena los campos que faltan*';
    linkedinField.style.border = '1px solid #ad6868';
    linkedinField.focus();
    return;
  }
  linkedinField.style.border = '1px solid #a2deaf';

  if (githubFieldValue === '') {
    requiredMessage.innerHTML = 'Por favor, rellena los campos que faltan*';
    githubField.style.border = '1px solid #ad6868';
    githubField.focus();
    return;
  }
  githubField.style.border = '1px solid #a2deaf';

  console.log('todos los campos rellenos');
  requiredMessage.innerHTML = '';
  handleCollapse(shareContainer, arrowUpShare);
}

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

function handleCollapse(container) {
  closeOtherContainers(container);
  container.classList.toggle('collapsed');
}

// Collapsable create button
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
textDesign.addEventListener('click', () => handleCollapse(designContainer, textDesign));
textForm.addEventListener('click', () => handleCollapse(formContainer, textForm));
textShare.addEventListener('click', () => handleCollapseShare());
arrowUpDesign.addEventListener('click', () => handleCollapse(designContainer, arrowUpDesign));
arrowUpForm.addEventListener('click', () => handleCollapse(formContainer, arrowUpForm));
arrowUpShare.addEventListener('click', () => handleCollapseShare());
