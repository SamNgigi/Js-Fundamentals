// Our button
const chuck_btn = document.querySelector(".chuck-btn");
// The event listener
chuck_btn.addEventListener("click", getJokes);
// Function called on click event
function getJokes(event) {
  event.preventDefault();
  console.log("Wohoo!");
}