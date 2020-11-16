class Card {
constructor({name, link, likes, owner, _id}, userData, cardSelector, handleCardClick, handleCardDelete, handleCardLikes) {
        this._name = name;
        this._link = link;
        this._likes = likes;
        this._id = _id;
        this._ownerID = owner._id;
        this._selfId = userData._id;
        this._cardSelector = cardSelector;
        this._handleCardClick = handleCardClick;
        this._handleCardDelete = handleCardDelete;
        this._handleCardLikes = handleCardLikes;
    }

    _getTemplate() {
        const cardElement = document
         .querySelector(this._cardSelector)
         .content
         .querySelector('.elements__card')
         .cloneNode(true);
        return cardElement;
       }
    
    _isLiked() {
        return !!this_._likes.find((item) => {
            return item._id === this._selfId;
        })
    }

    _likeToggle() {
        this._element.querySelector('.elements__like-button').classList.toggle('elements__like-button_active');
    }

    _likeClicked() {
        if (this._element.querySelector('.elements__like-button').classList.contains('elements__like-button_active')) {
            return false
        }
            return true
    }


    _setListeners() {
        this._element.querySelector('.elements__delete-button').addEventListener('click', () =>  this._handleCardDelete(this));
        this._element.querySelector('.elements__like-button').addEventListener('click', () =>  this._handleCardLikes(this)); 
        this._element.querySelector('.elements__image').addEventListener('click', () =>  this._handleCardClick(this._name, this._link));  
    }


    getElement() {
        this._element = this._getTemplate();
        const cardImg = this._element.querySelector('.elements__image');
        cardImg.src = this._link;
        cardImg.alt = this._name;
        this._element.querySelector('.elements__like-counter').textContent = this._likes.length;
        this._element.querySelector('.elements__text').textContent = this._name;

        if(this._ownerID != this._selfId) {
            this._element.querySelector('.elements__delete-button').style.display = "none";
        } 
    
        if(this._isLiked === true) {
            this._element.querySelector('.elements__like-button').classList.add('elements__like-button_active');
        }

        this._setListeners();
        return this._element
    }
}

export default Card