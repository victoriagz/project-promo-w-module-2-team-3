//Arrows & texts
const arrowUpDesign = document.querySelector(".js-arrow-up-design");
const arrowUpForm = document.querySelector(".js-arrow-up-form");
const arrowUpShare = document.querySelector(".js-arrow-up-share");
const textDesign = document.querySelector(".js-text-design");
const textForm = document.querySelector(".js-text-form");
const textShare = document.querySelector(".js-text-share");

//Containers
const designContainer = document.querySelector(".js-color-container");
const formContainer = document.querySelector(".js-form");
const shareContainer = document.querySelector(".js-share");
const dropDownSection = document.querySelector(".js_drop_down");

//Create button
const buttonCreate = document.querySelector(".js_button_create_card");

//Form fields
const inputPalette = document.querySelector(".color__container--group");
const inputName = document.querySelector(".js-name");
const inputJob = document.querySelector(".js-job");
const inputEmail = document.querySelector(".js-email-2");
const inputPhone = document.querySelector(".js-phone");
const inputLinkedin = document.querySelector(".js-linkedin-2");
const inputGithub = document.querySelector(".js-github-2");
const inputImage = document.querySelector(".js-image");
const requiredFields = document.querySelectorAll(".js-required");
const requiredMessage = document.querySelector(".js-field-required-message");

function handleCollapseShare() {
  let isFormValid = true;

  for (const requiredField of requiredFields) {
    if (requiredField.value === "") {
      requiredMessage.innerHTML = "Por favor, rellena los campos que faltan*";
      requiredField.style.border = "1px solid #ad6868";
      isFormValid = false;
    } else {
      requiredField.style.border = '1px solid #a2deaf';
        if (jobFieldValue === '') {
          requiredMessage.innerHTML = 'Por favor, rellena los campos que faltan*';
          jobField.style.border = '1px solid #ad6868';
        } else if (!emailFieldValue.includes('@')) {
          requiredMessage.innerHTML = 'Por favor, introduce un email válido*';
          emailField.style.border = '1px solid #ad6868';
          requiredFields[2].focus();
          return;
        } else if (isNaN(phoneFieldNumber)) {
          requiredMessage.innerHTML = 'Por favor, introduce un teléfono válido*';
          phoneField.style.border = '1px solid #ad6868';
          requiredFields[3].focus();
        } else if (linkedinFieldValue === '') {
          requiredMessage.innerHTML = 'Por favor, rellena los campos que faltan*';
          linkedinField.style.border = '1px solid #ad6868';
        } else if (githubFieldValue === '') {
          requiredMessage.innerHTML = 'Por favor, rellena los campos que faltan*';
          githubField.style.border = '1px solid #ad6868';
        }  else {
          console.log('todos los campos rellenos');
          requiredMessage.innerHTML = ''; 
          requiredField.style.border = '';
          requiredField.style.border = '1px solid #a2deaf';
          githubField.style.border = '1px solid #a2deaf';
          handleCollapse (shareContainer, arrowUpShare);
          return;
        } 
    }
  }
}


function placeCursor () {
  if (requiredFields[0].value === '') {
    requiredFields[0].focus();
  } else if (requiredFields[1].value === '') {
    requiredFields[1].focus();
  } else if (requiredFields[2].value === '') {
    requiredFields[2].focus();
  } else if (requiredFields[3].value === '') {
     requiredFields[3].focus();
  } else if (requiredFields[4].value === '') {
    requiredFields[4].focus();
  } else if (requiredFields[5].value === '') {
    requiredFields[5].focus();
  // } else if (requiredFields[6].value === '') {
  //   requiredFields[6].focus();
 }
}

function closeOtherContainers(currentContainer) {
  if (currentContainer !== designContainer) {
    designContainer.classList.add("collapsed");
  }
  if (currentContainer !== formContainer) {
    formContainer.classList.add("collapsed");
  }
  if (currentContainer !== shareContainer) {
    shareContainer.classList.add("collapsed");
  }
}

function handleCollapse(container) {
  closeOtherContainers(container);
  container.classList.toggle("collapsed");
}

// Collapsable create button
const handleClickButtonCreate = (event) => {
  const dropDown = document.querySelector(".js_drop_down");
  event.preventDefault();
  if (dropDown.classList.contains("collapsed")) {
    dropDown.classList.remove("collapsed");
    buttonCreate.style.backgroundColor = "#d5d5d5";
    buttonCreate.style.pointerEvents = "none";
  }
};

buttonCreate.addEventListener("click", handleClickButtonCreate);
textDesign.addEventListener("click", () =>
  handleCollapse(designContainer, textDesign)
);
textForm.addEventListener("click", () =>
  handleCollapse(formContainer, textForm)
);
textShare.addEventListener("click", () => handleCollapseShare());
arrowUpDesign.addEventListener("click", () =>
  handleCollapse(designContainer, arrowUpDesign)
);
arrowUpForm.addEventListener("click", () =>
  handleCollapse(formContainer, arrowUpForm)
);
arrowUpShare.addEventListener("click", () => handleCollapseShare());
