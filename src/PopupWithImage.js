import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
    constructor (popupSelector) {
        super(popupSelector);


    }

    open ({name, link}) {
        const img = this._popupSelector.querySelector('.popup__img');
        const caption = this._popupSelector.querySelector('.popup__caption');

        img.src = link;
        img.alt = name;
        caption.textContent = name;

        super.open();
    }
}