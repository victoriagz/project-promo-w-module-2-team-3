const buttonReset = document.querySelector(".js-reset-button");

const resetCard = () => {
  document.getElementById("card__title__id").innerHTML = "Nombre Apellido";
  document.getElementById("card__job__id").innerHTML = "Front-end developer";
  document.getElementById("social__email__id").href = "#";
  document.getElementById("social__mobile__id").href = "tel:#";
  document.getElementById("social__linkedin__id").href = "#";
  document.getElementById("social__github__id").href = "#";
};

const resetForm = () => {
  document.getElementById("name").value = "";
  document.getElementById("job").value = "";
  document.getElementById("image").style.src = "";
  document.getElementById("email").value = "";
  document.getElementById("phone").value = "";
  document.getElementById("linkedin").value = "";
  document.getElementById("github").value = "";
};

const resetPreviewImage = () => {
  profilePreview.style.backgroundImage = "none";
};

const allInputFields = document.querySelectorAll(".js-required");
for (let i = 0; i < allInputFields.length; i++) {
  allInputFields[i].style.border = "none";
}

const handleResetButtonClick = () => {
  resetCard();
  resetForm();
  resetPreviewImage();
  handleChangeColor(palette1);
  colorTitlePalette(0, palette1);

  const allInputFields = document.querySelectorAll(".js-required");
  for (let i = 0; i < allInputFields.length; i++) {
    allInputFields[i].style.border = "none";
    requiredMessage.innerHTML = "";
  }
};

buttonReset.addEventListener("click", handleResetButtonClick);

const validateFields = () => {
  let isFormValid = true;
  for (const requiredField of requiredFields) {
    if (requiredField.value === "") {
      requiredField.style.border = "1px solid #ad6868";
      isFormValid = false;
    } else {
      if (requiredField === inputEmail && !inputEmail.value.includes("@")) {
        requiredField.style.border = "1px solid #ad6868";
        isFormValid = false;
      } else {
        requiredField.style.border = "1px solid #a2deaf";
      }
    }
  }

  if (isFormValid) {
    console.log("Todos los campos están correctamente llenados");
  }
};
