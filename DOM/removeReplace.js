// REPLACE ELEMENT

// Create New h2 Element
const newHeading = document.createElement('h2')
// Add id
newHeading.id = 'task-title';
// New text node
newHeading.appendChild(document.createTextNode('Task List'));

// Get the old heading
const oldHeading = document.getElementById('task-title');
// Parent
const cardAction = document.querySelector('.card-action');

// Replacing previous heading with our new heading
cardAction.replaceChild(newHeading, oldHeading)
// returns new h2 heading.

console.log(newHeading);


//  REMOVE ELEMENT
const all_li = document.querySelectorAll('li');
// Remove list item
all_li[0].remove();
all_li[1].textContent = '#2. I just removed the first one li.';

// Remove list item using child
list = document.querySelector('ul');
list.removeChild(all_li[3]);
all_li[all_li.length - 1].textContent = '# last li. Just remove the 2nd last one';

// CLASSES & ATTR
const secondLi = document.querySelector('li:nth-child(2)');
// Targeting the delete icon.
const link = secondLi.children[0];

let res;
// Classes
res = link.className; // returns classes belonging to link.
res = link.classList; /// returns DOMTokenList.
res = link.classList[0]; // returns delete item
link.classList.add('test-add');
res = link // returns a-tag with added class 'test-add'
link.classList.remove('test-add');
res = link // returns a-tag with removed class 'test-add'

// Attribute
res = link.getAttribute('href'); // returns link
link.setAttribute('href', 'https://google.com');
// sets remove icon href to google.come
link.setAttribute('title', 'Google');
// Adds attribute title and sets it to Google
link.removeAttribute('title')

res = link


console.log(secondLi);
console.log(res);