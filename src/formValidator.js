import {validationConfig} from './constants.js';

class FormValidation {
    constructor (formSelector, validationConfig) {
        this._formSelector = formSelector;
        this._formElement = document.querySelector(formSelector);
        this._inputSelector = validationConfig.inputSelector;
        this._submitButtonSelector = validationConfig.submitButtonSelector;
        this._inactiveButtonClass = validationConfig.inactiveButtonClass;
        this._inputErrorClass = validationConfig.inputErrorClass;
        this._errorClass = validationConfig.errorClass;
        this._inputData = validationConfig.inputData;
    }

    
    _showInputError (inputElement, errorMessage) {
        const errorElement = this._formElement.querySelector(`#${inputElement.id}-error`);
        
        errorElement.textContent = errorMessage;
    
        errorElement.classList.add(this._errorClass);
        inputElement.classList.add(this._inputErrorClass);
    }
    
    _hideInputError (inputElement) {
        const errorElement = this._formElement.querySelector(`#${inputElement.id}-error`);
        
        errorElement.textContent = '';
    
        errorElement.classList.remove(this._errorClass);
        inputElement.classList.remove(this._inputErrorClass);
    }
    
    _chekInputValidity (inputElement) {
        const isInputNotValid = !inputElement.validity.valid;
    
        if (isInputNotValid) {
            const errorMessage = inputElement.validationMessage;
            this._showInputError (inputElement, errorMessage);
        } else {
            this._hideInputError (inputElement);
        }
    }
    
    _toggleButtonState (inputList, buttonElement) {
        const hasValidInput = inputList.some((inputElement) => !inputElement.validity.valid);
    
        if(hasValidInput) {
            buttonElement.classList.add(this._inactiveButtonClass);
            buttonElement.setAttribute("disabled", true);
        } else {
            buttonElement.classList.remove(this._inactiveButtonClass);
            buttonElement.removeAttribute("disabled");
        }
        
    }
    
    _setEventListeners () {
        
        const inputList = Array.from(this._formElement.querySelectorAll(this._inputSelector));
    
        const buttonElement = this._formElement.querySelector(this._submitButtonSelector);
    
        inputList.forEach((inputElement) => {
            inputElement.addEventListener('input', () => {
                this._chekInputValidity(inputElement);
                this._toggleButtonState(inputList, buttonElement);
            });
        });
    
        this._toggleButtonState(inputList, buttonElement);
    };
    
    
    enableValidation () {
        const submitFormHandler = (event) => {
            event.preventDefault();
        };
        this._formElement.addEventListener("submit", submitFormHandler);
      
        this._setEventListeners()
    };
};


export default FormValidation
