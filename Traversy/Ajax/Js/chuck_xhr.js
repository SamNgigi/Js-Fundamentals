// Our input.
const jokes_input = document.querySelector("input[type=number]")
// Our button
const chuck_btn = document.querySelector(".chuck-btn");
// Where we display
const display = document.getElementById("displayJokes");
// The event listener
chuck_btn.addEventListener("click", getJokes);
// Function called on click event
function getJokes(event) {
  event.preventDefault();
  // console.log("Wohoo!");
  const joke_number = jokes_input.value;
  console.log(joke_number);

  // Creating the Ajax object
  const xhr = new XMLHttpRequest();

  // The open method takes in 3 parameters GET, THE FILE/CONTENT, IF ASYNC
  xhr.open("GET", `http://api.icndb.com/jokes/random/${joke_number}`, true);

  // Load the response.
  xhr.onload = function () {
    if (this.status === 200) {
      // console.log(this.responseText);
      /* 
        Converting the JSON string object into an object using the parse
        method
      */
      const response = JSON.parse(this.responseText);
      const the_jokes = response.value;
      // console.log(the_jokes);
      let output = "";
      if (response.type === "success") {
        the_jokes.forEach(function (tell_me_the) {
          output += `
          <div class="uk-child-width-1-1 uk-grid-match" uk-grid>
            <div id="test">
              <div class="uk-card uk-card-hover uk-card-body">
                <h3 class="uk-card-title">Category: ${tell_me_the.categories[0]}</h3>
                <p>${tell_me_the.joke}</p>
              </div>
            </div>
          </div>
        `
        })
      } else {
        output += `
          <div class="uk-child-width-1-2@s uk-grid-match" uk-grid>
            <div>
              <div class="uk-card uk-card-hover uk-card-body">
                <h3 class="uk-card-title">Error</h3>
                <p>Something Went wrong</p>
              </div>
            </div>
          </div>
        `
      }
      display.innerHTML = output;
    }
  }
  xhr.send();
}