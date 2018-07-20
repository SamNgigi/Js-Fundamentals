// Create Elements
const li = document.createElement('li');

// Add class
li.className = 'js-added-class collection-item';

// Add id
li.id = 'js-added-id';

// Add attribute
li.setAttribute('title', 'Js added attribute.')

// Create text node and append
li.appendChild(document.createTextNode('This li was created with Js.'));

// Create new link element with icon.
const anchorTag = document.createElement('a');
anchorTag.className = 'delete-item secondary-content js-created-link'
// Adding icon
anchorTag.innerHTML = '<i class="fa fa-remove js-created"></i>';

// Adding anchor tag as child of li
li.appendChild(anchorTag)



// Append li and child to ul
document.querySelector('ul.collection').appendChild(li);

console.log(li);