// alert('Sup') // Testing Js is linked up correctly.

// DEFINE UI VARS
const todoForm = document.querySelector('form#todo-form');
const todoInput = document.querySelector('input#todo');
const todoFilter = document.querySelector('#filter');
const todoList = document.querySelector('ul.collection');
const clearBtn = document.querySelector('.clear-todos');

// CALLING ALL EVENT LISTENERS
loadEventListeners();

// LOADING ALL EVENT LISTENERS
function loadEventListeners() {

  // DOM LOAD EVENT
  document.addEventListener('DOMContentLoaded', getTodos);
  // ADD TODO EVENT
  todoForm.addEventListener('submit', addTodo);
  // REMOVE TASK EVENT
  todoList.addEventListener('click', removeTodo);
  // REMOVE ALL TASK EVENT
  clearBtn.addEventListener('click', clearAll);
  // FILTER TASK EVENT
  todoFilter.addEventListener('keyup', filterTodos);

}

// GET TODOS
function getTodos() {
  let todos;
  if (localStorage.getItem('todos') === null) {
    todos = []
  } else {
    todos = JSON.parse(localStorage.getItem('todos'));
  }

  todos.forEach(function (todo) {
    // Create li element
    const li = document.createElement('li');
    // Add materialize li class
    li.className = 'collection-item';
    // Create text node add the todo and append to li.
    li.appendChild(document.createTextNode(todo))
    // Create aTag element.
    aTag = document.createElement('a');
    // Add class
    aTag.className = 'delete-item secondary-content';
    // Add icon 
    aTag.innerHTML = '<i class="fa fa-remove"></i>'
    // Add aTag to li
    li.appendChild(aTag)

    // Append li to ul
    todoList.appendChild(li);
  })

}



// ADD TODO FUNCTION
function addTodo(event) {
  event.preventDefault();
  /* 
    Checking
    if we have an input value.
    If not we alert user to add task.
  */
  if (todoInput.value === '') {
    alert('Add a task.');
  }

  // Creating li element
  const li = document.createElement('li');
  // Adding materialize class 
  li.className = 'collection-item';
  // Create text node(taskInput value.) and append to li.
  li.appendChild(document.createTextNode(`- ${todoInput.value}`))

  // Creating the aTag element
  // Link to remove individual tasks.
  const aTag = document.createElement('a')
  /* 
    Adding materialize classes.

    Note secondary content makes our link align to the right.
  */
  aTag.className = 'delete-item secondary-content';

  // Adding icon
  aTag.innerHTML = '<i class="fa fa-remove"></i>'

  // Appending the our aTag to our li.
  li.appendChild(aTag)


  // Append li to the ul
  todoList.appendChild(li);

  // Store in Local Storage function call.
  storeTodosInLocalStorage(todoInput.value)


  // Clearing input after submission.
  todoInput.value = '';

}

// STORING TO LOCAL STORAGE
function storeTodosInLocalStorage(todo) {
  let todos;
  // Condition to check if we have any todo in Local Storage.
  if (localStorage.getItem('todos') === null) {
    // if not we initialize our empty array that will store all our todos.
    // This is in order to save multiple items in Local Storage 
    todos = []
  } else {
    // If we do have items in the local storage we parse them into our array as Json.
    todos = JSON.parse(localStorage.getItem('todos'))
  }
  // We push new todo items into our array.
  todos.push(todo)
  // Set our array into local storage.
  localStorage.setItem('todos', JSON.stringify(todos))


  // So when adding todos to our array we have to convert from string to Json format 
  // However when setting our array to Local Storage we have to stringify our Json data.
}


// REMOVE TODO
function removeTodo(event) {
  // Log to confirm click function working on li element.
  // console.log(event.target);

  // Condition to make sure that the remove method only works when the aTag is clicked
  if (event.target.parentElement.classList.contains('delete-item')) {
    // Confirming that user want the todo item deleted.
    if (confirm('Are you sure?')) {
      /* 
        Since we are targeting the whole li we have to move up to the aTag first then the actual to the actual li from our remove icon element.
      */
      event.target.parentElement.parentElement.remove()

      // Remove from todo from local storage.
      removeTodoFromLocalStorage(
        event.target.parentElement.parentElement
      )

    }
  }
}

// Remove from Local storage
function removeTodoFromLocalStorage(todoItem) {
  let todos;
  if (localStorage.getItem('todos') === null) {
    todos = []
  } else {
    todos = JSON.parse(localStorage.getItem('todos'))
  }

  todos.forEach(function (todo, index) {
    if (todoItem.textContent === todo) {
      todos.splice(index, 1);
    }
  })

  localStorage.setItem('todos', JSON.stringify(todos))
}

// CLEAR ALL
function clearAll(event) {
  // We could do this.
  todoList.innerHTML = '';

  // or use a while loop with the removeChild method.

  while (todoList.firstChild) {
    todoList.removeChild(todoList.firstChild);
  }
  // This is actually faster... read more below.
  // https://jsperf.com/innerhtml-vs-removechild

  // Clear todos from Local Storage. Calling function.
  clearTodosFromLocalStorage();

}

// Clear Todos from Local Storage. Defining function.
function clearTodosFromLocalStorage() {
  // .clear() method removes all data from local storage.
  localStorage.clear();
}



// FILTER TODO LIST.
function filterTodos(event) {
  // storing the text feed to the filter input.
  const text = event.target.value.toLowerCase()

  // Storing all our todos in results
  let results = document.querySelectorAll('.collection-item')

  /*
    This above returns a nodeList that we can iterate through without having to convert into a list.

    If we use getElementsByTagName of ById we would have to convert the resulting HTML collection into a list using the Array()
  */



  results.forEach(function (todo) {
    // 
    /* 
      we store each todo list item in item then check
      if the text characters in text matches chars in our items match
      one by one.
    */
    const item = todo.firstChild.textContent;
    if (item.toLowerCase().indexOf(text) != -1) {
      todo.style.display = 'block'
    } else {
      todo.style.display = 'none'
    }
  });
}