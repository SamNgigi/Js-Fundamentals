/*
Here we leatn about two terms
    Synchronous Task - Program has to wait for the previous task to finish before it move to next part.

    Asynchronous Tasks - Program moves to next line of code while previous task is still completing.

Promise- as the name suggests is a placeholder for a future value.

We create promises using the keyword new.
*/
var promise = new Promise((resolve, reject)=>{});

/*
The promise instance takes a function as a parameter and that function has 2 arguments.
-resolve
-reject

Inside the inner function that we pass as a parameter is where we perfom our Asynchronous tasks.
We usuall return the promise from a function.
We call resolve() function after the as asyncTask has been completed.
*/
function asyncTask() {
  var promise = new Promise((resolve,reject)=>{
    setTimeout(()=>{
      console.log("Action complete");
      resolve();
    }, 1000);

  });
  return promise;
}
// We call the asyncTask functiion;
console.log(asyncTask());

// Below to factor in when we encounter a error to call the reject function
function anotherAsyncTask() {
  var promie = new Promise((resolve, reject)=>{
    setTimeout(()=>{
      try {
        console.log("Second Action complete ");
        resolve();
      } catch (err) {
        reject();
      }
    }, 2000);
  });
  return promise;
}
console.log(anotherAsyncTask());

/*
PROMISE NOTIFICATION.
The promise object has a then() function that alerts us whether our async function has succesfu;;y completed or not.

asycTask().then(()=>{console.log('Event was successful')},()=>{console.log('Event failed')},)
*/

function thenAsync() {
  var promise = new Promise((resolve, reject)=>{
    setTimeout(()=>{
      try {
        console.log("Test then() Notification");
        resolve();
      } catch (err) {
        reject();
      }
    }, 3000)
  });
  return promise;
}

thenAsync().then(()=>{console.log("Event successful!")}, ()=>{console.log("Event Failed")},);

/*
We can also pass in values to the reject() and resolve() functions that can be used by the then function's arguments.
*/
function withReValues() {
    var promise = new Promise((resolve, reject)=>{
      setTimeout(()=>{
        try {
          console.log("With values in resolve and reject");
          resolve("Success!");
        } catch (err) {
          reject(err);
        }
      }, 4000);
    });
    return promise;
}
withReValues().then((val)=>{console.log(val)},(err)=>{console.log(err)},)
