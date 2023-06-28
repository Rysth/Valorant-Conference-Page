const navigationLinks = document.querySelectorAll('.nav-item');
const menuToggle = document.getElementById('navbarText');
const buttonToggle = document.querySelector('#navbar-toggler');
const buttonIcon = document.querySelector('#navbar-icon');

buttonToggle.addEventListener('click', () => {
  buttonIcon.classList.toggle('fa-xmark');
});

navigationLinks.forEach((element) => {
  element.addEventListener('click', () => {
    menuToggle.classList.remove('show');
    if (buttonIcon.classList.contains('fa-xmark'))
      buttonIcon.classList.remove('fa-xmark');
  });
});
