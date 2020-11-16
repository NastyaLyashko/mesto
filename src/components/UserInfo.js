import { api } from '../index.js';

export default class UserInfo {
    constructor({name, about, avatar}) {
        this._name = name;
        this._about = about;
        this._avatar = avatar;
        this._inputUserName = document.querySelector('.popup__input_type_name');
        this._inputUserAbout = document.querySelector('.popup__input_type_job');
    }

    getUserInfo() {
        this._inputUserName.value = this._name.textContent;
        this._inputUserAbout.value = this._about.textContent;
    }

    setUserInfo(userData) {
        this._name.textContent  = userData.name;
        this._about.textContent = userData.about;
        this._avatar.src = userData.avatar;
    }
}