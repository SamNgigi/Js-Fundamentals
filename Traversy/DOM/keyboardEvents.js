const form = document.querySelector('form');
const taskInput = document.getElementById('task');
const heading = document.querySelector('h5');
const select = document.querySelector('select')

form.addEventListener('submit', runEvent);

// Clear Input
taskInput.value = '' // clears input.


function runEvent(event) {
  event.preventDefault()
  console.log(`EVENT TYPE: ${event.type}`); // returns submit
  console.log(taskInput.value); // returns whatever is in input field. 
}


// KEYDOWN
// Fires off when a key is pressed dowm
// taskInput.addEventListener('keydown', keyDown);

function keyDown(event) {
  // seems this preventDefault is bringing a huge problem when getting key down values. It is still submiting an empty space.
  // event.preventDefault() 
  console.log(`EVENT TYPE ${event.type}`);
  console.log(event.target.value);
  // heading.innerHTML = event.target.value

  // Due to the nature of keydown it seems we are always a char behind.
}

// KEYUP
// Fires off when we lift the key up.
// taskInput.addEventListener('keyup', keyUp);

function keyUp(event) {
  console.log(`EVENT TYPE: ${event.type}`);
  console.log(event.target.value);

  heading.innerText = event.target.value

  // Seemingly keeps up to date with where are typing in real time.
}

// KEYPRESS
// Fires of whenever a key is pressed. More of a general purpose key event.
// taskInput.addEventListener('keypress', keyPress);

function keyPress(event) {
  console.log(`EVENT TYPE: ${event.type}`);
  heading.innerText = event.target.value

  // Also seems to be one word behing kinda like keydown
}

// FOCUS
// Focuses on a input field.
taskInput.addEventListener('focus', focusEvent);

function focusEvent(event) {
  console.log(`EVENT TYPE: ${event.type}`)
}
// BLUR
// Blur is the opposite of focus.
taskInput.addEventListener('blur', blurEvent);

function blurEvent(event) {
  console.log(`EVENT TYPE: ${event.type}`)
}

// COPY
taskInput.addEventListener('copy', copyEvent);

function copyEvent(event) {
  console.log(`EVENT TYPE: ${event.type}`)
}
// CUT
taskInput.addEventListener('cut', cutEvent);

function cutEvent(event) {
  console.log(`EVENT TYPE: ${event.type}`)
}
// PASTE
taskInput.addEventListener('paste', pasteEvent);

function pasteEvent(event) {
  console.log(`EVENT TYPE: ${event.type}`)
}

// INPUT EVENT
// Fires off anytime we interact with an the input.
taskInput.addEventListener('input', inputEvent);

function inputEvent(event) {
  console.log(`EVENT TYPE: ${event.type}`);
}

// CHANGE EVENT
select.addEventListener('change', changeEvent);

function changeEvent(event) {
  console.log(`EVENT TYPE: ${event.type}`);
  console.log(event.target.value);

}

// Ideal student at the beginning...ideal student at the end.