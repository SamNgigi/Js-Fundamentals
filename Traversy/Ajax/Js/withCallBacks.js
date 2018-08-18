/* 
  With call backs we can add our second getPost function as an argument to our callback parameter.
*/

const posts = [{
    title: "Post One",
    body: "This is post one"
  },
  {
    title: "Post Two",
    body: "This is post two"
  },
]

/* 
  createPost function.
*/
function createPosts(post, callBack) {
  /* 
    We simulate a server response by adding the setTimeout
    function that executes push a post to our posts array after
    2 seconds.
  */
  setTimeout(function () {
    posts.push(post);
    /* 
      We add a callback function that allows us to call our
      getPost function after we push our post allowing us to
      display our new post even if it takes longer to execute.
    */
    callBack();
  }, 2000);
}

/* 
  We create a getPost() function that executes faster than the createPost function
*/
function getPosts() {
  /* 
    The setTimeOut function here triggers the retrieving and displaying of posts after just a second.
  */
  setTimeout(function () {
    let output = "";
    posts.forEach(function (post) {
      output += `<li>${post.title}</li>`
    })
    document.body.innerHTML = output;
  }, 1000);
}

/* 
  What happens here is that we pass in our getPosts function as a callBack enabling it to execute asynchronously.
  This allows us to be able to fetch the third post after it is created even if the getPost executes faster than our createPosts.

  I think this takes like 3sec.
*/

createPosts({
  title: "Post Three",
  body: "This is post three"
}, getPosts);