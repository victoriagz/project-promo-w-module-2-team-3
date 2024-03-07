// function obtainCardURL(data) {
//   fetch(urlAPI, {
//     method: "POST",
//     body: data,
//     headers: { "Content-type": "application/json" },
//   })
//     .then((response) => response.json())
//     .then((result) => console.log(result))
//     .catch((error) => console.log(error));
// }

// function showURL(result) {
//     if(result.success) {
//         responseURL.innerHTML = '<a href=' + result.cardURL + '>' + result.cardURL + '</a>';
//     } else {
//         responseURL.innerHTML = 'ERROR:' + result.error;
//     }
// }



//   const urlAPI = 'https://dev.adalab.es/api/card/'; 
// //Métodos HTTP - GET | POST | PUT | DELETE | PATCH
  
//   // Correcting variable names and selection based on provided HTML
//   const newCardLink = document.querySelector('.js-card-link');
//   const twitterBtn = document.querySelector('.js-twitter-share-button');
//   const sectionCardCreate = document.querySelector('.js-share');
//   const errorMessage = document.querySelector('.js-text-share'); // Assuming you want to show errors here
//   const createCardBtn = document.querySelector('.js_button_create_card');
  
//   const handleShare = (event) => {
//     event.preventDefault();
  
//     fetch(urlAPI, {
//         method: 'POST',
//         body: JSON.stringify(data),
//         headers: {'Content-type': 'application/json'}
//     })
//     .then((response) => response.json())
//     .then((responseJson) => {
//         console.log(responseJson);
//         if (responseJson.success) {
//           sectionCardCreate.classList.remove('collapsed');
//           errorMessage.innerHTML = ''; // Assuming you have a way to display success or reset this message
//           newCardLink.innerHTML = responseJson.cardURL; // Displaying the URL
//           newCardLink.href = responseJson.cardURL; // Making the link clickable
//           twitterBtn.href += responseJson.cardURL; // Preparing the Twitter share link
//           createCardBtn.disabled = true; // Optionally disable the button to prevent multiple submissions
//           createCardBtn.classList.add('button-disabled');
//           localStorage.setItem('newCardUrl', JSON.stringify(responseJson.cardURL));
//         } else {
//           sectionCardCreate.classList.add('collapsed');
//           errorMessage.innerHTML = 'Debes rellenar todos los campos'; // Display error message
//           console.log('error');
//         }
//     })
//     .catch((error) => {
//       console.error('Error:', error);
//       errorMessage.innerHTML = 'Error creating the card'; // Handling fetch errors
//     });
//   };
  
//   // Assuming you have a way to trigger handleShare, for example, on button click
//   createCardBtn.addEventListener('click', handleShare);
  