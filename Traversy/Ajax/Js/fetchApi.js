// Buttons
const button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');
const button3 = document.getElementById('button3');

// Output 
const output = document.getElementById('output');

button1.addEventListener('click', getText);
button2.addEventListener('click', getJson);
button3.addEventListener('click', getApiData);

function getText() {
  /* 
    This is running because of being in the same directory as
    fetchApi.html
  */
  fetch('sample.txt')
    .then(function (txt_response) {
      // console.log(response); // returns the Response object
      // console.log(response.text()); // returns the Promise object
      return txt_response.text()
    })
    .then(function (data) {
      // Below returns actual text from sample.txt
      console.log(data)
      output.innerHTML += `TxT <hr> ${data} <br><hr>`;
    })
    .catch(function (error) {
      console.log(error)
    });
}

function getJson() {
  fetch('customers.json')
    .then(function (json_response) {
      // console.log(json_response.json());
      return json_response.json() // return Promise with Array
    })
    .then(function (data) {
      output.innerHTML += `Json <hr>`
      data.forEach(function (item) {
        output.innerHTML += `${item.name} <br>`
      })
      output.innerHTML += `<hr>`
    })

}

function getApiData() {
  fetch("https://api.github.com/users")
    .then(function (api_response) {
      return api_response.json();
    })
    .then(function (responses) {
      output.innerHTML += `Api Response <hr> GitHub Users <br><br>`
      responses.forEach(function (res) {
        output.innerHTML += `${res.login} <br>`
      })
      output.innerHTML += `<hr>`
    })
}