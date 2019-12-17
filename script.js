let mobileIcon = document.getElementById('mobile-icon');
let mobileNav = document.getElementById('mobile-nav');

mobileIcon.addEventListener('click', () => {
  mobileNav.classList.toggle('open');
  console.log('mobile clicked');
});

function closeSideMenu() {
  mobileNav.classList.toggle('open');
}
