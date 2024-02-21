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

// Obtenemos del HTML las variables de los radiobuttons:
const radiobutton1 = document.querySelector('.js-radio1');
const radiobutton2 = document.querySelector('.js-radio2');
const radiobutton3 = document.querySelector('.js-radio3');

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





// BOTON RESET PARA VOLVER A PALETA 1
const buttonResetPalette = document.querySelector('.js-reset-palette');
function PaletteResetClick() {
  handleChangeColor(palette1); 
}
buttonResetPalette.addEventListener('click', PaletteResetClick);


