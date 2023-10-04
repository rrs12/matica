const navLinks = document.querySelector('.nav-links')
const logo_text = document.querySelector('.logo_text')
const menu_button = document.querySelector('.menu_button')
const home_section = document.querySelector('.home_section')
const features_section = document.querySelector('.features')
const main_navbar = document.querySelector('#unhide')

function onToggleMenu(e) {
    e.name = e.name === 'menu' ? 'close' : 'menu'
    navLinks.classList.toggle('left-[3%]')
    
    navLinks.classList.toggle('shadow')
    navLinks.classList.toggle('bg-[#2f1c02]')
    home_section.classList.toggle('hidden')
    features_section.classList.toggle('hidden')
    main_navbar.classList.toggle('hidden')
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

function hide() {
    menu_button.name = menu_button === 'menu' ? 'close' : 'menu'
    navLinks.classList.toggle('left-[3%]')
    navLinks.classList.toggle('md:left-[1%]')
    navLinks.classList.toggle('shadow')
    navLinks.classList.toggle('bg-[#2f1c02]')
    navLinks.classList.toggle('lg:bg-transparent')
    home_section.classList.toggle('hidden')
    features_section.classList.toggle('hidden')
    main_navbar.classList.toggle('hidden')
    home_section.classList.toggle('lg:block')
    features_section.classList.toggle('lg:block')
}

var toTopButton = document.getElementById("to-top-button");

// When the user scrolls down 200px from the top of the document, show the button
window.onscroll = function () {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        toTopButton.classList.remove("hidden");
    } else {
        toTopButton.classList.add("hidden");
    }
}

// When the user clicks on the button, smoothy scroll to the top of the document
function goToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}