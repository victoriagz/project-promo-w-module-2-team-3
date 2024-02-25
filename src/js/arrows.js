
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
//const requiredFields = form.querySelectorAll('[required]'); //variable que recoge todos los elementos con la clase required

//Form fields values 
const inputNameValue = inputName.value; 
const inputJobValue = inputJob.value; 
const inputEmailValue = inputEmail.value; 
const inputPhoneValue = inputPhone.value; 

//Función cambiar el color casilla a rojo
function changeFieldColor () {
  inputName.style.border = '1px solid #ad6868';
  input
  inputJob.style.border = '1px solid #ad6868';
  inputEmail.style.border = '1px solid #ad6868';
  inputForm.style.border = '1px solid #ad6868';
}

function handleArrowUpShare () {
  requiredMessage.innerHTML = ''; 
  console.log('0'); 
  //const emptyField = inputNameValue == '' || inputJobValue == '' || inputEmailValue == '' || inputPhoneValue == '';
  const filledOutForm = inputNameValue && inputJobValue && inputEmailValue && inputPhoneValue;
  
  if (!inputEmail.value.includes('@')) {    
    console.log('2'); 
    requiredMessage.innerHTML = 'Por favor, introduce un email válido'; 
    inputEmail.style.border = '1px solid #ad6868';
  } else if (typeof inputPhoneValue !== 'number') { 
    console.log('3'); 
    requiredMessage.innerHTML = 'Por favor, introduce un teléfono válido'; 
    inputPhone.style.border = '1px solid #ad6868';
  } else if (!filledOutForm) {
    console.log('1'); 
    requiredMessage.innerHTML = 'Por favor, rellena los campos que faltan'; 
    changeFieldColor(); 
  } else {
    handleArrowUp(shareContainer, arrowUpShare);  
  }
}

  //Función manejadora del evento flecha de comparte 
  // function handleArrowUpShare () {
  //   console.log('0');
  //   requiredMessage.innerHTML = ''; 
    
  //   //Bucle 
  //   for (const field of requiredFields) {
  //     console.log('1'); 

  //     if (field.value === '') {
  //       console.log('2');
  //       field.value.border = '1px solid red';
  //       requiredMessage.innerHTML = 'Por favor, rellena los campos que faltan'; 

  //     } else {
  //       console.log('3');
  //       field.value.border = ''; 
  //       handleArrowUp(shareContainer, arrowUpShare);  
  //     }
  //   }
  // }

  
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

 
  arrowUpDesign.addEventListener('click', () => handleArrowUp(designContainer, arrowUpDesign));
  arrowUpForm.addEventListener('click', () => handleArrowUp(formContainer, arrowUpForm));
  arrowUpShare.addEventListener('click', () => handleArrowUpShare());
  //arrowUpShare.addEventListener('click', () => handleArrowUp(shareContainer, arrowUpShare));
  