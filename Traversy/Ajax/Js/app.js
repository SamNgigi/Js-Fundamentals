const http_request = new CustomLibV3;

// Getting user data
http_request.get("https://jsonplaceholder.typicode.com/users")
  .then(res => console.log(res))
  .catch(error => console.log(error))

// Creating user data
const user_data = {
  name: "Hailey Rose",
  username: "HaileyRose",
  email: "HaileyRose@gmail.com",
}
// Posting the user data to our endpoint.
http_request.post("https://jsonplaceholder.typicode.com/users", user_data)
  .then(res => console.log(res))
  .catch(error => console.log(error))

// Updating a specific users data
http_request.put("https://jsonplaceholder.typicode.com/users/4", user_data)
  .then(res => console.log(res))
  .catch(error => console.log(error))

// Deleting user data
http_request.delete("https://jsonplaceholder.typicode.com/users/5")
  .then(res => console.log(res))
  .catch(error => console.log(error))