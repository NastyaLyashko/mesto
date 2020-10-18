class Card {
    constructor({name, link}, cardSelector) {
        this._name = name,
        this._link = link,
        this._cardSelector = cardSelector
    }
    //_getTemplate() {
   //     return document.querySelector(this._cardSelector).content.cloneNode(true).children[0];
   // }

    _getTemplate() {
        const cardElement = document
         .querySelector(this._cardSelector)
         .content
         .querySelector('.elements__card')
         .cloneNode(true);
        return cardElement;
       }
    
    _deleteCard() {
        this._element.remove();
    }

    _likeToggle() {
        this._element.querySelector('.elements__like-button').classList.toggle('elements__like-button_active');
    }
    
    _openPopupPhoto() {
        const img = this._element.querySelector('.elements__image');
        const photoImage = document.querySelector('.popup__img');
        const photoCaption = document.querySelector('.popup__caption');
        photoImage.src = img.src;
        photoImage.alt = img.alt;
        photoCaption.textContent = img.alt;
        this._openPopup(popupPhoto);
    }

    _setListeners() {
        this._element.querySelector('.elements__delete-button').addEventListener('click', () =>  this._deleteCard());
        this._element.querySelector('.elements__like-button').addEventListener('click', () =>  this._likeToggle()); 
        this._element.querySelector('.elements__image').addEventListener('click', () =>  this._openPopupPhoto);  
    }


    getElement() {
        this._element = this._getTemplate();
        const cardImg = this._element.querySelector('.elements__image');
        cardImg.src = this._link;
        cardImg.alt = this._name;
        this._element.querySelector('.elements__text').textContent = this._name;
    
        this._setListeners();
        return this._element
    }
}

export default Card