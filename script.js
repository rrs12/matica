const navLinks = document.querySelector('.nav-links')
        function onToggleMenu(e){
            e.name = e.name === 'menu' ? 'close' : 'menu'
            navLinks.classList.toggle('left-[60%]')
            navLinks.classList.toggle('shadow')
            navLinks.classList.toggle('text-cyan-400')
            navLinks.classList.toggle('bg-sky-900')
        }
