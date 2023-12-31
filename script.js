const navLinks = document.querySelector('.nav-links')
const logo_text = document.querySelector('.logo_text')
const menu_button = document.querySelector('.menu_button')
const home_section = document.querySelector('.home_section')
const features_section = document.querySelector('.features')
const main_navbar = document.querySelector('#unhide')

if(localStorage.getItem('color-theme')===null){
    localStorage.setItem('color-theme', 'dark');
}


function onToggleMenu(e) {
    e.name = e.name === 'menu' ? 'close' : 'menu'
    navLinks.classList.toggle('left-[3%]')

    navLinks.classList.toggle('shadow')
    navLinks.classList.toggle('dark:bg-[#0c0c0c]')
    navLinks.classList.toggle('bg-gray-200')
    home_section.classList.toggle('hidden')
    features_section.classList.toggle('hidden')
    main_navbar.classList.toggle('hidden')
}
const theme_btn = document.querySelector('.theme_btn')


function theme_change(e) {
    e.name = e.name === 'sunny' ? 'moon' : 'sunny'
    document.body.classList.toggle('dark')
    localStorage.setItem('theme','dark')
    tailwind.config = {
        darkMode: 'class',
    }
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
    navLinks.classList.toggle('lg:shadow-none')
    navLinks.classList.toggle('dark:bg-[#0c0c0c]')
    navLinks.classList.toggle('bg-gray-200')
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
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// redirect links
function discord() {
    window.open("https://discord.gg/94cbgpS3ex")
}

function X() {
    window.open("https://twitter.com")
}

function instagram() {
    window.open("https://instagram.com")
}

function linkedin() {
    window.open("https://www.linkedin.com/in/matica-lab-099b65294")
}


function modalBackdrop() {
    const backdrops = document.getElementsByClassName('bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-40');
    console.log("fine")
    document.body.addEventListener("click", function () {
            for (const backdrop of backdrops) {
                backdrop.style.display = "none"
            }
    });

}

function reload(){
    window.location.reload();
}



var themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');
var themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');


// Change the icons inside the button based on previous settings
if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    themeToggleLightIcon.classList.remove('hidden');
} else {
    themeToggleDarkIcon.classList.remove('hidden');
}


var themeToggleBtn = document.getElementById('theme-toggle');

if (localStorage.getItem('color-theme') === 'light') {
    document.documentElement.classList.remove('dark');
} 
else {
    document.documentElement.classList.add('dark');
}
themeToggleBtn.addEventListener('click', function() {

    // toggle icons inside button
    themeToggleDarkIcon.classList.toggle('hidden');
    themeToggleLightIcon.classList.toggle('hidden');

    // if set via local storage previously
    if (localStorage.getItem('color-theme')) {
        if (localStorage.getItem('color-theme') === 'light') {
            document.documentElement.classList.add('dark');
            localStorage.setItem('color-theme', 'dark');
        } 
        else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('color-theme', 'light');
        }

    // if NOT set via local storage previously
    } else {
        if (document.documentElement.classList.contains('dark')) {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('color-theme', 'light');
        } else {
            document.documentElement.classList.add('dark');
            localStorage.setItem('color-theme', 'dark');
        }
    }
    
});



var themeToggleDarkIcon1 = document.getElementById('theme-toggle-dark-icon1');
var themeToggleLightIcon1 = document.getElementById('theme-toggle-light-icon1');


// Change the icons inside the button based on previous settings
if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    themeToggleLightIcon1.classList.remove('hidden');
} else {
    themeToggleDarkIcon1.classList.remove('hidden');
}


var themeToggleBtn1 = document.getElementById('theme-toggle1');

if (localStorage.getItem('color-theme') === 'light') {
    document.documentElement.classList.remove('dark');
} 
else {
    document.documentElement.classList.add('dark');
}
themeToggleBtn1.addEventListener('click', function() {

    // toggle icons inside button
    themeToggleDarkIcon1.classList.toggle('hidden');
    themeToggleLightIcon1.classList.toggle('hidden');

    // if set via local storage previously
    if (localStorage.getItem('color-theme')) {
        if (localStorage.getItem('color-theme') === 'light') {
            document.documentElement.classList.add('dark');
            localStorage.setItem('color-theme', 'dark');
        } 
        else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('color-theme', 'light');
        }

    // if NOT set via local storage previously
    } else {
        if (document.documentElement.classList.contains('dark')) {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('color-theme', 'light');
        } else {
            document.documentElement.classList.add('dark');
            localStorage.setItem('color-theme', 'dark');
        }
    }
    
});