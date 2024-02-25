
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
const inputName = document.querySelector('.js_name');
const inputJob = document.querySelector('.js_job');
const inputEmail = document.querySelector('.js_email');
const inputPhone = document.querySelector('.js_phone');
const requiredMessage = document.querySelector('.js-field-required-message');

//Form fields values 
const inputNameValue = inputName.value; 
const inputJobValue = inputJob.value; 
const inputEmailValue = inputEmail.value; 
const inputPhoneValue = inputPhone.value; 

// Rellenar automáticamente cardpreview al escribir en el formulario
inputName.addEventListener('input', (event) => {
    titlePreview.innerHTML = event.target.value;
  });
  inputJob.addEventListener('input', (event) => {
    jobPreview.innerHTML = event.target.value;
  });

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
  //   requiredMessage.innerHTML = ''; 
  //   console.log('entra'); 

  //   if (inputNameValue && inputJobValue && inputEmailValue && inputPhoneValue){
  //     console.log('hey'); 
  //     requiredMessage.innerHTML = 'Campos rellenos'; 

  //   } else if (!inputEmailValue.includes('@')){
  //     console.log('works'); 
  //     requiredMessage.innerHTML = 'Por favor, introduce un email válido'; 
  //     //cambiar color casilla a rojo
  //   } else if (inputPhoneValue = NaN){
  //     console.log('mermaid'); 
  //     requiredMessage.innerHTML = 'Por favor, introduce un teléfono válido'; 
  //     //cambiar color casilla a rojo
  //   } else {
  //     console.log('dog'); 
  //     requiredMessage.innerHTML = 'Por favor, rellena los campos que faltan'; 
  //     //cambiar color casilla a rojo
  //   }
  // }

function handleArrowUpShare () {
  requiredMessage.innerHTML = ''; 
  console.log('0'); 
  const emptyField = inputNameValue == '' || inputJobValue == '' || inputEmailValue == '' || inputPhoneValue == '';
  const filledOutForm = inputNameValue && inputJobValue && inputEmailValue && inputPhoneValue;

  if (!inputEmail.value.includes('@')) {    
    console.log('2'); 
    requiredMessage.innerHTML = 'Por favor, introduce un email válido'; 
    //cambiar color casilla a rojo
  } else if (isNaN(inputPhoneValue)) {
    console.log('3'); 
    requiredMessage.innerHTML = 'Por favor, introduce un teléfono válido'; 
    //cambiar color casilla a rojo
  } else if (emptyField) {
    console.log('1'); 
    //requiredMessage.classList.remove('collapsed'); 
    requiredMessage.innerHTML = 'Por favor, rellena los campos que faltan'; 
    //cambiar color casilla a rojo
  } else if (filledOutForm) {
    console.log('4'); 
    handleArrowUp(); 
  }
}

 
  arrowUpDesign.addEventListener('click', () => handleArrowUp(designContainer, arrowUpDesign));
  arrowUpForm.addEventListener('click', () => handleArrowUp(formContainer, arrowUpForm));
  arrowUpShare.addEventListener('click', (handleArrowUpShare)); 
  //arrowUpShare.addEventListener('click', () => handleArrowUp(shareContainer, arrowUpShare));
  