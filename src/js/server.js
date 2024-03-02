const fileReader = new FileReader();
const loadImage = document.querySelector('#loadImage');

function loadPhoto() {
    fileReader.readAsDataURL(loadImage.files[0]);
}

loadImage.addEventListener('load', loadPhoto);

function createCard() {
    const baseURL = 'https://dev.adalab.es/api/card/';

    fetch(baseURL, {
        method: 'POST',
        body: JSON.stringify({
            palette: 1,
            name: 'María García',
            job: 'Front-end developer',
            phone: '+34 666666666',
            email: 'mariagar@example.com',
            linkedin: 'mariagar',
            github: 'mariagar',
            photo: 'data:image/png;base64,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',
        }),
        headers: {
            'Content-type': 'application/json',
        },
    })
        .then((response) => response.json())
        .then((data) => {
            const linkElement = document.createElement('a');
            linkElement.href = data.cardURL;
            linkElement.textContent = data.cardURL;
            const linkMessage = document.querySelector('#card_link');
            linkMessage.appendChild(linkElement);
        });
}

document
    .querySelector('.js-button-create')
    .addEventListener('click', createCard);

// DATOS QUE VAMOS A NECESITAR :

// palette: 2,
//         name: inputName.value,
//         job: inputJob.value,
//         phone: inputPhone.value,
//         email: inputEmail.value,
//         linkedin: inputLinkedin.value,
//         github: inputGithub.value,
//         photo: fileReader.result,
