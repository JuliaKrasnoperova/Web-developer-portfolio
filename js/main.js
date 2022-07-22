// Burger Menu
const navIcon = document.querySelector('.nav-icon');
const nav = document.querySelector('.nav');
const body = document.querySelector('body');
const navBg = document.querySelector('.nav__bg');

navIcon.addEventListener('click', function () {
    this.classList.toggle('nav-icon--active');
    nav.classList.toggle('nav--active');
    navBg.classList.toggle('nav__bg--active');
    body.classList.toggle('_locked');

});

const navLink = document.querySelectorAll(".nav__link")

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    navIcon.classList.remove('nav-icon--active');
    nav.classList.remove('nav--active');
    navBg.classList.remove('nav__bg--active');
    body.classList.remove('_locked');
}