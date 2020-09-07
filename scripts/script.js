let popup = document.querySelector('.popup');
let buttonEdit = document.querySelector('.profile__edit-button');
let formSubmit = document.querySelector('.popup__container');
let buttonClose = document.querySelector('.popup__close-button');
let textUserName = document.querySelector('.profile__name');
let textUserJob = document.querySelector('.profile__job');
let inputUserName = document.querySelector('.popup__input_type_name');
let inputUserJob = document.querySelector('.popup__input_type_job');

let loadUserData = () => {
    inputUserName.value = textUserName.textContent;
    inputUserJob.value = textUserJob.textContent;
}

let saveUserData = () => {
    textUserName.textContent = inputUserName.value;
    textUserJob.textContent = inputUserJob.value;
}

let openPopup = (event) => {
    loadUserData();
    popup.classList.add('popup_opened');
}

let closePopup = (event) => {
    event.preventDefault();
    popup.classList.remove('popup_opened');
}

let saveForm = (event) => {
    saveUserData();
    closePopup(event);
}

buttonEdit.addEventListener('click', openPopup);
buttonClose.addEventListener('click', closePopup);
formSubmit.addEventListener('submit', saveForm);