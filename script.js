const navLinks = document.querySelector('.nav-links')
        function onToggleMenu(e){
            e.name = e.name === 'menu' ? 'close' : 'menu'
            navLinks.classList.toggle('left-[10%]')
            navLinks.classList.toggle('shadow')
            navLinks.classList.toggle('nav_bar')
            navLinks.classList.toggle('bg-gray-900')
        }