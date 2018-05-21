const clearBtn = document.querySelector('.clear-tasks');
const card = document.querySelector('.card');
const heading = document.querySelector('h5');

// CLICK EVENT
clearBtn.addEventListener('click', runEvent);

// DOUBLE CLICK EVENT
clearBtn.addEventListener('dblclick', runEvent);
// seems like they work together.

// MOUSE DOWN
clearBtn.addEventListener('mousedown', runEvent);

// MOUSE UP
clearBtn.addEventListener('mouseup', runEvent);

// MOUSE ENTER
card.addEventListener('mouseenter', runEvent);

// MOUSE LEAVE
card.addEventListener('mouseleave', runEvent);

// MOUSE OVER
card.addEventListener('mouseover', runEvent);
// MOUSE OUT
card.addEventListener('mouseout', runEvent);

/* 
Diffenence between mouse-enter & mouse leave vs mouse over 
mouse out is that the later works on every child element of the
parent.

The former works only on the parent element.

*/

// fires event whenever the mouse moves within the element.
card.addEventListener('mousemove', runEvent);




function runEvent(event) {
  event.preventDefault()
  console.log(`MOUSE EVENT TYPE: ${event.type}.`);

  heading.textContent = `MouseX: ${event.offsetX}, MouseY: ${event.offsetY}`
  let red = event.offsetY;
  let green = event.offsetX;
  let blue = 40;
  document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`

}