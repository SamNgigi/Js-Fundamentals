// When importing a class we do not need to use curly braces.
import GitHub from "./github.js";
// Initializing github.
const github = new GitHub;

// Grabbing the form element.
const search_user = document.getElementById("searchUser");

// The searchStuff function
const searchStuff = (event) => {
  event.preventDefault()
  // Get user input
  const user_input = event.target.value;

  if (user_input != "") {
    console.log(user_input)
    // Make the http call
    github.getUser(user_input)
      .then(data => console.log(data))
  }
}

// Adding a keyup event listener and calling the searchStuff function.
search_user.addEventListener('keyup', searchStuff)