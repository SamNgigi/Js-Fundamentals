// Our input.
const jokes_input = document.querySelector("input[type=number]")
// Our button
const chuck_btn = document.querySelector(".chuck-btn");
// The event listener
chuck_btn.addEventListener("click", getJokes);
// Function called on click event
function getJokes(event) {
  event.preventDefault();
  // console.log("Wohoo!");
  const joke_number = jokes_input.value;
  console.log(joke_number);
}