// Creating an instance of our custom Ajax library.
const http = new CustomHttpLib();

// Defining an example call back function
const exampleCallBack = function (error, data) {
  if (error) {
    // console.log(error);
    let posts = error
    console.log(posts);
  } else {
    // console.log(data);
    let posts = data
    console.log(posts);
    // Had to get this posts to work
  }
}

/*
  Get Books

  This would return undefined. Because of its synchronous nature. 
  It would display a post before the http request returns a value to be stored to posts.
  
  const posts = http.get('http://jsonplaceholder.typicode.com/posts');
  console.log(posts);

  To deal with these we add a callBack to our customAjaxLib get prototype that will allow us to define a function that will handle the response so that the display of posts only happens when the request returns the object
*/

/* 
  Only the last call of exampleCallBack is executed
*/

http.get('http://jsonplaceholder.typicode.com/posts', exampleCallBack);


// Creating data
const new_data = {
  /* 
    Interesting we don't have to define all the other properties as defined by the api itself.
  */
  title: "Test data"
};

const update_data = {
  title: "Edited this title"
}
// Testing our custom lib post method
http.post('http://jsonplaceholder.typicode.com/posts', new_data, exampleCallBack)

// Testing our custom lib put method
http.put('http://jsonplaceholder.typicode.com/posts/99', update_data, exampleCallBack)

/* 
  Interesting
    Got an error
    `TypeError: callBack is not a function att HttpRequest.http.onload`

    This is because update_data was being called as a callback yet it was defining an object. Thus the type error.

    Note however that the error was pointing to the customAjaxLib instead of the
    testCustomLib. This means sometimes a library might be expecting a function/object but
    the dev defines an inappropriate type. Resulting to an error lib wise yet the error may
    be in the dev's code.
*/
http.delete('http://jsonplaceholder.typicode.com/posts/99', exampleCallBack)