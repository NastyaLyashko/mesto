class Card {
    constructor({name, link}, cardSelector, openPopupPhoto) {
        this._name = name,
        this._link = link,
        this._cardSelector = cardSelector,
        this._openPopupPhoto = openPopupPhoto
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
    
    _openPhoto() {
        this._openPopupPhoto(
            this._name,
            this._link,
        )
    }

    _setListeners() {
        this._element.querySelector('.elements__delete-button').addEventListener('click', () =>  this._deleteCard());
        this._element.querySelector('.elements__like-button').addEventListener('click', () =>  this._likeToggle()); 
        this._element.querySelector('.elements__image').addEventListener('click', () =>  this._openPhoto());  
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