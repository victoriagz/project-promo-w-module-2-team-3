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
  const dropDownSectionCollapsed = dropDownSection.classList.add("collapsed");
  
  //Form fields
  const inputName = document.querySelector(".js-name");
  const inputJob = document.querySelector(".js-job");
  const inputEmail = document.querySelector(".js-email");
  const inputPhone = document.querySelector(".js-phone");
  const inputLinkedin = document.querySelector(".js-linkedin"); 
  const inputGithub = document.querySelector(".js-github"); 
  const requiredMessage = document.querySelector(".js-field-required-message");
  const titlePreview = document.querySelector(".js_preview_title"); //variable del preview del nombre
  const jobPreview = document.querySelector(".js_preview_job");
  
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
  
  textDesign.addEventListener("click", () => handleCollapse(designContainer, textDesign));
  textForm.addEventListener("click", () => handleCollapse(formContainer, textForm));
  textShare.addEventListener("click", () => handleCollapse(shareContainer, textShare));
  arrowUpDesign.addEventListener("click", () => handleCollapse(designContainer, arrowUpDesign));
  arrowUpForm.addEventListener("click", () => handleCollapse(formContainer, arrowUpForm));
  arrowUpShare.addEventListener("click", () => handleCollapse(shareContainer, arrowUpShare));