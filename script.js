const navLinks = document.querySelector('.nav-links')
const logo_text = document.querySelector('.logo_text')
const menu_button = document.querySelector('.menu_button')
const home_section = document.querySelector('.home_section')

function onToggleMenu(e) {
    e.name = e.name === 'menu' ? 'arrow-forward' : 'menu'
    navLinks.classList.toggle('left-[10%]')
    navLinks.classList.toggle('shadow')
    navLinks.classList.toggle('nav_bar')
    navLinks.classList.toggle('bg-gray-900')
    navLinks.classList.toggle('shadow-2xl')
    logo_text.classList.toggle('hidden')
    menu_button.classList.toggle('bg-gradient')
    home_section.classList.toggle('blur')
}
const theme_btn = document.querySelector('.theme_btn')

function theme_change(e) {
    e.name = e.name === 'sunny' ? 'moon' : 'sunny'
    theme_btn.classList.toggle('text-gray-50')
}