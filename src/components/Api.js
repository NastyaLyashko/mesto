export default class Api {
    constructor({baseUrl, headers},) {
        this.headers = headers;
        this.baseUrl = baseUrl;
    }
  
    getInitialCards() {
        return fetch(`${this.baseUrl}/cards`, {
            headers: this.headers
        })
          .then(res => {
            if (res.ok) {
              return res.json();
            }
      
            return Promise.reject(`Ошибка: ${res.status}`);
          })
          .catch(err => {
            console.log(err)
        })

    } 
    
    getUserData() {
        return fetch (`${this.baseUrl}/users/me`, {
            headers: this.headers
        })

        .then(res => {
            if (res.ok) {
              return res.json();
            } else {
                return Promise.reject(`Ошибка: ${res.status}`);
            }
        })
        .catch(err => {
            console.log(err)
        })
    }

    patchUserData(item) {
        return fetch(`${this.baseUrl}/users/me`, {
            method: 'PATCH',
            headers: this.headers,
            body: JSON.stringify({
                name: item.name,
                about: item.about
           })

        })
        .then(res => {
            if (res.ok) {
              return res.json();
            } else {
                return Promise.reject(`Ошибка: ${res.status}`);
            }
        })
        .then((res) => {
            return res;
        })
        .catch(err => {
            console.log(err)
        })
    }

    postCard(item) {
        return fetch(`${this.baseUrl}/cards`, {
            method: 'POST',
            headers: this.headers,
            body: JSON.stringify({
                name: item.name,
                link: item.link
           })
        })   
        .then(res => {
            if (res.ok) {
              return res.json();
            }
      
            return Promise.reject(`Ошибка: ${res.status}`);
        })
        .catch(err => {
            console.log(err)
        })

    }

    
    patchUserAvatar(item) {
        return fetch(`${this.baseUrl}/users/me/avatar `, {
            method: 'PATCH',
            headers: this.headers,
            body: JSON.stringify({
                avatar: item.avatar
           })

        })
        .then(res => {
            if (res.ok) {
              return res.json();
            } 
            return Promise.reject(`Ошибка: ${res.status}`);
        })
        .catch(err => {
            console.log(err)
        })
    }

    deleteCard(idCard) {
        return fetch(`${this.baseUrl}/cards/${idCard}`, {
            method: 'DELETE',
            headers: this.headers,
            body: JSON.stringify({
                _id: idCard,
           })
        })   
        .then(res => {
            if (res.ok) {
              return res.json();
            }
      
            return Promise.reject(`Ошибка: ${res.status}`);
        })
        .catch(err => {
            console.log(err)
        })

    }

    putLike(idCard) {
        return fetch(`${this.baseUrl}/cards/likes/${idCard}`, {
            method: 'PUT',
            headers: this.headers,
            body: JSON.stringify({
                _id: idCard,
           })
        })   
        .then(res => {
            if (res.ok) {
              return res.json();
            }
      
            return Promise.reject(`Ошибка: ${res.status}`);
        })
        .catch(err => {
            console.log(err)
        })

    }

    deleteLike(idCard) {
        return fetch(`${this.baseUrl}/cards/likes/${idCard}`, {
            method: 'DELETE',
            headers: this.headers,
            body: JSON.stringify({
                _id: idCard,
           })
        })   
        .then(res => {
            if (res.ok) {
              return res.json();
            }
      
            return Promise.reject(`Ошибка: ${res.status}`);
        })
        .catch(err => {
            console.log(err)
        })
    }

}

  
