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

  // Initializing array that will store our tasks
  let task_array;

  // Checking if there is already data in localStorage.
  if (localStorage.getItem("to-do's") === null) {
    // Setting our empty array if their is nothing in local storage.
    task_array = [];
  } else {
    // Setting the todo's to our empty array if data exists in local storage.
    task_array = JSON.parse(localStorage.getItem("to-do's"));
  }

  // Adding new tasks to our array.
  task_array.push(task);


  console.log(task); // Logging it to test input.
  /* 
    Setting task to local storage.this setup without an array
    would keep on replacing the previous task instead of adding
    new tasks.

    So thats why we added an array to store the tasks in.
  */
  // Setting our all items in our task_array as todos
  localStorage.setItem("to-do's", JSON.stringify(task_array))
  // Alert that task has been added.
  alert('Task saved.')
}

// Retriving data from our array in localStorage
const task_results = JSON.parse(localStorage.getItem("to-do's"));

// Conditional statement to make sure the we handle the null if the task_result is empty
if (task_results === null) {
  console.log('No tasks yet fam!');
} else {
  console.clear()
  task_results.forEach(function (task) {
    console.log(task);
  })
}