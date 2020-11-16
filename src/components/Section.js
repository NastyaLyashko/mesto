  export default class Section {
    constructor ({renderer}, containerSelector) {
        this._renderer = renderer;
        this._container = document.querySelector(containerSelector);
      }

      renderItems(items, userData) {
          items.forEach(item => this._renderer(item, userData))
        }
      
      addItem(element) {
          this._container.append(element); 
        }

  }