const mobileNav = document.getElementById('mobile-dropDown');
const asideMobile = document.getElementById('asideMobile');
mobileNav.addEventListener('click', () => {
    asideMobile.classList.toggle('mobile-active');
})