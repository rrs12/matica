const navLinks = document.querySelector('.nav-links')
const logo_text = document.querySelector('.logo_text')
const menu_button = document.querySelector('.menu_button')
        function onToggleMenu(e){
            e.name = e.name === 'menu' ? 'close' : 'menu'
            navLinks.classList.toggle('left-[10%]')
            navLinks.classList.toggle('shadow')
            navLinks.classList.toggle('nav_bar')
            navLinks.classList.toggle('bg-gray-900')
            navLinks.classList.toggle('shadow-lg')
            logo_text.classList.toggle('hidden')
            menu_button.classList.toggle('bg-gradient')
        }