const popup = document.querySelector('.popup');
const buttonEdit = document.querySelector('.profile__edit-button');
const formSubmit = document.querySelector('.popup__container');
const buttonClose = document.querySelector('.popup__close-button');
let textUserName = document.querySelector('.profile__name');
let textUserJob = document.querySelector('.profile__job');
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

const popupPlace = document.querySelector('.popup_place');
const formSubmitPlace = document.querySelector('.popup__container_place');
const buttonClosePlace = document.querySelector('.popup__close-button_place');
const buttonAdd = document.querySelector('.profile__add-button');
let PlaceName = document.querySelector('.elements__text');
let PlaceImg = document.querySelector('.elements__image');
const inputPlaceName = document.querySelector('.popup__input_type_place');
const inputPlaceImg = document.querySelector('.popup__input_type_img');

const initialCards = [
    {
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
        name: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
        name: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
        name: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
];

const popupPhoto = document.querySelector('.popup_photo');
const photoImage = document.querySelector('.popup__img');
const photoCloseButton = document.querySelector('.popup__close-button_photo');
const photoCaption = document.querySelector('.popup__caption');
const cards = document.querySelector('.elements__list');
const templateCard = document.querySelector('#templateCard');
const buttonClosePhoto = document.querySelector('.popup__close-button_photo')

const openPopupPlace = (event) => {
    popupPlace.classList.add('popup_opened');
}

const closePopupPlace = (event) => {
    event.preventDefault();
    popupPlace.classList.remove('popup_opened');
}

const savePlaceData = () => {
    PlaceName = inputPlaceName.value;
    PlaceImg = inputPlaceImg.value;
}

const saveFormPlace = (event) => {
    savePlaceData();
    closePopupPlace(event);
    newCard = {
        name: PlaceName,
        link: PlaceImg
    }
    const card = renderItem(newCard);
    
    cards.prepend(card);
    addListeners(newCard);// visibility lalala 

    
}

buttonAdd.addEventListener('click', openPopupPlace);
buttonClosePlace.addEventListener('click', closePopupPlace);
formSubmitPlace.addEventListener('submit', saveFormPlace);


const deleteCard = (event) => {
    event.preventDefault();
    event.target.closest('.elements__card').remove();
};

const likeButtonActive = (event) => {
    event.target.classList.toggle('elements__like-button_active');
}

const openPopupPhoto = (event) => {
    const img = event.target.closest('.elements__image');
    photoImage.src = img.src;
    photoCaption.textContent = img.alt;
    popupPhoto.classList.add('popup_opened');
}

const closePopupPhoto = (event) => {
    event.preventDefault();
    popupPhoto.classList.remove('popup_opened');
}

buttonClosePhoto.addEventListener('click', closePopupPhoto);

const addListeners = () => { 
    document.querySelector('.elements__delete-button').addEventListener('click', deleteCard); 
    document.querySelector('.elements__like-button').addEventListener('click', likeButtonActive); 
    document.querySelector('.elements__image').addEventListener('click', openPopupPhoto); 
};

function render() {
    initialCards.forEach((cardInfo)=> {
        const card = renderItem(cardInfo);
        
        cards.prepend(card); 
        addListeners(card);
    });
}

function renderItem({name, link}) {
    const card = templateCard.content.cloneNode(true);
    card.querySelector('.elements__image').src = link;
    card.querySelector('.elements__image').alt = name;
    card.querySelector('.elements__text').textContent = name;
    return card; 
};

render();