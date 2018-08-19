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
    .then(txt_response => txt_response.text())
    .then(data => output.innerHTML += `TxT <hr> ${data} <br><hr>`)
    .catch(error => console.log(error));
}

function getJson() {
  fetch('customers.json')
    .then(json_response => json_response.json())
    .then(data => {
      output.innerHTML += `Json <hr>`
      data.forEach(item => output.innerHTML += `${item.name} <br>`)
      output.innerHTML += `<hr>`
    })

}

function getApiData() {
  fetch("https://api.github.com/users")
    .then(api_response => api_response.json())
    .then(responses => {
      output.innerHTML += `Api Response <hr> GitHub Users <br><br>`
      responses.forEach(res => output.innerHTML += `${res.login} <br>`)
      output.innerHTML += `<hr>`
    })
}