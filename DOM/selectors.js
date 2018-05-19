// document.getElementById()

res = document.getElementById('task-title')
// returns the element with the given id.
// i.e <h5 id="task-title" class="test-class"></h5>

// Getting things from the element
res = document.getElementById('task-title').id
// returns the actual id --> task-title
res = document.getElementById('task-title').className
// returns the class value in that is within the same element as the id. --> test-class

console.log(res);


// VERBOSE
// Change styling
// changes h5 background
// document.getElementById('task-title').style.background = '#000';
// // chages h5 font color to white
// document.getElementById('task-title').style.color = '#fff';
// // make the h5 element have a padding of 25px.
// document.getElementById('task-title').style.padding = '20px';

// // Change content
// document.getElementById('task-title').textContent = 'Used .textContent to change this text.'
// document.getElementById('task-title').innerText = 'Used .innerText to change this text.'
// document.getElementById('task-title').innerHTML = '<span style="color: orange;">Used .innerHTML add span and to change this text.</span>'

// REFACTORED.
const taskTitle = document.getElementById('task-title')
// Change background
taskTitle.style.background = '#000';
taskTitle.style.color = '#fff';
taskTitle.style.padding = '20px';
taskTitle.textContent = 'Used .textContent to change this text.'
taskTitle.innerText = 'Used .innerText to change this text.'
taskTitle.innerHTML = '<span style="color: orange;">Used .innerHTML add span and to change this text.</span>'