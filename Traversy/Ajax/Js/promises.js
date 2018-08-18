const posts = [{
    title: "Post One",
    body: "This is post one"
  },
  {
    title: "Post Two",
    body: "This is post two"
  },
];

function createPost(post) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      const error = false
      if (!error) {
        posts.push(post);
        // resolve("Buyaa folks!!");
        /* 
          The reason 'Buyaa folks' was not logging in the above situation is because the resolve() is a placeholder for whatever function we pass into the .then method.
        */
        resolve();
      } else {
        reject("Error: Something went wrong.")
      }
    }, 2000);
  });
}

function getPosts() {
  setTimeout(function () {
    let output = '';
    posts.forEach(function (post) {
      output += `<li>${post.title}</li>`;
    });
    document.body.innerHTML = output;
    console.log("Buyaa folks!!")
  }, 1000);
}

function buyaa() {
  setTimeout(function () {
    console.log("Buyaa folks!!")
  }, 500);
}

const new_post = {
  title: "Totally New",
  body: "This is a new"
}
createPost(new_post)
  .then(getPosts)
  .catch(function (error) {
    console.log(error);
  })