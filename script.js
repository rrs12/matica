const navLinks = document.querySelector('.nav-links')
const logo_text = document.querySelector('.logo_text')
const menu_button = document.querySelector('.menu_button')
const home_section = document.querySelector('.home_section')

function onToggleMenu(e) {
    e.name = e.name === 'menu' ? 'arrow-forward' : 'menu'
    navLinks.classList.toggle('left-[5%]')
    navLinks.classList.toggle('shadow')
    navLinks.classList.toggle('bg-gray-900')
    logo_text.classList.toggle('hidden')
    menu_button.classList.toggle('bg-gradient')
    menu_button.classList.toggle('border-1')
    menu_button.classList.toggle('ml-[400px]')
}
const theme_btn = document.querySelector('.theme_btn')

function theme_change(e) {
    e.name = e.name === 'sunny' ? 'moon' : 'sunny'
    theme_btn.classList.toggle('text-gray-50')
}

var typed = new Typed(".typing", {
    strings: ["Faster", "Better"],
    typeSpeed: 80,
    backSpeed: 80,
    loop: true
});