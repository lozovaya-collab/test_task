const buttonOpenForm = document.querySelector('.first_block__button_form__rectangle')
const buttonWriteUs = document.querySelector('.first_block__button_form')
const formWriteUs = document.querySelector('.first_block__button_form__open')

const openForm = () => {
    buttonWriteUs.style.left = "269px"
    formWriteUs.style.left = "0"
}

const closeForm = () => {
    buttonWriteUs.style.left = "-75px"
    formWriteUs.style.left = "-345px"
}

buttonOpenForm.addEventListener('click', openForm)
formWriteUs.addEventListener('mouseleave', closeForm)