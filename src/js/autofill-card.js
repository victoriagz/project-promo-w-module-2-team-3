const titlePreview = document.querySelector('.js_preview_title');
const jobPreview = document.querySelector('.js_preview_job');

inputName.addEventListener('input', (event) => {
  titlePreview.innerHTML = event.target.value;
});
inputJob.addEventListener('input', (event) => {
  jobPreview.innerHTML = event.target.value;
});
