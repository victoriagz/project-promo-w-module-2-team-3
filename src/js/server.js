
const inputName 
const inputJob 
const inputEmail 
const inputPhone 
const inputLinkedin  
const inputGithub 

const data = {
    palette: '', 
    inputName.value: '',

}


const handleShare = (event) => {
    event.preventDefault(); 

    fetch('https://dev.adalab.es/api/card/', {
        method: 'POST', 
        body: JSON.stringify(data), 
        headers: {'Content-type': 'application/json'}
    })  .then((response) => response.json())
        .then((data) => {
            if(data.success){
                //pintar la url (data.cardURL)
            } else {
                //pintar en el html que ha habido un error
            }
        })
}