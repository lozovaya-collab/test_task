const menuIcons = document.querySelector('.header__menu_icons')
const menuLogo = document.querySelector('.header__menu_logo')
const headerWrapper = document.querySelector('.header__wrapper')
const headerMenu = document.querySelector('.header__menu')

const scroll = () => {

    if (screen.width > 768) {
        if (pageYOffset !== 0) {
            menuLogo.style.display = 'none'
            menuIcons.style.display = 'flex'
            headerMenu.style.position = 'fixed'
            headerMenu.style.marginTop = '0'
            headerMenu.style.width = '100%'
            headerMenu.style.height = '120px'
            headerMenu.style.borderRadius = '0'
        } else {
            menuLogo.style.display = 'block'
            menuLogo.style.marginTop = '60px'
            menuIcons.style.display = 'flex'
            headerMenu.style.position = 'none'
            headerMenu.style.marginTop = '-100px'
            headerMenu.style.width = '100px'
            headerMenu.style.height = '200px'
            headerMenu.style.borderRadius = '50px'
        }
    }


}

document.addEventListener('scroll', scroll)