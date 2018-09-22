getUsers = async () => {

  // Awaiting response of the fetch call
  const response = await fetch("https://jsonplaceholder.typicode.com/users");

  // Only proceeding once the async promise is resolved.
  const data = await response.json();

  // Only proceed  once the second promise is resolved
  return data
}

getUsers().then(users => console.log(users));