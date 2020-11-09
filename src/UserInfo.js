export default class UserInfo {
    constructor({name, job}) {
        this._name = name;
        this._job = job;
        this._inputUserName = document.querySelector('.popup__input_type_name');
        this._inputUserJob = document.querySelector('.popup__input_type_job');
    }

    getUserInfo() {
        this._inputUserName.value = this._name.textContent;
        this._inputUserJob.value = this._job.textContent;
    }

    setUserInfo() {
        this._name.textContent  = this._inputUserName.value;
        this._job.textContent = this._inputUserJob.value;
    }
}