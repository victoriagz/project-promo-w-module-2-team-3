const buttonReset = document.querySelector('.js-reset-button');
const buttonCreate = document.querySelector('.js_button_create_card');

// BUTTON CREATE
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

// RESET BUTTON - resetCard
const resetCard = () => {
  console.log('Resetting card');
  document.getElementById('card__title__id').innerHTML = 'Nombre Apellido';
  document.getElementById('card__job__id').innerHTML = 'Front-end developer';
  document.getElementById('card__img__id').style.backgroundImage =
    'url(https://i.pinimg.com/564x/da/f7/8c/daf78c186a9d4fa2bcfd1d84d9c956ca.jpg)';
  document.getElementById('social__email__id').href = '#';
  document.getElementById('social__mobile__id').href = 'tel:#';
  document.getElementById('social__linkedin__id').href = '#';
  document.getElementById('social__github__id').href = '#';
};

// resetForm
const resetForm = () => {
  console.log('Resetting form');
  document.getElementById('name').value = '';
  document.getElementById('job').value = '';
  document.getElementById('image').style.backgroundImage = '';
  document.getElementById('email').value = '';
  document.getElementById('phone').value = '';
  document.getElementById('linkedin').value = '';
  document.getElementById('github').value = '';
};

// resetPalette
// const resetPalette = () => {
//   document.getElementById('colorScheme1').checked = true;
// };

// resetProfileImage
const resetPreviewImage = () => {
  profilePreview.style.backgroundImage = 'none';
};

//resetColorTittlePalette
const resetColorTittlePalette = () => {
  if (tittle2 || tittle3 || tittle4 || tittle5 || tittle6.style.color !== '#54585a') {
    title1.style.color = '#438792';
    title2.style.color = '#54585a';
    title3.style.color = '#54585a';
    title4.style.color = '#54585a';
    title5.style.color = '#54585a';
    title6.style.color = '#54585a';
  }
};

const handleResetButtonClick = () => {
  resetCard();
  resetForm();
  resetPalette();
  resetPreviewImage();
  resetColorTittlePalette();
  // resetMainImage();
  resetPreviewImage();
};

buttonReset.addEventListener('click', handleResetButtonClick);

// Social Media Links
function updateContactLinks() {
  // Email
  const emailInput = document.querySelector('.js_email');
  const emailLink = document.getElementById('social__email__id');
  emailInput.addEventListener('input', function () {
    emailLink.href = 'mailto:' + emailInput.value;
  });

  // Phone
  const phoneInput = document.querySelector('.js_phone');
  const phoneLink = document.getElementById('social__mobile__id');
  phoneInput.addEventListener('input', function () {
    phoneLink.href = 'tel:' + phoneInput.value;
  });

  // LinkedIn
  const linkedInInput = document.querySelector('.js_linkedin');
  const linkedInLink = document.getElementById('social__linkedin__id');

  linkedInInput.addEventListener('input', function () {
    // URL base de LinkedIn
    const baseUrl = 'https://www.linkedin.com/in/';

    // Concatena la URL base con el nombre de usuario ingresado
    linkedInLink.href = baseUrl + linkedInInput.value;
  });

  // GitHub
  const gitHubInput = document.querySelector('.js_github');
  const gitHubLink = document.getElementById('social__github__id');
  gitHubInput.addEventListener('input', function () {
    const baseUrl = 'https://www.github.com/';
    gitHubLink.href = baseUrl + gitHubInput.value;
  });
}

document.addEventListener('DOMContentLoaded', updateContactLinks);
