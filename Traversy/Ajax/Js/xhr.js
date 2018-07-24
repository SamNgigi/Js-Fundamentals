document.getElementById("getData").addEventListener("click", loadData);

function loadData() {
  // Creating the XHR Object.
  const xhr = new XMLHttpRequest();

  // Open specific text file. In this case that will be data.txt.
  xhr.open("GET", "data.txt", true);
  // Returns ReadyState stage: 1
  // console.log("ReadyState stage: ", xhr.readyState); 

  /* 
    If we want a spinner of a loader while our HTTP request is being processed we would use  xhr.onprogress

  */
  xhr.onprogress = function () {
    // This would return a ready state of 3.
    console.log("ReadyState stage: ", xhr.readyState)
  }

  /* 

    xhr.onreadystatechange = function () {
      // Below would return  ready state 2 - 4
      console.log("ReadyState Stage: ", this.readyState);
      if (this.status === 200 && this.readyState === 4) {
        console.log(this.responseText)
      }
    }

    We would have to also check the readyState.

    This is because of the readyState values used in Ajax which include.

    0: request not initialized
    1: server connection established.
    2: request received
    3: processing request
    4: request finished and response ready.

    xhr.onload is an update to xhr.onreadystatechange. With the
    .onload we do not need to check for the readyState.

    This is because the readyState will already be at 4.
  
    */

  xhr.onload = function () {
    if (this.status === 200) {
      // We log the response text.
      console.log(this.responseText);
      const output = document.getElementById("output");
      output.innerHTML = `<h2>${this.responseText}</h2>`
    }
  }

  // We then send the response to the browser.
  xhr.send()
}