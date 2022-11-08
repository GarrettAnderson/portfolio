// when user clicks on burger menu icon, toggle the ul
    // 
    // the header increases in height with a nice ease in animation
    // 

const menuIcon = document.querySelector('.burger-icon-menu')
const closeMenuIcon = document.querySelector('.close-mobile-menu-icon')
const navMenu = document.querySelector('ul')
const header = document.querySelector('header')


function openMenu() {
    navMenu.classList.add('open')
    menuIcon.style.display = 'none'
    closeMenuIcon.style.display = 'inline'
}

function closeMenu() {
    navMenu.classList.remove('open')
    closeMenuIcon.style.display = 'none'
    menuIcon.style.display = 'inline'
}

menuIcon.addEventListener('click', openMenu)
closeMenuIcon.addEventListener('click', closeMenu)