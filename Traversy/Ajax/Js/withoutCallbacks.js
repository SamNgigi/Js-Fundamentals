/* 
  Now a call back function is a function that is passed in as a parameter
  to another function and then run in the function body
*/

const posts = [{
    title: 'Post One',
    body: "This is post one"
  },
  {
    title: 'Post Two',
    body: "This is post two."
  },
]

function createPost() {
  setTimeout(function () {
    posts.push(posts);
  }, 2000);
}

function getPosts() {
  setTimeout(function () {
    let output = "";
    posts.forEach(function (post) {
      output += `<li>${post.title}</li>`;
    })
    document.body.innerHTML = output;
  }, 1000);
}


/* 
  So the interesting thing that we've done here is that we've set the
  getPost function to execute faster than the createPost function.

  This means that out 3rd post doesn't get fetched. 
*/

createPost({
  title: "Post Three",
  body: "This is post three"
});

getPosts();