const palette1 = {
  color1: '#114e4e',
  color2: '#a2deaf',
  color3: '#438792',
};
const palette2 = {
  color1: '#4B0101',
  color2: '#FF6347',
  color3: '#8B3A3A',
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

let changeImage = document.querySelector('.js-image');
const button1 = document.querySelector('.js-button1');
const button2 = document.querySelector('.js-button2');
const button3 = document.querySelector('.js-button3');
const button4 = document.querySelector('.js-button4');
const button5 = document.querySelector('.js-button5');
const button6 = document.querySelector('.js-button6');
const backgroundSection = document.querySelector('.js-card_section');
let paletteId = 1;
const titleCard = document.querySelector('.js_preview_title');
const borderCard = document.querySelector('.js_border_card');
const circleCard = document.querySelectorAll('.js_circle_card');
const title1 = document.querySelector('.js-container-title-1');
const title2 = document.querySelector('.js-container-title-2');
const title3 = document.querySelector('.js-container-title-3');
const title4 = document.querySelector('.js-container-title-4');
const title5 = document.querySelector('.js-container-title-5');
const title6 = document.querySelector('.js-container-title-6');
const totalTitles = document.querySelectorAll('.js-title-grey');

// Función genérica para pintar la tarjeta

function handleChangeColor(palette) {
  titleCard.style.color = palette.color1;
  borderCard.style.borderColor = palette.color2;
  for (let i = 0; i < circleCard.length; i++) {
    circleCard[i].style.borderColor = palette.color3;
  }
}

//Función genérica para que cada título de paleta tenga un color:

function colorTitlePalette(clickedIndex, palette) {
  for (let i = 0; i < totalTitles.length; i++) {
    if (i === clickedIndex) {
      totalTitles[i].style.color = palette.color2;
    } else {
      totalTitles[i].style.color = '#54585a';
    }
  }
}

//Hacemos una función para cada radiobutton:

function onClick1() {
  handleChangeColor(palette1);
  colorTitlePalette(0, palette1);
  changeImage.src = './images/dog-doctor.png';
  backgroundSection.style.backgroundImage =
    'url("https://i.pinimg.com/736x/c8/d5/09/c8d509ae55bbef2cc85a5245a04d850e.jpg")';
  paletteId = 1;
}
function onClick2() {
  handleChangeColor(palette2);
  colorTitlePalette(1, palette2);
  changeImage.src = './images/cat-professor.png';
  backgroundSection.style.backgroundImage =
    'url("https://i.pinimg.com/736x/fe/72/94/fe72948b42367756ae7ba55227d48506.jpg")';
  paletteId = 2;
}
function onClick3() {
  handleChangeColor(palette3);
  colorTitlePalette(2, palette3);
  changeImage.src = './images/dog-jalapenio.png';
  backgroundSection.style.backgroundImage =
    'url("https://www.gaulan.es/885327-large_default/veneto-marble-680935.jpg")';
  paletteId = 3;
}
function onClick4() {
  handleChangeColor(palette4);
  colorTitlePalette(3, palette4);
  changeImage.src = './images/cat-firefighter.png';
  backgroundSection.style.backgroundImage =
    'url("https://media.istockphoto.com/id/1459266752/es/foto/fondo-de-textura-de-m%C3%A1rmol-rosa-con-alta-resoluci%C3%B3n-en-patr%C3%B3n-sin-costuras-para-el-dise%C3%B1o-de.webp?b=1&s=170667a&w=0&k=20&c=Vv_-7xnMB2kcO5WwqxNihCUd3b0q7T2cuvS08gp1LnY=")';
  paletteId = 4;
}
function onClick5() {
  handleChangeColor(palette5);
  colorTitlePalette(4, palette5);
  changeImage.src = './images/dog-chef.png';
  backgroundSection.style.backgroundImage =
    'url("https://dbdzm869oupei.cloudfront.net/img/vinylrugs/preview/55714.png")';
  paletteId = 5;
}
function onClick6() {
  handleChangeColor(palette6);
  colorTitlePalette(5, palette6);
  changeImage.src = './images/cat-astronaut.png';
  backgroundSection.style.backgroundImage =
    'url("https://dbdzm869oupei.cloudfront.net/img/sticker/preview/38357.png")';
  paletteId = 6;
}

button1.addEventListener('click', () => onClick1());
button2.addEventListener('click', () => onClick2());
button3.addEventListener('click', () => onClick3());
button4.addEventListener('click', () => onClick4());
button5.addEventListener('click', () => onClick5());
button6.addEventListener('click', () => onClick6());

const buttonResetPalette = document.querySelector('.js-reset-palette');

function paletteResetClick() {
  resetPreviewImage();
  changeImage.src = './images/dog-doctor.png';
  backgroundSection.style.backgroundImage =
    'url("https://i.pinimg.com/736x/c8/d5/09/c8d509ae55bbef2cc85a5245a04d850e.jpg")';
  document.getElementById('colorScheme1').checked = true;
}
buttonResetPalette.addEventListener('click', paletteResetClick);

const buttonAddImg = document.querySelector('.js-button_pic');

let resetImageClick = () => {
  changeImage.src = '';
};

buttonAddImg.addEventListener('click', resetImageClick);
