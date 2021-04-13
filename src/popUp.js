const popup = document.querySelector('.popup')
const submitButton = document.querySelectorAll('.submitBtn')
const buttonOK = document.querySelector('.popup__form_text_button')

const openPopup = () => {
    console.log('open');
    popup.style.display = 'flex'
    popup.style.overflow = 'visibility'
}
const closePopup = () => {
    popup.style.display = 'none'
    popup.style.overflow = 'hidden'
}

for (let i = 0; i < submitButton.length; i++) {
    submitButton[i].addEventListener('click', openPopup)
}

buttonOK.addEventListener('click', closePopup)