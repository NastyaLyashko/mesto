const showInputError = (formElement, inputElement, errorMessage) => {
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
    
    errorElement.textContent = errorMessage;

    errorElement.classList.add(validationConfig.errorClass);
    inputElement.classList.add(validationConfig.inputErrorClass);
}

const hideInputError = (formElement, inputElement) => {
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
    
    errorElement.textContent = '';

    errorElement.classList.remove(validationConfig.errorClass);
    inputElement.classList.remove(validationConfig.inputErrorClass);
}

const chekInputValidity = (formElement, inputElement) => {
    const isInputNotValid = !inputElement.validity.valid;

    if (isInputNotValid) {
        const errorMessage = inputElement.validationMessage;
        showInputError (formElement, inputElement, errorMessage);
    } else {
        hideInputError (formElement, inputElement);
    }
}

const toggleButtonState = (inputList, buttonElement) => {
    const hasValidInput = inputList.some((inputElement) => !inputElement.validity.valid);

    if(hasValidInput) {
        buttonElement.classList.add(validationConfig.inactiveButtonClass);
        buttonElement.setAttribute("disabled", true);
    } else {
        buttonElement.classList.remove(validationConfig.inactiveButtonClass);
        buttonElement.removeAttribute("disabled");
    }
    
}

const setEventListeners = (formElement) => {
    
    const inputList = Array.from(formElement.querySelectorAll(validationConfig.inputSelector));

    const buttonElement = formElement.querySelector(validationConfig.submitButtonSelector);

    inputList.forEach((inputElement) => {
        inputElement.addEventListener('input', (event) => {
            chekInputValidity(formElement, inputElement);
            toggleButtonState(inputList, buttonElement);
        });
    });

    toggleButtonState(inputList, buttonElement);
};


const enableValidation = (validationConfig) => {
    const formList = Array.from(document.querySelectorAll(validationConfig.formSelector));

    formList.forEach((formElement) => {
        formElement.addEventListener('submit', (event) => {
            event.preventDefault();
        });

        setEventListeners(formElement)
    });

  };

  enableValidation(validationConfig);