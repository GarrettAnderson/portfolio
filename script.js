// when user clicks on burger menu icon, toggle the ul
    // 
    // the header increases in height with a nice ease in animation
    // 

const menuIcon = document.querySelector('.burger-icon-menu')
const navMenu = document.querySelector('ul')
const header = document.querySelector('header')

function openMenu() {
    navMenu.classList.toggle('open')
}

menuIcon.addEventListener('click', openMenu)