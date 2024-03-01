// Creadas las paletas de colores de nuevo, la función no cogía bien las variables scss
const palette1 = {
  color1: '#114e4e',
  color2: '#438792',
  color3: '#a2deaf',
};
const palette2 = {
  color1: '#4B0101',
  color2: '#8B3A3A',
  color3: '#FF6347',
};
const palette3 = {
  color1: '#708090',
  color2: '#fe994a',
  color3: '#B7C9E2',
};
const palette4 = {
  color1: '#ffc8dd',
  color2: '#ffafcc',
  color3: '#bde0fe',
};
const palette5 = {
  color1: '#4a8fe7',
  color2: '#59d2fe',
  color3: '#44e5e7',
};
const palette6 = {
  color1: '#370075',
  color2: '#620097',
  color3: '#e2dada',
};

// Obtenemos del HTML las variables de los radiobuttons:
const radiobutton1 = document.querySelector('.js-radio1');
const radiobutton2 = document.querySelector('.js-radio2');
const radiobutton3 = document.querySelector('.js-radio3');
const radiobutton4 = document.querySelector('.js-radio4');
const radiobutton5 = document.querySelector('.js-radio5');
const radiobutton6 = document.querySelector('.js-radio6');

// Obtenemos del HTML las variables de las partes de la tarjeta para pintarlas:
const titleCard = document.querySelector('.js_preview_title');
const borderCard = document.querySelector('.js_border_card');
const circleCard = document.querySelectorAll('.js_circle_card');

// Creamos una función genérica para todos los radiobuttons pasando luego argumentos distintos.
// Aplicamos un bucle for en circleCard, porque con querySelectorAll hemos creado un array
// con los 4 circulos de las redes sociales.
function handleChangeColor(palette) {
  titleCard.style.color = palette.color1;
  borderCard.style.borderColor = palette.color2;
  for (let i = 0; i < circleCard.length; i++) {
    circleCard[i].style.borderColor = palette.color3;
  }
}

//Creamos un evento por cada radiobutton, para que aplique una paleta determinada:
radiobutton1.addEventListener('click', () => handleChangeColor(palette1));
radiobutton2.addEventListener('click', () => handleChangeColor(palette2));
radiobutton3.addEventListener('click', () => handleChangeColor(palette3));
radiobutton4.addEventListener('click', () => handleChangeColor(palette4));
radiobutton5.addEventListener('click', () => handleChangeColor(palette5));
radiobutton6.addEventListener('click', () => handleChangeColor(palette6));

let ChangeImage = document.querySelector('.js-image');
const button1 = document.querySelector('.js-button1');
const button2 = document.querySelector('.js-button2');
const button3 = document.querySelector('.js-button3');
const button4 = document.querySelector('.js-button4');
const button5 = document.querySelector('.js-button5');
const button6 = document.querySelector('.js-button6');
const title1 = document.querySelector('.js-container-title-1');
const title2 = document.querySelector('.js-container-title-2');
const title3 = document.querySelector('.js-container-title-3');
const title4 = document.querySelector('.js-container-title-4');
const title5 = document.querySelector('.js-container-title-5');
const title6 = document.querySelector('.js-container-title-6');
const totalTitles = document.querySelectorAll('.js-title-grey');
const backgroundSection = document.querySelector('.js-card_section');

function onClick1() {
  ChangeImage.src = "./images/dog-doctor.png";
  backgroundSection.style.backgroundImage =
    'url("https://i.pinimg.com/736x/c8/d5/09/c8d509ae55bbef2cc85a5245a04d850e.jpg")';
  console.log(1);
}
function onClick2() {
  ChangeImage.src = "./images/cat-professor.png";
  backgroundSection.style.backgroundImage =
    'url("https://i.pinimg.com/736x/fe/72/94/fe72948b42367756ae7ba55227d48506.jpg")';
  console.log(2);
}
function onClick3() {
  ChangeImage.src = "./images/dog-jalapenio.png";
  backgroundSection.style.backgroundImage =
    'url("https://www.gaulan.es/885327-large_default/veneto-marble-680935.jpg")';
  console.log(3);
}
function onClick4() {
  ChangeImage.src = "./images/cat-firefighter.png";
  backgroundSection.style.backgroundImage =
    'url("https://media.istockphoto.com/id/1459266752/es/foto/fondo-de-textura-de-m%C3%A1rmol-rosa-con-alta-resoluci%C3%B3n-en-patr%C3%B3n-sin-costuras-para-el-dise%C3%B1o-de.webp?b=1&s=170667a&w=0&k=20&c=Vv_-7xnMB2kcO5WwqxNihCUd3b0q7T2cuvS08gp1LnY=")';
  console.log(4);
}
function onClick5() {
  ChangeImage.src = "./images/dog-chef.png";
  backgroundSection.style.backgroundImage =
    'url("https://dbdzm869oupei.cloudfront.net/img/vinylrugs/preview/55714.png")';
  console.log(5);
}
function onClick6() {
  ChangeImage.src = "./images/cat-astronaut.png";
  backgroundSection.style.backgroundImage =
    'url("https://dbdzm869oupei.cloudfront.net/img/sticker/preview/38357.png")';
  console.log(6);
}

button1.addEventListener('click', () => onClick1());
button2.addEventListener('click', () => onClick2());
button3.addEventListener('click', () => onClick3());
button4.addEventListener('click', () => onClick4());
button5.addEventListener('click', () => onClick5());
button6.addEventListener('click', () => onClick6());

const buttonResetPalette = document.querySelector('.js-reset-palette');
function PaletteResetClick() {
  resetPreviewImage();
  handleChangeColor(palette1);
  ChangeImage.src = '/images/dog-doctor.png';
  backgroundSection.style.backgroundImage =
    'url("https://i.pinimg.com/736x/c8/d5/09/c8d509ae55bbef2cc85a5245a04d850e.jpg")';
  document.getElementById('colorScheme1').checked = true;
}
buttonResetPalette.addEventListener('click', PaletteResetClick);

const buttonAddImg = document.querySelector('.js-button_pic');

let ResetImageClick = () => {
  ChangeImage.src = '';
};

buttonAddImg.addEventListener('click', ResetImageClick);
