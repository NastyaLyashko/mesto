  export default class Section {
    constructor ({renderer}, containerSelector) {
        this._renderer = renderer;
        this._container = document.querySelector(containerSelector);
      }

      renderItems(cardData, userData) {
        cardData.forEach(item => this._renderer(item, userData))
        }
      
      addItem(element) {
          this._container.append(element); 
        }

  }