const http_req = new CustomHttp;

// Getting Users.

/* 
  *Asynchronously

  *http_req.get('https://jsonplaceholder.typicode.com/users') 
  
*/

// Synchronously

const response = http_req.get('https://jsonplaceholder.typicode.com/users');

// This returns a promise.
console.log(response)

// When we want to return the data from the promise we;
http_req.get('https://jsonplaceholder.typicode.com/users')
  .then(data => console.log(data))
  .catch(error => console.log(error));



// Creating User data

const user_data = {
  name: "John Doe",
  username: "JohnDoe",
  email: "JohnDoe@gmail.com"
}

// Create Post on server
http_req.post("https://jsonplaceholder.typicode.com/users", user_data)
  .then(data => console.log(data))
  .catch(error => console.log(error));


// Using the PUT request. We want to update user with id of say 5.
http_req.put("https://jsonplaceholder.typicode.com/users/5", user_data)
  .then(data => console.log(data))
  .catch(error => console.log(error));

// Deleting a user
http_req.delete("https://jsonplaceholder.typicode.com/users/5", user_data)
  .then(data => console.log(data))
  .catch(error => console.log(error));