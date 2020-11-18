import Popup from "./Popup.js";

export default class PopupConfirmation extends Popup {
    constructor ({popupSelector, onSubmit}) {
        super(popupSelector);
        this._onSubmit =  onSubmit;
        this._popupForm = this._popupSelector.querySelector('.popup__form_confirm');
        this._handleSubmitForm = this._handleSubmitForm.bind(this);
    }

    _handleSubmitForm(evt) {
        evt.preventDefault();
        this._onSubmit(this._card)
    }

    setEventListeners() {
        super.setEventListeners();
        this._popupForm.addEventListener('submit', this._handleSubmitForm);
    }

    open(card) {
        this._card = card;
        super.open();
    }
}