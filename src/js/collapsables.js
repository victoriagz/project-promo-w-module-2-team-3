
//Arrows & texts
const arrowUpDesign = document.querySelector('.js-arrow-up-design');
const arrowUpForm = document.querySelector('.js-arrow-up-form');
const arrowUpShare = document.querySelector('.js-arrow-up-share');
const textDesign = document.querySelector(".js-text-design");
const textForm = document.querySelector(".js-text-form");
const textShare = document.querySelector(".js-text-share")

//Containers
const designContainer = document.querySelector('.js-color-container');
const formContainer = document.querySelector('.js-form');
const shareContainer = document.querySelector('.js-share');
const dropDownSection = document.querySelector('.js_drop_down');

//Create button
const buttonCreate = document.querySelector('.js_button_create_card');

//Form fields
const inputPalette = document.querySelector('.color__container--group');
const inputName = document.querySelector(".js-name");
const inputJob = document.querySelector(".js-job");
const inputEmail = document.querySelector(".js-email");
const inputPhone = document.querySelector(".js-phone");
const inputLinkedin = document.querySelector(".js-linkedin-2"); 
const inputGithub = document.querySelector(".js-github-2"); 
const inputImage = document.querySelector(".js-image");
const requiredFields = document.querySelectorAll(".js-required"); 
const requiredMessage = document.querySelector(".js-field-required-message");

function handleCollapseShare () {
  let isFormValid = true; 

  for (const requiredField of requiredFields) {
    if(requiredField.value === '' ) {
      requiredMessage.innerHTML = 'Por favor, rellena los campos que faltan*';
      requiredField.style.border = '1px solid #ad6868';
      isFormValid = false; 
    } else {
      requiredField.style.border = '1px solid #a2deaf';
    }
  }

  if (!inputEmail.value.includes('@')) {
    requiredMessage.innerHTML = 'Por favor, introduce un email válido*';
    inputEmail.style.border = '1px solid #ad6868';
    inputEmail.focus();
    isFormValid = false;
  }

  if (isFormValid) {
    console.log('todos los campos rellenos y el email es válido');
    requiredMessage.innerHTML = '';
    for (const requiredField of requiredFields) {
      requiredField.style.border = '1px solid #a2deaf';
    }
    handleCollapse(shareContainer, arrowUpShare);
  }
}

function placeCursor() {
  for (const field of requiredFields) {
    if (field.value === '') {
      field.focus();
      break; 
    }
  }
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
    container.classList.toggle("collapsed");
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
//buttonCreate.addEventListener('click', handleShare); 

  textDesign.addEventListener("click", () => handleCollapse(designContainer, textDesign));
  textForm.addEventListener("click", () => handleCollapse(formContainer, textForm));
  textShare.addEventListener("click", () => handleCollapseShare());
  arrowUpDesign.addEventListener("click", () => handleCollapse(designContainer, arrowUpDesign));
  arrowUpForm.addEventListener("click", () => handleCollapse(formContainer, arrowUpForm));
  arrowUpShare.addEventListener('click', () => handleCollapseShare());