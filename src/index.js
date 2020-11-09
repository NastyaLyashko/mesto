import './styles/index.css';
import Card from './components/card.js';
import FormValidation from './components/formValidator.js';
import {validationConfig, initialCards} from './components/constants.js';
import Section from './components/Section.js';
import PopupWithImage from './components/PopupWithImage.js';
import PopupWithForm from './components/PopupWithForm.js';
import UserInfo from './components/UserInfo.js';

const popupEdit = document.querySelector('.popup_edit');
const buttonEdit = document.querySelector('.profile__edit-button');
const textUserName = document.querySelector('.profile__name');
const textUserJob = document.querySelector('.profile__job');
const popupPlace = document.querySelector('.popup_place');
const buttonAdd = document.querySelector('.profile__add-button');
const inputPlaceName = document.querySelector('.popup__input_type_place');
const inputPlaceImg = document.querySelector('.popup__input_type_img');
const popupPhoto = document.querySelector('.popup_photo');
const cards = document.querySelector('.elements__list');

const popupZoomImg = new PopupWithImage (popupPhoto);
popupZoomImg.setEventListeners();

const cardList = new Section ({ 
    items: initialCards,
    renderer: (item) => {
        const card = new Card (item, validationConfig.cardTemplate,{
            handleCardClick: (name, link) => {
                popupZoomImg.open({name, link})
            } 
        });
        const element = card.getElement();

        cardList.addItem(element);
        },
    },
    validationConfig.cardList
);

cardList.renderItems()


const popupFormPlace = new PopupWithForm ({
    popupSelector: popupPlace,
    handleFormSubmit: ({name, link}) => {
        const card = new Card({
            name: inputPlaceName.value,
            link: inputPlaceImg.value
        }, 
        validationConfig.cardTemplate, {
            handleCardClick: (name, link) => {
                popupZoomImg.open({name, link})
            } 
        });
        const element = card.getElement();
        cards.prepend(element);
    }
})
popupFormPlace.setEventListeners();

const popupFormProfile = new PopupWithForm({
    popupSelector: popupEdit,
    handleFormSubmit: () => {
      user.setUserInfo();
    }
  })
  popupFormProfile.setEventListeners();

const user = new UserInfo({
    name: textUserName,
    job: textUserJob
  })


buttonEdit.addEventListener('click', () => {
    user.getUserInfo();
    popupFormProfile.open(popupEdit);
});

buttonAdd.addEventListener('click', () => {
    popupFormPlace.open(popupPlace)
});


const formPlaceValidator = new FormValidation(validationConfig.formPlaceSelector, validationConfig);
formPlaceValidator.enableValidation();

const formProfileValidator = new FormValidation(validationConfig.formProfileSelector, validationConfig);
formProfileValidator.enableValidation();

