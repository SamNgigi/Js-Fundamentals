// alert('Sup') // Testing Js is linked up correctly.

// DEFINE UI VARS
const taskForm = document.querySelector('form#task-form');
const taskInput = document.querySelector('input#todo');
const taskFilter = document.querySelector('#filter');
const taskList = document.querySelector('ul.collection');
const clearBtn = document.querySelector('.clear-tasks');

// CALLING ALL EVENT LISTENERS
loadEventListeners();

// LOADING ALL EVENT LISTENERS
function loadEventListeners() {
  // ADD TODO EVENT
  taskForm.addEventListener('submit', addTodo)
}

// ADD TODO FUNCTION
function addTodo(event) {
  event.preventDefault();
  // Checking if we have an input value.
  if (taskInput.value === '') {
    alert('Add a task.')
  } else {

  }
}