const navLinks = document.querySelector('.nav-links')
        function onToggleMenu(e){
            e.name = e.name === 'menu' ? 'close' : 'menu'
            navLinks.classList.toggle('left-[20%]')
            navLinks.classList.toggle('shadow')
            navLinks.classList.toggle('nav_bar')
        }