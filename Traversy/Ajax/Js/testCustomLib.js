// Creating an instance of our custom Ajax library.
const http = new CustomHttpLib();

/*
  Get Books

  This would return undefined. Because of its synchronous nature. 
  It would display a post before the http request returns a value to be stored to posts.
  
  const posts = http.get('http://jsonplaceholder.typicode.com/posts');
  console.log(posts);

  To deal with these we add a callBack to our customAjaxLib get prototype that will allow us to define a function that will handle the response so that the display of posts only happens when the request returns the object
*/
http.get('http://jsonplaceholder.typicode.com/posts', function (error, data) {
  if (error) {
    console.log(error);
  } else {
    console.log(data);
  }
});