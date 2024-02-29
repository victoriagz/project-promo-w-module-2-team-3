
//Arrows
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
//const dropDownSectionCollapsed = dropDownSection.classList.add('collapsed');

//Form fields
const inputName = document.querySelector(".js-name");
const inputJob = document.querySelector(".js-job");
const inputEmail = document.querySelector(".js-email");
const inputPhone = document.querySelector(".js-phone");
const inputLinkedin = document.querySelector(".js-linkedin"); 
const inputGithub = document.querySelector(".js-github"); 
const requiredFields = document.querySelectorAll(".js-required"); 
const requiredMessage = document.querySelector(".js-field-required-message");
//const titlePreview = document.querySelector(".js_preview_title"); 
//const jobPreview = document.querySelector(".js_preview_job");


// const nameField = requiredFields[0];
// const nameFieldValue = nameField.value;


function handleCollapseShare () {

  //RECORDATORIO: Si sacamos estas constantes fuera de la función, da error en el input trabajo
  const jobField = requiredFields[1];
  const jobFieldValue = jobField.value;
  const emailField = requiredFields[2];
  const emailFieldValue = emailField.value;
  const phoneField = requiredFields[3];
  const phoneFieldNumber = parseInt(phoneField.value);


  for (const requiredField of requiredFields) {
    if(requiredField.value === '' ) {
      requiredMessage.innerHTML = 'Por favor, rellena los campos que faltan*';
      requiredField.style.border = '1px solid #ad6868';


    } else {
      requiredField.style.border = '1px solid #a2deaf';
        if (jobFieldValue === '') {
          requiredMessage.innerHTML = 'Por favor, rellena TU TRABAJO*';
          jobField.style.border = '1px solid #ad6868';
        } else if (!emailFieldValue.includes('@')) {
          requiredMessage.innerHTML = 'Por favor, introduce un email válido*';
          emailField.style.border = '1px solid #ad6868';
        } else if (isNaN(phoneFieldNumber)) {
          requiredMessage.innerHTML = 'Por favor, introduce un teléfono válido*';
          phoneField.style.border = '1px solid #ad6868';
        }  else {
          console.log('todos los campos rellenos');
          requiredField.style.border = '';
          requiredField.style.border = '1px solid #a2deaf';
          requiredMessage.innerHTML = 'Todos los campos están rellenos, buen trabajo!';
          handleCollapse (shareContainer, arrowUpShare);
          return;
        } 
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


  // function toggleContainer(container) {
  //   container.classList.toggle('collapsed');
  // }

  // function closeShareContainer (){
  //   if (shareContainer.classList.contains('collapsed')){
  //     if(!dropDownSection.classList.contains('collapsed')){
  //       dropDownSection.classList.add('collapsed');
  //     }
  //   }
  // }


  // function handleCollapse(container, arrow) {
  //   closeOtherContainers(container);
  //   toggleContainer(container);
  //   closeShareContainer();
  //   arrow.classList.toggle('rotate-down');
  // }

  function handleCollapse(container) {
    closeOtherContainers(container);
    container.classList.toggle("collapsed");
  }

  textDesign.addEventListener("click", () => handleCollapse(designContainer, textDesign));
  textForm.addEventListener("click", () => handleCollapse(formContainer, textForm));
  textShare.addEventListener("click", () => handleCollapse(shareContainer, textShare));
  arrowUpDesign.addEventListener("click", () => handleCollapse(designContainer, arrowUpDesign));
  arrowUpForm.addEventListener("click", () => handleCollapse(formContainer, arrowUpForm));
  arrowUpShare.addEventListener('click', () => handleCollapseShare());