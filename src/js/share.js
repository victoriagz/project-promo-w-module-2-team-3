const urlAPI = "https://dev.adalab.es/api/card/";

function obtainCardURL(event) {
  event.preventDefault();

  const data = {
    palette: paletteId,
    name: inputName.value,
    job: inputJob.value,
    email: inputEmail.value,
    phone: inputPhone.value,
    linkedin: inputLinkedin.value,
    github: inputGithub.value,
    photo: inputImage.src,
  };

  fetch("https://dev.adalab.es/api/card/", {
    method: "POST",
    body: JSON.stringify(data),
    headers: { "Content-type": "application/json" },
  })
    .then((response) => response.json())
    .then((result) => {
      showURL(result);
      fillTwitterURL(result);
    })
    .catch((error) => console.log(error));
}

function showURL(result) {
  const cardMessage = document.querySelector(".message_after");
  const cardLinkAnchor = document.querySelector(".js-card-link");
  if (result.success) {
    cardMessage.classList.remove("collapsed");
    cardLinkAnchor.classList.remove("collapsed");
    cardLinkAnchor.setAttribute("href", result.cardURL);
    cardLinkAnchor.innerHTML = result.cardURL;
  } else {
    cardLinkAnchor.innerHTML = "ERROR: " + result.error;
  }
}

function fillTwitterURL(result) {
  if (result.success) {
    const twitterButton = document.querySelector('.js-twitter-share-button');
    let twitterBaseURL = 'https://twitter.com/intent/tweet';
    let twitterURL = `${twitterBaseURL}?text=Mira qué tarjeta más bonita ❤️&hashtags=PromoW,Adalab&url=${encodeURIComponent(result.cardURL)}`;
    twitterButton.setAttribute('href', twitterURL);
  }
}

const shareContainerForCardURL = document.querySelector(".js-share");
shareContainerForCardURL.addEventListener("click", obtainCardURL);