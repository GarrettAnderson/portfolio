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
    // menuIcon.style.visibility = 'hidden'
}

function closeMenu() {
    console.log('close mobile menu')
    navMenu.classList.remove('open')

}

menuIcon.addEventListener('click', openMenu)
closeMenuIcon.addEventListener('click', closeMenu)