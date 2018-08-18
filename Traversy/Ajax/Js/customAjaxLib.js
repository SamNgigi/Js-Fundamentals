// Creating our custom lib constructor.
function CustomHttpLib() {
  this.http = new XMLHttpRequest();
}

/* 
  Our HTTP GET Request

  Args
    url:
      We pass in a url parameter that will allow us to pass in any url as an arg.
    callBack:
      We allow a call back function that allow for an asynchronous request.
*/
CustomHttpLib.prototype.get = function (url, callBack) {
  this.http.open("GET", url, true);

  /* 
    When we use 'this' here in the if statement the scope
    defines it as this function that we are defining as the
    http.onload instead of the http constructor function.

    Because of this we get the error
      `TypeError: Cannot read property "status" of undefined XMLRequest.http.onload`

    The use of fat arrow syntax of ES6 fixes this scoping issue thus
      this.http.onload = () => {
        if(this.http.status === 200){
          Would work
        }
      }

    The work around becomes defining the 'this' before the onload function.

    This makes sure that we are referencing the our constructor function instead of the onload function.
  */


  let self = this

  this.http.onload = function () {
    if (self.http.status === 200) {

      // console.log(self.http.responseText);

      callBack(null, self.http.responseText);
    } else {
      callBack(`Error: ${self.http.status}`);
    }
  }
  this.http.send();
}
/* 
  Our HTTP POST Request 
*/
CustomHttpLib.prototype.post = function (url, data, callBack) {
  this.http.open("POST", url, true);

  this.http.setRequestHeader(
    'Content-type',
    'application/json'
  );

  let self = this;

  this.http.onload = function () {
    callBack(null, self.http.responseText);
  }

  /* 
    The data we want to send is a javascript object. We have to convert the object into a json string in-order to send it successfully.
  */
  this.http.send(JSON.stringify(data))
}
/* 
  Our HTTP PUT Request
*/
CustomHttpLib.prototype.put = function (url, data, callBack) {
  this.http.open("PUT", url, true);

  this.http.setRequestHeader(
    'Content-type',
    'application/json'
  );

  let self = this;

  this.http.onload = function () {
    callBack(null, self.http.responseText);
  }

  /* 
    The data we want to send is a javascript object. We have to convert the object into a json string in-order to send it successfully.
  */
  this.http.send(JSON.stringify(data))
}

/* 
  Our HTTP DELETE Request
*/
CustomHttpLib.prototype.delete = function (url, callBack) {
  this.http.open('DELETE', url, true);

  let self = this
  this.http.onload = function () {
    if (self.http.status === 200) {
      callBack(null, "Post Deleted");
    } else {
      callBack(`Error: ${self.help.status}`);
    }
  }
  this.http.send()
}