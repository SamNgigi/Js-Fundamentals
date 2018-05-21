let res;

const ul = document.querySelector('ul.collection');
const listItem = document.querySelector('li.collection-item:first-child');

res = listItem
res = ul;

// TYPE OF NODES
// 1 - Elements
// 2 - Attribute (deprecated)
// 3 - Text node
// 8 - Comment
// 9 - Document itself
// 10 - Doctype.


// Get child nodes
res = ul.childNodes;
// returns all the node including the line breaks. NodeList
res = ul.childNodes[0]; // returns #text Node
res = ul.childNodes[0].nodeName // returns #text
res = ul.childNodes[0].nodeType // returns 1 for Text node.
res = ul.childNodes[5].nodeType // returns 8 for Cooment node.


// Get children element nodes
res = ul.children;
// return all the child elements. In this case 5. HTML Collection.
res = ul.children[0] // returns first child element.
ul.children[1].textContent = 'Sup Fam!'
// returns the second element with the text updated to 'Sup Fam'

// Getting child of child.
res = ul.children[3].children;
// returns a HTML Collection of whatever is within/child of the 4th child of ul
res = ul.children[3].children[0];
// returns the first element within the 4th child.
ul.children[3].children[0].id = "add-this-id-to-child"

// First Child
res = ul.firstChild; // returns first child node
res = ul.firstElementChild; // returns the first element.

// Last Child
res = ul.lastChild; // returns last child node.
res = ul.lastElementChild; // returns last child element.

// Count child elements
res = ul.childElementCount; // returns 5

// Get parent node.
res = listItem.parentNode; // returns ul element
res = listItem.parentElement; // returns ul element
res = listItem.parentElement.parentElement
// return div with class of card action.

// Get next sibling
res = listItem.nextSibling; // returns next sibling text node.
res = listItem.nextElementSibling; // returns next sibling element.
res = listItem.nextElementSibling.nextElementSibling;
// returns next next sibling element.

// Get previous sibling
res = listItem.previousSibling // returns previous sibling node. i.e text
res = listItem.previousElementSibling
// returns previous sibling element.. in this case their is no previous node...therefore return is null.

console.log(res);