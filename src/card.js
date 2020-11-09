class Card {
    constructor({name, link}, cardSelector, {handleCardClick}) {
        this._name = name,
        this._link = link,
        this._cardSelector = cardSelector,
        this._handleCardClick = handleCardClick
    }

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


    _setListeners() {
        this._element.querySelector('.elements__delete-button').addEventListener('click', () =>  this._deleteCard());
        this._element.querySelector('.elements__like-button').addEventListener('click', () =>  this._likeToggle()); 
        this._element.querySelector('.elements__image').addEventListener('click', () =>  this._handleCardClick(this._name, this._link));  
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