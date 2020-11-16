import Popup from "./Popup.js";

export default class PopupConfirmation extends Popup {
    constructor ({popupSelector, handleSubmitForm}) {
        super(popupSelector);
        this._handleSubmitForm =  handleSubmitForm;
        this._popupForm = this._popupSelector.querySelector('.popup__form_confirm')
    }

    setEventListeners() {
        super.setEventListeners()
        this._popupForm.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._handleSubmitForm();
            this.close();
        })
    }

    close() {
        super.close();
    }
}