

const data = {
    palette: 1,
    name: inputName.value,
    job: inputJob.value,
    email: inputEmail.value,
    phone: inputPhone.value,
    linkedin: inputLinkedin.value,
    github: inputGithub.value,
    photo: ''
}

const urlAPI = 'https://dev.adalab.es/api/card/';


const cardLink = document.querySelector('.js-card-link');
console.log('urlCard');

const twitterButton = document.querySelector('.js-twitter-button');
const urlTwitter = document.querySelector('.js-twitter-share-button a');


const handleShare = (event) => {
    event.preventDefault();

    fetch(urlAPI, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {'Content-type': 'application/json'}
    })  .then((response) => response.json())
        .then((data) => {
        if(data.success){
            handleClickButtonCreate(); 
            //pintar la url (data.cardURL)
            cardLink.innerHTML = data.cardURL; 
            console.log(data.cardURL);

            // const textCard = "Echa un vistazo a mi tarjeta de visita 🌱 ";
            // responseElement.innerHTML = `
            //   <h3 class="cardcreated-js">La tarjeta ha sido creada:</h3>
            //   <p><a class="linkcard" target:_blank href="${resultData.cardURL}">${resultData.cardURL}</a></p>`;
            // responseElement.classList.remove("hidden");
            // btnTwitter.classList.remove("hidden");
            // linkTwitter.setAttribute(
            //   "href",
            //   `https://twitter.com/intent/tweet?text=${textCard}&url=${resultData.cardURL}&hashtags=Adalabers,JavaScript,PromoMileva,week7of12`
            // );
            // createCard.setAttribute("disabled", true);
            // createCard.style.opacity = "0.5";
            // localStorage.setItem("data", JSON.stringify(data));


        // } else {
        //     //pintar en el html que ha habido un error
        //     responseElement.innerHTML =
        //     "<p>Tienes que rellenar algunos datos.</p>";
        //     responseElement.classList.remove("collapsed");
            
        }
        
    })
}



// const handleShare = (event) => {
//     event.preventDefault();

//     fetch(urlAPI, {
//         method: 'POST',
//         body: JSON.stringify(data),
//         headers: {'Content-type': 'application/json'}
//     })  .then((response) => response.json())
//     .then((data) => {
//         if(data.success){
//             handleClickButtonCreate(); // Asumiendo que esta función maneja la lógica de éxito, como cambiar el estado de algún UI elemento.
//             // Actualizar la URL en el HTML
//             cardLink.href = data.cardURL;
//             cardLink.textContent = data.cardURL;
//             // Si quieres agregar dinámicamente el enlace para compartir en Twitter:

//             const twitterText = `¡Mira mi nueva tarjeta de visita digital! ${data.cardURL}`;
//             const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(twitterText)}`;
//             twitterButton.href = twitterUrl;
//             // Mostrar la sección con el enlace y el botón para compartir
//             document.querySelector(.drop_down’).classList.remove(‘collapsed’);
//         } else {
//             // Mostrar un mensaje de error en el HTML
//             // Puedes definir un elemento para mostrar errores, por ejemplo: <p class=“error_message”></p>
//             document.querySelector(‘.error_message’).textContent = ‘Ha ocurrido un error al crear la tarjeta. Por favor, inténtalo de nuevo.’;
//         }
//     })
//     .catch((error) => {
//         console.error(‘Error:‘, error);
//         // Mostrar un mensaje de error en el HTML
//         document.querySelector(‘.error_message’).textContent = ‘Ha ocurrido un error al conectar con el servidor. Por favor, verifica tu conexión y vuelve a intentarlo.’;
//     });
// }



