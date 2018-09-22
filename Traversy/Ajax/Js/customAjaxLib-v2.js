/*  
  *CustomAjaxLib-v2.js

  *Library for making HTTP  requests

  *@version 2.0.0 
  *@author Sam Ngigi
  *@license MIT

  In this Library we are going to use the newer features we have in
  modern JavaScript such as, the fetch api, ES6 classes and Promises.
*/

/*  

  *Synchronously

  *class CustomHttp {
     Making a HTTP GET Request
    *get(url) {
      *fetch(url)
        *.then(res => res.json())
        *.then(data => console.log(data))
        *.catch(error => console.log(error));
    *}
  *}

*/

// Asynchronously using promises.


class CustomHttp {

  // Defining the headers/content that will be part of a post request.
  content(method, data) {
    return {
      method: `${method}`,
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(data)
    }
  }

  // Making the HTTP GET Request
  get(url) {

    return new Promise((resolve, reject) => {
      fetch(url)
        .then(res => res.json())
        .then(data => resolve(data))
        .catch(error => reject(error));
    });

  }


  // Making the HTTP POST Request
  post(url, data) {

    return new Promise((resolve, reject) => {
      /*  
        Was getting content() is not defined error. Seems i had to use the "this" key word to be able to access it.
      */
      fetch(url, this.content("POST", data))
        .then(res => res.json())
        .then(data => resolve(data))
        .catch(error => reject(error));
    });
  }

  // Making a PUT of Update request
  put(url, data) {
    return new Promise((resolve, reject) => {
      fetch(url, this.content("PUT", data))
        .then(res => res.json())
        .then(data => resolve(data))
        .catch(error => reject(error))
    })
  }

}