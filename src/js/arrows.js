
//Arrows
const arrowUpDesign = document.querySelector('.js-arrow-up-design');
const arrowUpForm = document.querySelector('.js-arrow-up-form');
const arrowUpShare = document.querySelector('.js-arrow-up-share');

//Containers
const designContainer = document.querySelector('.js-color-container');
const formContainer = document.querySelector('.js-form');
const shareContainer = document.querySelector('.js-share');
const dropDownSection = document.querySelector('.js_drop_down');
//const dropDownSectionCollapsed = dropDownSection.classList.add('collapsed');

//Form fields
 const inputName = document.querySelector('.js_name');
 const inputJob = document.querySelector('.js_job');
// const inputEmail = document.querySelector('.js_email');
// const inputPhone = document.querySelector('.js_phone');
const requiredFields = document.querySelectorAll('.js-required'); //es un array
const requiredMessage = document.querySelector('.js-field-required-message');
//const requiredFields = form.querySelectorAll('[required]'); //variable que recoge todos los elementos con la clase required

//Form fields values 
//const inputRequiredValue = inputRequired.value; 
// const inputNameValue = inputName.value; 
// const inputJobValue = inputJob.value; 
// const inputEmailValue = inputEmail.value; 
// const inputPhoneValue = inputPhone.value; 

//Función cambiar el color casilla a rojo
// function changeFieldColor () {
//   if (inputNameValue === '') {
//     inputName.style.border = '1px solid #ad6868';
//   }
//   if (inputJobValue === '') {
//     inputJob.style.border = '1px solid #ad6868';
//   }
//   if (inputEmailValue === '') {
//     inputEmail.style.border = '1px solid #ad6868';
//   }
//   if (inputPhoneValue === '') {
//   inputPhone.style.border = '1px solid #ad6868';
//   }
// }

// function handleArrowUpShare () {
//   requiredMessage.innerHTML = ''; 
//   console.log('0'); 
//   //const emptyField = inputNameValue == '' || inputJobValue == '' || inputEmailValue == '' || inputPhoneValue == '';
//   //const filledOutForm = inputNameValue && inputJobValue && inputEmailValue && inputPhoneValue;
  
//   if (inputNameValue == '' || inputJobValue == '' || inputEmailValue == '' || inputPhoneValue == '') {
//     console.log('1'); 
//     requiredMessage.innerHTML = 'Por favor, rellena los campos que faltan'; 
//     changeFieldColor(); 

//   } else if (typeof inputPhoneValue !== 'number') { 
//     console.log('3'); 
//     requiredMessage.innerHTML = 'Por favor, introduce un teléfono válido'; 
//     inputPhone.style.border = '1px solid #ad6868';

//   } else if (!inputEmail.value.includes('@')) {    
//     console.log('2'); 
//     requiredMessage.innerHTML = 'Por favor, introduce un email válido'; 
//     inputEmail.style.border = '1px solid #ad6868';

//   } else {
//     handleArrowUp(shareContainer, arrowUpShare);  
//   }
// }

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

// Función para abrir el desplegable comparte
function handleArrowUpShare () {

  console.log('click arrow');

  console.log('> requiredFields', requiredFields);

   // que los campos required estén rellenos
    // Función que compruebe que todos los campos están rellenos --> devuelve true o false después de iterar por todos los field required
    // Si no están rellenos, muestro eso en el html y hago return

    // Si el teléfono.... muestro mensaje y return
    // Si el email ... muestro mensaje y return

     // handleArrowUp

  for (const requiredField of requiredFields) {
    
    const emailField = requiredFields[2]; 
    const emailFieldValue = emailField.value; 

    const phoneField = requiredFields[3]; 
    const phoneFieldValue = parseInt(phoneField.value); //para convertir el string a number porque todos los valores del input vienen como strings 

    requiredField.style.border = '1px solid #a2deaf';

    console.log('Required field', requiredField.name);
    console.log('Required field value', requiredField.value); 
    console.log('Required field typeof value', typeof requiredField.value); 



    if (requiredField.value === '') {
      requiredMessage.innerHTML = 'Por favor, rellena los campos que faltan'; 
      requiredField.style.border = '1px solid #ad6868';
      console.log('1'); 
      return;
    } else if (!emailFieldValue.includes('@')) {  
      conso
      requiredMessage.innerHTML = 'Por favor, introduce un email válido'; 
      emailField.style.border = '1px solid #ad6868';
    } else if (isNaN(phoneFieldValue)) { 
      // console.log('soy string'); 
      requiredMessage.innerHTML = 'Por favor, introduce un teléfono válido'; 
      phoneField.style.border = '1px solid #ad6868';
    } else {
      console.log('2');
      handleArrowUp (shareContainer, arrowUpShare);
      // console.log('hey');  
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

  
  function toggleContainer(container) {
    container.classList.toggle('collapsed');
  }

  function closeShareContainer (){
    if (shareContainer.classList.contains('collapsed')){
      if(!dropDownSection.classList.contains('collapsed')){
        dropDownSection.classList.add('collapsed');
      }
    }
  }
 

  function handleArrowUp(container, arrow) {
    // console.log('0'); 
    closeOtherContainers(container);
    // console.log('1'); 
    toggleContainer(container); 
    // console.log('2');  
    closeShareContainer(); 
    // console.log('3'); 
    arrow.classList.toggle('rotate-down'); // Agregamos o quitamos la clase rotate-down
    // console.log('4'); 
  }

 
  arrowUpDesign.addEventListener('click', () => handleArrowUp(designContainer, arrowUpDesign));
  arrowUpForm.addEventListener('click', () => handleArrowUp(formContainer, arrowUpForm));
  arrowUpShare.addEventListener('click', () => handleArrowUpShare());

  