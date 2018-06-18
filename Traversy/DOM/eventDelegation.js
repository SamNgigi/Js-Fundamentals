// EVENT DELEGATION
// Example without.
const removeItem = document.querySelector('.delete-item');

// removeItem.addEventListener('click', deleteItem)
// works only on the element we added the listener to.

document.body.addEventListener('click', deleteItem)
// triggers the log anywhere on the dom.

function deleteItem(event) {
  /* 
    Since we are working with an anchor tag we need to use thepreventDefault method or add the hashtag to the link.
  */
  event.preventDefault()
  // console.log('Want to delete this item.'); // return this message
  // console.log(event.target); // returns the element that has been clicked.

  // We want our function to be called only when the fa fa icon is pressed

  /* 
    Note when using className...the entire string must match
    thus in the case below 'fa' would not be enough. It would
    have to be 'fa fa-remove'.
  */
  // Targeting the icon element.
  // if (event.target.className === 'fa fa-remove') {
  //   console.log('Delete this specific item.');
  // }
  // Targeting the anchor tag
  // if (event.target.parentElement.className === 'delete-item secondary-content') {
  //   console.log('Delete this specific item.From parent a tag.');
  // }


  /*  
    Better way of doing this is using the classList.So that the
    targeting an element in an array if it has at least on of the
    class Name we define.
  */
  if (event.target.parentElement.classList.contains('delete-item')) {
    console.log('Delete this item.');
    // This removes the whole li.
    event.target.parentElement.parentElement.remove();

  }
  // 

}