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
let placeName = document.querySelector('.elements__text');
let placeImg = document.querySelector('.elements__image');
const inputPlaceName = document.querySelector('.popup__input_type_place');
const inputPlaceImg = document.querySelector('.popup__input_type_img');



const popupPhoto = document.querySelector('.popup_photo');
const photoImage = document.querySelector('.popup__img');
const photoCloseButton = document.querySelector('.popup__close-button_photo');
const photoCaption = document.querySelector('.popup__caption');
const cards = document.querySelector('.elements__list');
const cardTemplate = document.querySelector('#templateCard');

const saveFormPlace = (event) => {
    event.preventDefault();
    closePopup (popupPlace);
    const newCard = {
        name: inputPlaceName.value,
        link: inputPlaceImg.value
    }
    const card = createCard(newCard);
    cards.prepend(card);
}

buttonAdd.addEventListener('click', () => {openPopup (popupPlace)});
buttonClosePlace.addEventListener('click', () => {closePopup (popupPlace)});
formSubmitPlace.addEventListener('submit', saveFormPlace);
popupPlace.addEventListener('click', closePopupOverlay);


const deleteCard = (event) => {
    event.preventDefault();
    event.target.closest('.elements__card').remove();
};

const likeButtonActive = (event) => {
    event.target.classList.toggle('elements__like-button_active');
}

const openPopupPhoto = (event) => {
    const img = event.target;
    photoImage.src = img.src;
    photoImage.alt = img.alt;
    photoCaption.textContent = img.alt;
    openPopup(popupPhoto);
}

photoCloseButton.addEventListener('click', () => {closePopup (popupPhoto)});
popupPhoto.addEventListener('click', closePopupOverlay);

const addListeners = (card) => { 
    card.querySelector('.elements__delete-button').addEventListener('click', deleteCard); 
    card.querySelector('.elements__like-button').addEventListener('click', likeButtonActive); 
    card.querySelector('.elements__image').addEventListener('click', openPopupPhoto); 
};

function createCard({name, link}) {
    const card = cardTemplate.content.cloneNode(true);
    const cardImg = card.querySelector('.elements__image');
    cardImg.src = link;
    cardImg.alt = name;
    card.querySelector('.elements__text').textContent = name;
    addListeners(card);
    return card; 
};

function render() {
    initialCards.forEach((cardInfo)=> {
        const card = createCard(cardInfo);
        cards.prepend(card); 
    });
}

render();


