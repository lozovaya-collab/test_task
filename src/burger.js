const burger = document.querySelector('.header__burger')
const imageBurger = document.querySelector('.header__burger img')
const header = document.querySelector('.header')
const menuBurger = document.querySelector('.header__burger_menu')

let isOpen = false
const openBurger = () => {
    if (!isOpen) {
        isOpen = true
        burger.style.backgroundColor = '#ff431e'
        imageBurger.src = "../src/assets/burger_close.svg"
        menuBurger.style.right = '0'
    } else {
        isOpen = false
        burger.style.backgroundColor = 'white'
        imageBurger.src = "../src/assets/burger.svg"
        menuBurger.style.right = '-768px'
    }
}
burger.addEventListener('touchend', openBurger)