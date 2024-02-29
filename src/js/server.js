

// const data = { 
//     palette: 1,
//     name: inputName.value,
//     job: inputJob.value, 
//     email: inputEmail.value, 
//     phone: inputPhone.value, 
//     linkedin: inputLinkedin.value, 
//     github: inputGithub.value,
//     photo: ''
// }


// const handleShare = (event) => {
//     event.preventDefault(); 

//     fetch('https://dev.adalab.es/api/card/', {
//         method: 'POST', 
//         body: JSON.stringify(data), 
//         headers: {'Content-type': 'application/json'}
//     })  .then((response) => response.json())
//         .then((data) => {
//             if(data.success){
//                 handleClickButtonCreate(); 
//                 //pintar la url (data.cardURL)
//             } else {
//                 //pintar en el html que ha habido un error
//             }
//         })
// }