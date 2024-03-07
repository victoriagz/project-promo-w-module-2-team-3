// RESET BUTTON FILE

//Variable
const buttonReset = document.querySelector('.js-reset-button');

// resetCard
const resetCard = () => {
  console.log('Resetting card');
  document.getElementById('card__title__id').innerHTML = 'Nombre Apellido';
  document.getElementById('card__job__id').innerHTML = 'Front-end developer';
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
  document.getElementById('image').style.src = '';
  document.getElementById('email').value = '';
  document.getElementById('phone').value = '';
  document.getElementById('linkedin').value = '';
  document.getElementById('github').value = '';
};

// resetProfileImage
const resetPreviewImage = () => {
  profilePreview.style.backgroundImage = 'none';
};

const handleResetButtonClick = () => {
  resetCard();
  resetForm();
  handleChangeColor(palette1);
  colorTitlePalette(0, palette1);
  // resetPreviewImage();
  //resetColorTittlePalette();
  // resetMainImage();
};

buttonReset.addEventListener('click', handleResetButtonClick);
