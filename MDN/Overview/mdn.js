const p = document.querySelector('p');
const button = document.querySelectorAll('button');
let name = 'Default';
p.addEventListener('click', updateName);

function updateName() {
  var name = prompt('Enter a new name');
  p.textContent = `Player: ${name}`;
}

function createParagraph() {

  const p = document.createElement('p');
  p.textContent = `Player: ${name}`;
  p.addEventListener('click', updateName);

  function updateName() {
    var name = prompt('Enter a new name');
    p.textContent = `Player: ${name}`;
  }

  document.body.appendChild(p);
}

/* 
  The code below allows to select all the button elements and attach an
  event listener to them.

  We are discouraged from using the old;

    <button onclick="createParagraph">Click Me</button>
  
  because:
  1. It is bad practice to pollute HTML with JavaScript.
  2. It is inefficient. We would have to add the 'onclick' manually to every button element we create.

*/
for (let i = 0; i < button.length; i++) {
  button[i].addEventListener('click', createParagraph);
}