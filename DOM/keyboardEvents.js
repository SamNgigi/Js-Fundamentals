const form = document.querySelector('form');
const taskInput = document.getElementById('task');

form.addEventListener('submit', runEvent);

function runEvent(event) {
  event.preventDefault()
  console.log(`EVENT TYPE: ${event.type}`);

}