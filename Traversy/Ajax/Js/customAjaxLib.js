// Creating our custom lib constructor.
function CustomHttpLib() {
  this.http = new XMLHttpRequest();
}

/* 
  Our HTTP GET Request
*/
CustomHttpLib.prototype.get = function (url) {
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

      console.log(self.http.responseText);
    }
  }
  this.http.send();
}
/* 
  Our HTTP POST Request 
*/
/* 
  Our HTTP PUT Request
*/
/* 
  Our HTTP DELETE Request
*/