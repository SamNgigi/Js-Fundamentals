// LIST ITEM SVGs

// Done SVG
const doneSVG = '<svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24"> <path class="fill" d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.959 17l-4.5-4.319 1.395-1.435 3.08 2.937 7.021-7.183 1.422 1.409-8.418 8.591z"/> </svg>'
// Remove SVGs
const removeSVG = '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"> <path class="fill" d="M9 19c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm4 0c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm4 0c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm5-17v2h-20v-2h5.711c.9 0 1.631-1.099 1.631-2h5.315c0 .901.73 2 1.631 2h5.712zm-3 4v16h-14v-16h-2v18h18v-18h-2z"/> </svg>'


const input_field = document.getElementById("task")

const ul = document.getElementById("list")

// Clearing the input field
const clean_slate = document.querySelector('.icon');
clean_slate.addEventListener("click", function (event) {
  input_field.value = '';
}, false)


// Submitting task.
const add_button = document.getElementById("add");
// Adding event listener to our add_button element.
add_button.addEventListener("click", submit_task, false);

function submit_task(event) {
  event.preventDefault;

  // BUTTON ANIMATION 
  // Grabbing svg circle and path
  const circle = document.querySelector('#add circle');
  const path = document.querySelector('#add path');
  // Adding a class to an svg element
  circle.setAttribute('class', 'circle');
  path.setAttribute('class', 'plus');
  // Adding event listener to svg circle element to know when the animation ends
  circle.addEventListener("animationend", circle_animated, false);
  // Calling function to remove svg element classes to reset animation.
  function circle_animated() {
    // console.log("Worked");
    circle.removeAttribute('class');
    path.removeAttribute('class');
  }

  // INPUT SUBMITTION
  let task = document.getElementById('task').value;
  if (task) add_todo_item(task); //=> testing add_todo_item function.
  // if (task) {
  //   console.log(task);
  //   input_field.value = '';
  // } else {
  //   console.log('Give me something.');
  // }
}

function add_todo_item(todo) {
  // console.log(todo);
  /* 
    Creating our li which will display our tasks. 
  */
  const li = document.createElement('li');
  li.className = 'animated flipInX';

  const li_ui = document.createElement('div');
  li_ui.className = 'back';

  const text_span = document.createElement('span');
  text_span.className = 'todo-item';
  // text_span.innerText = todo;
  text_span.appendChild(document.createTextNode(todo))

  const li_actions = document.createElement('div');
  li_actions.classList.add('actions');

  const done_span = document.createElement('span');
  done_span.classList.add('done');
  done_span.innerHTML = doneSVG;

  const remove_span = document.createElement('span');
  remove_span.classList.add('remove');
  remove_span.innerHTML = removeSVG;

  li_actions.appendChild(done_span);
  li_actions.appendChild(remove_span);

  li_ui.appendChild(text_span);
  li_ui.appendChild(li_actions);

  li.appendChild(li_ui);

  ul.appendChild(li)
}

/* 
  To create an element in html we could use innerHTML but that would not be efficient because when rendering a huge chunk of code innerHtml
  would consume a lot of browser memory making app unstable page loading especially of mobile devices very slow.
*/