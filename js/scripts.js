const navigationLinks = document.querySelectorAll('.nav-item');
const menuToggle = document.getElementById('navbarText');
navigationLinks.forEach((element) => {
  element.addEventListener('click', () => {
    menuToggle.classList.remove('show');
  });
});
