const year = document.getElementById('year');
const navBtn = document.querySelector('#menu_btn');
const navMenu = document.querySelector('#navigation');
let isMenuActive = false;


// set year
year.textContent = new Date().getFullYear();

const navButtonLinks = document.querySelectorAll('#navigation li a');

navButtonLinks.forEach(link => {
  link.addEventListener('click', () => {
    const navIconMenu = `<i class="fa fa-bars"></i>`;
    navBtn.innerHTML = navIconMenu;
    isMenuActive = false;
    navMenu.classList.remove('show');
  });
});

navBtn.addEventListener('click', () => {
    if (!isMenuActive) {
        const navIconClose = `<i class="fa fa-bars"></i>`;
        navBtn.innerHTML = navIconClose;
        isMenuActive = true;
      } else {
        const navIconMenu = `<i class="fa fa-bars"></i>`;
        navBtn.innerHTML = navIconMenu;
        isMenuActive = false;
      }
    // Show and Hide Menu
    navMenu.classList.toggle('show');
  });