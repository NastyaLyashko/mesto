import Card from './card.js';
//mport FormValidation from './formValidator.js';
import {validationConfig, initialCards} from './validationConfig.js';

const popupEdit = document.querySelector('.popup_edit');
const buttonEdit = document.querySelector('.profile__edit-button');
const formSubmit = document.querySelector('.popup__container');
const buttonClose = document.querySelector('.popup__close-button');
const textUserName = document.querySelector('.profile__name');
const textUserJob = document.querySelector('.profile__job');
const inputUserName = document.querySelector('.popup__input_type_name');
const inputUserJob = document.querySelector('.popup__input_type_job');


const closePopupEsc = (event) => {
    const popupOpened  = document.querySelector('.popup_opened');
    if (event.key === 'Escape' && popupOpened) {
        closePopup(popupOpened);
    }
}

const closePopupOverlay = (event) => {
    const popupOpened = document.querySelector('.popup_opened');
    if (event.target === event.currentTarget) {
        closePopup(popupOpened);
    }
}

function openPopup (popup) {
    popup.classList.add('popup_opened');
    document.addEventListener('keydown', closePopupEsc);
}

function closePopup (popup) {
    popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', closePopupEsc);
}


const loadUserData = () => {
    inputUserName.value = textUserName.textContent;
    inputUserJob.value = textUserJob.textContent;
}

const saveUserData = () => {
    textUserName.textContent = inputUserName.value;
    textUserJob.textContent = inputUserJob.value;
}

const editPopup = (event) => {
    loadUserData();
    openPopup(popupEdit)
}

const saveForm = (event) => {
    event.preventDefault();
    saveUserData();
    closePopup (popupEdit);
}

buttonEdit.addEventListener('click', editPopup);
buttonClose.addEventListener('click', () => {closePopup (popupEdit)});
formSubmit.addEventListener('submit', saveForm);
popupEdit.addEventListener('click', closePopupOverlay);

const popupPlace = document.querySelector('.popup_place');
const formSubmitPlace = document.querySelector('.popup__container_place');
const buttonClosePlace = document.querySelector('.popup__close-button_place');
const buttonAdd = document.querySelector('.profile__add-button');
const photoImage = document.querySelector('.popup__img');
const inputPlaceName = document.querySelector('.popup__input_type_place');
const inputPlaceImg = document.querySelector('.popup__input_type_img');
const popupPhoto = document.querySelector('.popup_photo');
const photoCloseButton = document.querySelector('.popup__close-button_photo');
const photoCaption = document.querySelector('.popup__caption');
const cards = document.querySelector('.elements__list');

const openPopupPhoto = (name, link) => {
    photoImage.src = link;
    photoImage.alt = name;
    photoCaption.textContent = name;
    openPopup(popupPhoto);
}

const saveFormPlace = (event) => {
    event.preventDefault();
    closePopup (popupPlace);
    const cardData = {
        name: inputPlaceName.value,
        link: inputPlaceImg.value
    }
    const newCard = new Card(cardData, validationConfig.cardTemplate, openPopupPhoto);
    const element = newCard.getElement();
    cards.prepend(element);
}

buttonAdd.addEventListener('click', () => {openPopup (popupPlace)});
buttonClosePlace.addEventListener('click', () => {closePopup (popupPlace)});
formSubmitPlace.addEventListener('submit', saveFormPlace);
popupPlace.addEventListener('click', closePopupOverlay);


photoCloseButton.addEventListener('click', () => {closePopup (popupPhoto)});
popupPhoto.addEventListener('click', closePopupOverlay);


initialCards.forEach (({name, link}) => {
    const card = new Card({name, link}, validationConfig.cardTemplate, openPopupPhoto);
    const element = card.getElement();
    cards.append(element);

})

const formProfileValidator = new FormValidation(validationConfig.formProfileSelector, validationConfig);
formProfileValidator.enableValidation();

const formPlaceValidator = new FormValidation(validationConfig.formPlaceSelector, validationConfig);
formPlaceValidator.enableValidation()