// When importing a class we do not need to use curly braces.
import GitHub from "./github.js";
import UI from "./ui.js";
// Initializing GitHub.
const github = new GitHub;
// Initializing UI
const ui = new UI;

// Grabbing the form element.
const search_user = document.getElementById("searchUser");

// Setting a debounce function.
/*  
  *This debounce function will wait 5 seconds before executing the
  *searchStuff function. This makes sure we make an Api call only when
  *a user has finished typing in the input field. 
  *

*/
const debounce = (a_Function, delay) => {
  /*  
    some_debounce is a variable that we use to track the delay period.
  */
  let some_debounce;
  // Can't use arrow function here have to define traditional function.
  return function () {
    const context = this;
    const args = arguments;
    clearTimeout(some_debounce)
    some_debounce = setTimeout(() => a_Function.apply(context, args), delay)
  }
}

// The searchStuff function
const searchStuff = (event) => {
  event.preventDefault()

  // Get user input
  const user_input = event.target.value;

  // If input field is not empty.
  if (user_input != "") {
    console.log(user_input)

    // If we input a user_name
    if (user_input.includes("@")) {

      // Formating username i.e "@Sam Ngigi" becomes samngigi
      let username = user_input.toLowerCase().replace(/[@ ]/g, '');

      console.log(username)

      // Make the http call to fetch user
      github.getUser(username)
        .then(data => {
          // console.log(data)
          if (data.profile.message === "Not Found") {
            //TODO: Show alert
            console.log("User Not Found")
          } else {
            //TODO: Show user profile
            // console.log(data)
            ui.showProfile(data.repos)
          }
        });
      // We we input a topic
    } else if (user_input.includes("#")) {
      /*  
        We format the input, such that "#Machine Learning"
        becomes "machine-learning"
      */
      let topic_query = user_input.toLowerCase().replace(/#/g, '').replace(/\s/g, '-')

      console.log(topic_query)

      github.getTopics(topic_query)
        .then(data => console.log(data))

    } else {
      github.getRepos(user_input)
        .then(data => console.log(data))
    }
  } else {
    //TODO: Clear profile.

  }
}

/*  
 * Adding a keyup event listener and calling the searchStuff function
 * if a user has not typed anything into the input field in 3 sec
 */
search_user.addEventListener('keyup', debounce(searchStuff, 3000))