const error = false;
// Without async keyword
Hello = () => 'Hello';
console.log(Hello());

/*  
  With async key word. This automatically makes a function return a
  promise.

  Without fat arrow
*/
async function Hi() {
  return 'Hi'
}
console.log(Hi())
Hi().then(res => console.log(res))

// With fat arrow
sup = async () => "Sup";
console.log(sup())
sup().then(res => console.log(res))

// Async function with an await keyword.
fun = async () => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("This is a test."), 5000);
  });

  if (error) {
    await Promise.reject(new Error("Something went wrong!"));
  } else {
    // Waits until promise is resolved.
    const response = await promise;
    return response;
  }

}
fun()
  .then(res => console.log(res));