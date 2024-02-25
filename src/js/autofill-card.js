
const titlePreview = document.querySelector('.js_preview_title'); //variable del preview del nombre
//const inputName = document.querySelector('.js_name'); (declaradas en el archivo de arrows)
const jobPreview = document.querySelector('.js_preview_job');
//const inputJob = document.querySelector('.js_job_position'); (declaradas en el archivo de arrows)

// Rellenar automáticamente cardpreview al escribir en el formulario
inputName.addEventListener('input', (event) => {
    titlePreview.innerHTML = event.target.value;
});
inputJob.addEventListener('input', (event) => {
    jobPreview.innerHTML = event.target.value;
});