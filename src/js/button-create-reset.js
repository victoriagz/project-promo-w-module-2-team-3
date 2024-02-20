
const resetForm = document.querySelector('.js-reset-button');
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


// Reset-button Preview

const handleResetForm = () => {
  console.log('The user has clicked the button');
  document.getElementById('card__title__id').innerHTML = 'Nombre Apellido';
  document.getElementById('card__job__id').innerHTML = 'Front-end developer';
  document.getElementById('card__img__id').style.backgroundImage = 'url(https://i.pinimg.com/564x/da/f7/8c/daf78c186a9d4fa2bcfd1d84d9c956ca.jpg)';
  document.getElementById('social__email__id').href = '#';
  document.getElementById('social__mobile__id').href = 'tel:#';
  document.getElementById('social__linkedin__id').href = '#';
  document.getElementById('social__github__id').href = '#';
};

resetForm.addEventListener('click', handleResetForm);

