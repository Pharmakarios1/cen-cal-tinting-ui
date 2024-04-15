const navOpen = document.querySelector('nav-items');
const hamburgerOpen = document.querySelector('mobile-view-button');


hamburgerOpen.addEventListener('click', () => {
  navOpen.classList.toggle('open');
});

hamburgerOpen.addEventListener('click', () => {
  navOpen.classList.toggle('close');
});