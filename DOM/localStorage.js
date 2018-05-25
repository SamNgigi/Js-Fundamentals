// LOCAL STORAGE.
// Set item in local storage.
// localStorage.setItem('name', 'John'); // will be there after we refresh the browser
// localStorage.setItem('age', '45'); // will be there after we refresh the browser

// remove item from local storage using app method.
// localStorage.removeItem('name')

// get item from local storage
// const name = localStorage.getItem('name')
// const age = localStorage.getItem('age')

// console.log(`name: ${name} \n age: ${age}`);

// Clear local storage
// localStorage.clear(); // clears the local storage.


// SET SESSION STORAGE ITEM.
// sessionStorage.setItem('name', 'Jonathan'); // disappears after refresh.

/* 
  Local storage - Data will stay until we manually clear it out through the browser
  settings our app

  Session storage - Data will stay until the browser is reloaded.
*/

// Adding task to local storage.
// Targeting and adding an event listener to the form.
const taskForm = document.querySelector('form#taskForm')
taskForm.addEventListener('submit', submitForm)

function submitForm(event) {
  event.preventDefault();
  // console.log(777);// Testing form
  // Extracting the input
  const task = document.getElementById('task').value;
  console.log(task); // Logging it to test input.
  localStorage.setItem('task', task)

}