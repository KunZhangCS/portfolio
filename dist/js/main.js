// Select DOM Items
const menuBtn = document.querySelector('.menu-btn')
const menu = document.querySelector('.menu')
const menuNav = document.querySelector('.menu-nav')
const menuBranding = document.querySelector('.menu-branding')
const navItems = document.querySelectorAll('.nav-item')
const sections = document.querySelectorAll('section')

// Set Initial State of Menu
let showMenu = false

menuBtn.addEventListener('click', toggleMenu)

function toggleMenu() {
    if (!showMenu) {
        menuBtn.classList.add('close')
        menu.classList.add('show')
        menuNav.classList.add('show')
        menuBranding.classList.add('show')
        navItems.forEach(item => item.classList.add('show'))

        showMenu = true
    } else closeMenu()
}

// Close Menu when a navItem is clicked
navItems.forEach(item => item.addEventListener('click', closeMenu))

function closeMenu() {
    menuBtn.classList.remove('close')
    menu.classList.remove('show')
    menuNav.classList.remove('show')
    menuBranding.classList.remove('show')
    navItems.forEach(item => item.classList.remove('show'))

    showMenu = false
}

// Set active item in the menu depending on scroll position
