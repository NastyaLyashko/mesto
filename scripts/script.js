let popup = document.querySelector('.popup');
const buttonEdit = document.querySelector('.profile__edit-button');
const formSubmit = document.querySelector('.popup__container');
const buttonClose = document.querySelector('.popup__close-button');
const textUserName = document.querySelector('.profile__name');
const textUserJob = document.querySelector('.profile__job');
const inputUserName = document.querySelector('.popup__input_type_name');
const inputUserJob = document.querySelector('.popup__input_type_job');

const loadUserData = () => {
    inputUserName.value = textUserName.textContent;
    inputUserJob.value = textUserJob.textContent;
}

const saveUserData = () => {
    textUserName.textContent = inputUserName.value;
    textUserJob.textContent = inputUserJob.value;
}

const openPopup = (event) => {
    loadUserData();
    popup.classList.add('popup_opened');
}

const closePopup = (event) => {
    event.preventDefault();
    popup.classList.remove('popup_opened');
}

const saveForm = (event) => {
    saveUserData();
    closePopup(event);
}

buttonEdit.addEventListener('click', openPopup);
buttonClose.addEventListener('click', closePopup);
formSubmit.addEventListener('submit', saveForm);