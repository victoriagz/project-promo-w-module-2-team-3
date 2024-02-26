
//Arrows
const arrowUpDesign = document.querySelector('.js-arrow-up-design');
const arrowUpForm = document.querySelector('.js-arrow-up-form');
const arrowUpShare = document.querySelector('.js-arrow-up-share');

//Containers
const designContainer = document.querySelector('.js-color-container');
const formContainer = document.querySelector('.js-form');
const shareContainer = document.querySelector('.js-share');
const dropDownSection = document.querySelector('.js_drop_down');
const dropDownSectionCollapsed = dropDownSection.classList.add('collapsed');

//Form fields
const inputName = document.querySelector('.js-name');
const inputJob = document.querySelector('.js-job');
const inputEmail = document.querySelector('.js-email');
const inputPhone = document.querySelector('.js-phone');
const requiredMessage = document.querySelector('.js-field-required-message');
const titlePreview = document.querySelector('.js_preview_title'); //variable del preview del nombre
const jobPreview = document.querySelector('.js_preview_job');

//Form fields values 
// const inputNameValue = inputName.value; 
// const inputJobValue = inputJob.value; 
// const inputEmailValue = inputEmail.value; 
// const inputPhoneValue = inputPhone.value; 

// Rellenar automáticamente cardpreview al escribir en el formulario
// inputName.addEventListener('input', (event) => {
//     titlePreview.innerHTML = event.target.value;
//   });
//   inputJob.addEventListener('input', (event) => {
//     jobPreview.innerHTML = event.target.value;
//   });

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

  function closeShareContainer (){
    if (shareContainer.classList.contains('collapsed')){
      if(dropDownSection !== dropDownSectionCollapsed){
        dropDownSection.classList.add('collapsed');
      }
    }
  }

 

  function handleArrowUp(container, arrow) {
    closeOtherContainers(container);
    toggleContainer(container);
    closeShareContainer(); 
    arrow.classList.toggle('rotate-down'); // Agregamos o quitamos la clase rotate-down
  }

  // function handleArrowUpShare () {
  //   if (inputName.value == '' || inputJob.value == '' || inputEmail.value == '' || inputPhonealue == ''){
  //     console.log('hey'); 
  //     //requiredMessage.classList.remove('collapsed'); 
  //     requiredMessage.innerHTML = 'Por favor, rellena los campos que faltan'; 
  //     //cambiar color casilla a rojo
  //   } else if (inputEmailValue != inputEmailValue.contains('@')){
  //     requiredMessage.innerHTML = 'Por favor, introduce un email válido'; 
  //     //cambiar color casilla a rojo
  //   } else if (inputPhoneValue != inputEmailValue.contains(Number)){
  //     requiredMessage.innerHTML = 'Por favor, introduce un teléfono válido'; 
  //     //cambiar color casilla a rojo
  //   } else {
  //     handleArrowUp(); 
  //   }
  // }

 
  arrowUpDesign.addEventListener('click', () => handleArrowUp(designContainer, arrowUpDesign));
  arrowUpForm.addEventListener('click', () => handleArrowUp(formContainer, arrowUpForm));
  //arrowUpShare.addEventListener('click', (handleArrowUpShare)); 
  arrowUpShare.addEventListener('click', () => handleArrowUp(shareContainer, arrowUpShare));
  