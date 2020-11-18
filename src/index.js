import './styles/index.css';
import Card from './components/card.js';
import FormValidation from './components/formValidator.js';
import {validationConfig} from './components/constants.js';
import Section from './components/Section.js';
import PopupWithImage from './components/PopupWithImage.js';
import PopupWithForm from './components/PopupWithForm.js';
import PopupConfirmation from './components/PopupConfirmation.js';
import UserInfo from './components/UserInfo.js';
import Api from './components/Api.js';

const popupEdit = document.querySelector('.popup_edit');
const buttonEdit = document.querySelector('.profile__edit-button');
const textUserName = document.querySelector('.profile__name');
const textUserAbout = document.querySelector('.profile__job');
const userAvatar = document.querySelector('.profile__avatar');
const popupPlace = document.querySelector('.popup_place');
const buttonAdd = document.querySelector('.profile__add-button');
const popupPhoto = document.querySelector('.popup_photo');
const cards = document.querySelector('.elements__list');
const popupQuestion = document.querySelector('.popup_question');
const popupAvatar = document.querySelector('.popup_edit-avatar');
const avatar = document.querySelector('.profile__avatar');
const avatarEditButton = document.querySelector('.profile__avatar-edit-button');


const api = new Api({
    baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-17',
    headers: {
      authorization: 'eae790ac-cf24-4380-ba85-8ea4c48ccac5',
      'Content-Type': 'application/json'
    }
  }); 



const popupZoomImg = new PopupWithImage (popupPhoto);
popupZoomImg.setEventListeners();

const user = new UserInfo({
    name: textUserName,
    about: textUserAbout,
    avatar: userAvatar,
  })


Promise.all([api.getInitialCards(), api.getUserData()])
    .then(([cardData, userData]) => {
        user.setUserInfo(userData)
        cardList.renderItems(cardData, userData);   
    })
    .catch(err => {
        console.log(err)
    })


const popupDelete = new PopupConfirmation({
    popupSelector: popupQuestion,
    onSubmit: (card) => {
        api.deleteCard(card.id)
        .then((res) => {
            card.element.remove();
            popupDelete.close();
        })
        .catch(err => {
            console.log(err)
        })
    }
    
})
popupDelete.setEventListeners();

function handleCardDelete (card) {
    popupDelete.open(card);
    
}


function handleCardLikes (card) {
    const idCard = card.id;
        if (card._isLiked() === true) {
            api.deleteLike(idCard)
            .then((res) => {
                card.changeLike(res)
            })
            .catch(err => {
                console.log(err)
            })
        } else {
            api.putLike(idCard)
            .then((res) => {
                card.changeLike(res)
            })
            .catch(err => {
                console.log(err)
            })
        }
}    
    
const createCard = (cardData, userData) => {
    const card = new Card (cardData, userData, validationConfig.cardTemplate,{
        handleCardClick: (name, link) => {
            popupZoomImg.open({name, link})
            } 
        },
        handleCardDelete, 
        handleCardLikes
    );

    return card.getElement();
}



const cardList = new Section ({ 
    renderer: (cardData, userData) => {
        const newElement = createCard(cardData, userData);
        cardList.addItem(newElement);
        },
    },
    validationConfig.cardList
);


const popupFormPlace = new PopupWithForm ({
    popupSelector: popupPlace,
    handleFormSubmit: (cardData) => {
        popupFormPlace.renderLoading(true);
        Promise.all([api.postCard(cardData), api.getUserData()])
        .then(([cardData, userData]) => {
            const newElement = createCard(cardData, userData);
            popupFormPlace.close();
            cards.prepend(newElement);
        })
        .catch(err => {
            console.log(err)
        })
        .finally(() => {
            popupFormPlace.renderLoading(false); 
        });   
    }
})
popupFormPlace.setEventListeners();

const popupFormProfile = new PopupWithForm({
    popupSelector: popupEdit,
    handleFormSubmit: (userData) => {
        popupFormProfile.renderLoading(true);
        api.patchUserData(userData)
        .then((userData) => {
            user.setUserInfo(userData);
            popupFormProfile.close();
        })
        .catch(err => {
            console.log(err)
        })
        .finally(() => {
            popupFormProfile.renderLoading(false); 
        }); 
    }
  });
popupFormProfile.setEventListeners(); 

const popupAvatarEdit = new PopupWithForm ({
    popupSelector: popupAvatar,
    handleFormSubmit: (userData) => {
        popupAvatarEdit.renderLoading(true);
        api.patchUserAvatar(userData)
        .then((res) => {
            avatar.src = res.avatar;
            popupAvatarEdit.close();
        })
        .catch(err => {
            console.log(err)
        })
        .finally(() => {
            popupAvatarEdit.renderLoading(false); 
        }); 
    }
  });
popupAvatarEdit.setEventListeners();

avatarEditButton.addEventListener('click', () => {
    popupAvatarEdit.open(popupAvatar)
});

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

const formAvatarValidator = new FormValidation(validationConfig.formAvatarSelector, validationConfig);
formAvatarValidator.enableValidation();