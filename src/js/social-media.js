function updateContactLinks() {
  const emailInput = document.querySelector('.js-email');
  const emailLink = document.getElementById('social__email__id');
  emailInput.addEventListener('input', function () {
    emailLink.href = 'mailto:' + emailInput.value;
  });

  const phoneInput = document.querySelector('.js-phone');
  const phoneLink = document.getElementById('social__mobile__id');
  phoneInput.addEventListener('input', function () {
    phoneLink.href = 'tel:' + phoneInput.value;
  });

  const linkedInInput = document.querySelector('.js-linkedin');
  const linkedInLink = document.getElementById('social__linkedin__id');

  linkedInInput.addEventListener('input', function () {
    const baseUrl = 'https://www.linkedin.com/in/';

    linkedInLink.href = baseUrl + linkedInInput.value;
  });

  const gitHubInput = document.querySelector('.js-github');
  const gitHubLink = document.getElementById('social__github__id');
  gitHubInput.addEventListener('input', function () {
    const baseUrl = 'https://www.github.com/';
    gitHubLink.href = baseUrl + gitHubInput.value;
  });
}

document.addEventListener('DOMContentLoaded', updateContactLinks);
