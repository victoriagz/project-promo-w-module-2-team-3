
//Arrows
const arrowUpDesign = document.querySelector('.js-arrow-up-design');
const arrowUpForm = document.querySelector('.js-arrow-up-form');
const clickShare = document.querySelector('.js-arrow-up-share');

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

/* ANA 
// que los campos required estén rellenos
    // Función que compruebe que todos los campos están rellenos --> devuelve true o false después de iterar por todos los field required
    // Si no están rellenos, muestro eso en el html y hago return

    // Si el teléfono.... muestro mensaje y return
    // Si el email ... muestro mensaje y return

     // handleArrowUp

*/

// Función que compruebe que todos los campos están rellenos --> devuelve true o false después de iterar por todos los field required
let i = 0; 
let result = ''; 

function emptyField () { 

  for (const requiredField of requiredFields) {
    //if field empty
    if(requiredField.value === '') {
      i += 1; 
      console.log(i); 
      result = true;
      requiredField.style.border = '1px solid #ad6868';
      console.log(result); 
    //if field not empty 
    } else {
      i = 0; 
      console.log(i); 
      console.log('campo relleno'); 
      result = false;
      requiredField.style.border = '';
      requiredField.style.border = '1px solid #a2deaf';
      //console.log(result); 
    }
  }

}


function handleCollapseShare () {
  emptyField(); 

  const nameField = requiredFields[0];
  const nameFieldValue = nameField.value; 
  const jobField = requiredFields[1];
  const jobFieldValue = jobField.value; 
  const emailField = requiredFields[2]; 
  const emailFieldValue = emailField.value; 
  const phoneField = requiredFields[3]; 
  const phoneFieldValue = parseInt(phoneField.value);


  if (nameFieldValue && jobFieldValue && emailField && phoneFieldValue) {
    console.log('todos los campos rellenos'); 
    requiredMessage.innerHTML = 'Todos los campos están rellenos, buen trabajo!'; 
    handleCollapse (shareContainer, clickShare);
  } else if (result === true) {
    requiredMessage.innerHTML = 'Por favor, rellena los campos que faltan*'; 
    //requiredField.style.border = '1px solid #ad6868';
  } else if (!emailFieldValue.includes('@')) {  
      requiredMessage.innerHTML = 'Por favor, introduce un email válido'; 
      emailField.style.border = '1px solid #ad6868';
  } else if (isNaN(phoneFieldValue)) { 
      requiredMessage.innerHTML = 'Por favor, introduce un teléfono válido'; 
      phoneField.style.border = '1px solid #ad6868';
  }  
}

// Función para abrir el desplegable comparte
// function handleArrowUpShare () {

//   for (const requiredField of requiredFields) {
    
//     const emailField = requiredFields[2]; 
//     const emailFieldValue = emailField.value; 

//     const phoneField = requiredFields[3]; 
//     const phoneFieldValue = parseInt(phoneField.value); //para convertir el string a number porque todos los valores del input vienen como strings 

//     requiredField.style.border = '1px solid #a2deaf';

//     console.log('Required field', requiredField.name);
//     console.log('Required field value', requiredField.value); 
//     console.log('Required field typeof value', typeof requiredField.value); 



//     if (requiredField.value === '') {
//       requiredMessage.innerHTML = 'Por favor, rellena los campos que faltan'; 
//       requiredField.style.border = '1px solid #ad6868';
//       console.log('1'); 
//       return;
//     } else if (!emailFieldValue.includes('@')) {  
//       conso
//       requiredMessage.innerHTML = 'Por favor, introduce un email válido'; 
//       emailField.style.border = '1px solid #ad6868';
//     } else if (isNaN(phoneFieldValue)) { 
//       // console.log('soy string'); 
//       requiredMessage.innerHTML = 'Por favor, introduce un teléfono válido'; 
//       phoneField.style.border = '1px solid #ad6868';
//     } else {
//       console.log('2');
//       handleArrowUp (shareContainer, arrowUpShare);
//       // console.log('hey');  
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
      if(!dropDownSection.classList.contains('collapsed')){
        dropDownSection.classList.add('collapsed');
      }
    }
  }
 

  function handleCollapse(container, arrow) {
    // console.log('0'); 
    closeOtherContainers(container);
    // console.log('1'); 
    toggleContainer(container); 
    // console.log('2');  
    closeShareContainer(); 
    // console.log('3'); 
    arrow.classList.toggle('rotate-down'); 
    // console.log('4'); 
  }

 
  arrowUpDesign.addEventListener('click', () => handleCollapse(designContainer, arrowUpDesign));
  arrowUpForm.addEventListener('click', () => handleCollapse(formContainer, arrowUpForm));
  clickShare.addEventListener('click', () => handleCollapseShare());

  

