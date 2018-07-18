// GET ELEMENTS BY CLASS NAME

const items = document.getElementsByClassName('collection-item');
// returns a HTML Collection of the class collection-item.
console.log(items);
console.log(items[0]);
// returns first instance of class collection-item 
/* 
  returns the first HTML collection item which is the first
  instance of an element with the attribute 
  class = collection item.
*/

// Making changes to the DOM.
items[0].style.color = '#c61aff'
items[3].textContent = 'Edited using className'

// We can also do this.
const listItems = document.querySelector('ul').getElementsByClassName('collection-item')
console.log(listItems);
// This will return a HTML Collection of the attribute class = collection-item specific to the ul tag.


// GET ELEMENT BY TAG NAME
let listItem = document.getElementsByTagName('li');
console.log(listItem);
listItem[0].style.color = '#ff1a75'
listItem[2].textContent = 'Edited using tags'


/*
  listItem.reverse()
  I think i 've just realized that this error

    'Uncaught TypeError: listItem.reverse is not a function.'

  is thrown when a method is called on the wrong type of var.
*/

// Converting HTML Collection into an array
listItemArray = Array.from(listItem);
listItemArray.reverse()
listItemArray.forEach(function (li, index) {
  // console.log(li); // returns each li tags
  console.log(li.className);
  // returns className = collection item
  li.textContent = 'Loop text edit.'
  // returns a the li with new edited text.
  li.textContent = `${index}: Template string edit.`
  // returns list item with index in reversed order.
});
console.log(listItemArray);



/*
 QUERY SELECTOR ALL

  The.querySelectorAll() returns a node list, which includes not
  just elements stuff like text nodes and clall array methods on
  results without having to convert into arrays
*/

listItem = document.querySelectorAll('ul.collection li.collection-item');
// returns a NodeList
listItem.forEach(function (li, index) {
  li.textContent = `${index}: Node listed loop edit.`
  // returns edited list items without having to convert into array
  // Returns un-reversed list.
});

const li_odd = document.querySelectorAll('li:nth-child(odd)')
const li_even = document.querySelectorAll('li:nth-child(even)')

li_odd.forEach(function (li, index) {
  li.style.background = '#ccc'
  //Note - Because arrays are 0 based it may seem like we styled the wrong li's.
  // We correct that by.
  li.textContent = `Edited odd.`
})
li_even.forEach(function (li, index) {
  li.textContent = `Edited even.`
})

// OR
for (let index = 0; index < li_even.length; index++) {
  li_even[index].style.background = '#8c8c8c'
}

console.log(listItem);