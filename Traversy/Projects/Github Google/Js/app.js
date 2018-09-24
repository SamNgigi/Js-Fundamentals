// Importing the Client Secret/ Api keys
import {
  environment,
  test
} from '../environment/env.js';


// Grabbing the form element.
const search_user = document.getElementById("searchUser");

// The searchStuff function
const searchStuff = (event) => {
  event.preventDefault()
  // Get user input
  const user_input = event.target.value;

  if (user_input != "") {
    console.log(user_input)
  }
}

// Adding a keyup event listener and calling the searchStuff function.
search_user.addEventListener('keyup', searchStuff)