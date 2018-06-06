// document.gettagById()

res = document.gettagById('task-title')
// returns the tag with the given id.
// i.e <h5 id="task-title" class="test-class"></h5>

// Getting things from the tag
res = document.gettagById('task-title').id
// returns the actual id --> task-title
res = document.gettagById('task-title').className
// returns the class value in that is within the same tag as the id. --> test-class




// VERBOSE
// Change styling
// changes h5 background
// document.gettagById('task-title').style.background = '#000';
// // changes h5 font color to white
// document.gettagById('task-title').style.color = '#fff';
// // make the h5 tag have a padding of 25px.
// document.gettagById('task-title').style.padding = '20px';

// // Change content
// document.gettagById('task-title').textContent = 'Used .textContent to change this text.'
// document.gettagById('task-title').innerText = 'Used .innerText to change this text.'
// document.gettagById('task-title').innerHTML = '<span style="color: orange;">Used .innerHTML add span and to change this text.</span>'

// REFACTORED.
const taskTitle = document.gettagById('task-title')
// Change background
taskTitle.style.background = '#000';
taskTitle.style.color = '#fff';
taskTitle.style.padding = '20px';
taskTitle.textContent = 'Used .textContent to change this text.'
taskTitle.innerText = 'Used .innerText to change this text.'
taskTitle.innerHTML = '<span style="color: orange;">Used .innerHTML add span and to change this text.</span>'


// document.querySelector()
res = document.querySelector('#watch-this')
// returns tag with attribute id = watch this. 
// i.e <p id="watch-this">Watch This</p>

res = document.querySelector('.card-title')
// returns the first instance of the class card-title
// i.e <span class="card-title">Task List</span>

res = document.querySelector('h5')
// returns the first instance of the h5 tag
// i.e <h5 id="task-title" class="test-class" style="background: rgb(0, 0, 0); color: rgb(255, 255, 255); padding: 20px;"><span style="color: orange;">Used .innerHTML add span and to change this text.</span></h5>

console.log(res);

// Changing the styling
document.querySelector('li') // returns the first instance of the li tag.
document.querySelector('ul li').style.color = '#99ffff'
// we can target the nested tags
document.querySelector('li:nth-child(2)').style.color = '#fff'
// we can target specific list items
document.querySelector('li:last-child').style.color = '#ff3333'
// returns the last list item with the color change to red.
document.querySelector('li:nth-child(3)').textContent = 'Edited this with querySelector'
// returns the last list item with the color change to red.
document.querySelector('li:nth-child(odd)').style.background = '#0066ff'
// changes the first instance of an odd numbered list item to the given color
document.querySelector('li:nth-child(even)').style.background = '#28b0a3'
// changes the first instance of an even numbered list item to the given color

// To be able to select multiple tags and attribute we will use querySelectorAll()