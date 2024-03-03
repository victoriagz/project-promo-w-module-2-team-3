const urlAPI = "https://dev.adalab.es/api/card/";

function obtainCardURL(event) {
  event.preventDefault();
  console.log(inputName.value);
  console.log(inputJob.value);
  console.log(inputEmail.value);
  console.log(inputLinkedin);
  console.log(inputLinkedin.value);
  console.log(inputGithub.value);
  console.log(inputImage.value);

  const data = {
    palette: 1,
    name: inputName.value,
    job: inputJob.value,
    email: inputEmail.value,
    phone: inputPhone.value,
    linkedin: inputLinkedin.value,
    github: inputGithub.value,
    photo: inputImage.style.backgroundImage,
  };


  fetch("https://dev.adalab.es/api/card/", {
    method: "POST",
    body: JSON.stringify(data),
    headers: { "Content-type": "application/json" },
  })
    .then((response) => response.json())
    .then((result) => showURL(result))
    .catch((error) => console.log(error));
}

function showURL(result) {
  const cardMessage = document.querySelector(".message_after");
  const cardLinkAnchor = document.querySelector(".js-card-link");

  if (result.success) {
    // Show the message and link
    cardMessage.classList.remove("collapsed");
    cardLinkAnchor.classList.remove("collapsed");
    cardLinkAnchor.setAttribute("href", result.cardURL);
    cardLinkAnchor.innerHTML = result.cardURL;
  } else {
    // Assuming you want to use the `cardLinkAnchor` to display errors for simplicity
    // It's better to use a separate, dedicated element for error messages
    cardLinkAnchor.innerHTML = "ERROR: " + result.error;
    cardLinkAnchor.classList.remove("collapsed");
  }
}


  
// function showURL(result) {
//   if (result.success) {
//     const cardMessage = document.querySelector(".message_after");
//     cardMessage.classList.remove("collapsed");

//     const cardLinkAnchor = document.querySelector(".card_link");
//     cardLinkAnchor.classList.remove("collapsed");
//     cardLinkAnchor.setAttribute("href", result.cardURL);
//     cardLinkAnchor.innerHTML = result.cardURL;
//   } else {
//     responseURL.innerHTML = "ERROR:" + result.error;
//   }
// }

const shareContainerForCardURL = document.querySelector(".js-share");
shareContainerForCardURL.addEventListener("click", obtainCardURL);

