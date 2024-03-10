const fr = new FileReader();
const fileField = document.querySelector('.js__profile-upload-btn');
const profileImage = document.querySelector('.js-image');
const profilePreview = document.querySelector('.js__profile-preview');

function getImage(e) {
  const myFile = e.currentTarget.files[0];
  fr.addEventListener('load', writeImage);
  fr.readAsDataURL(myFile);
}

function writeImage() {
  profileImage.src = `${fr.result}`;
  profileImage.objectFit = 'cover';
  profileImage.style.width = '100%';
  profileImage.style.height = '100%';
  console.log(profileImage);
  profilePreview.style.backgroundImage = `url(${fr.result})`;
}

fileField.addEventListener('change', getImage);
