const buttonReset = document.querySelector('.js-reset-button');

const resetCard = () => {
  document.getElementById('card__title__id').innerHTML = 'Nombre Apellido';
  document.getElementById('card__job__id').innerHTML = 'Front-end developer';
  document.getElementById('social__email__id').href = '#';
  document.getElementById('social__mobile__id').href = 'tel:#';
  document.getElementById('social__linkedin__id').href = '#';
  document.getElementById('social__github__id').href = '#';
};

const resetForm = () => {
  document.getElementById('name').value = '';
  document.getElementById('job').value = '';
  document.getElementById('image').style.src = '';
  document.getElementById('email').value = '';
  document.getElementById('phone').value = '';
  document.getElementById('linkedin').value = '';
  document.getElementById('github').value = '';
};

const resetPreviewImage = () => {
  profilePreview.style.backgroundImage = 'none';
};

const handleResetButtonClick = () => {
  resetCard();
  resetForm();
  handleChangeColor(palette1);
  colorTitlePalette(0, palette1);
};

buttonReset.addEventListener('click', handleResetButtonClick);
