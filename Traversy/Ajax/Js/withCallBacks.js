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

function createPosts(post, callBack) {
  setTimeout(function () {
    posts.push(post);
    callBack();
  }, 2000);
}

function getPosts() {
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
  This allows us to be able to fetch the third post after it is created even if the getPost executes faster than our createPosts 
*/

createPosts({
  title: "Post Three",
  body: "This is post three"
}, getPosts);