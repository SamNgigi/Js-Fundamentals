// EVENT LISTENERS

document.querySelector('.clear-tasks').addEventListener('mouseover', function (event) {
  // We prevent the default link behaviour.
  event.preventDefault()
  // We can also prevent this default behaviour by adding a hashlink.
  // Event type

  let res = event.type
  // returns click as a result of the eventlistener we put as an argument in the addEventListener function
  console.log(res);
  console.log('Sup Fam!');
}) // returns Sup Fam on mousehover



// FUNCTION NAME DEFINED...i.e onClick
document.querySelector('.testing-click').addEventListener('click', onClick);

function onClick(event) {
  event.preventDefault()
  // console.log('I think i love you alot mnd');

  let res;

  res = event; //. returns Mouse Event Object

  // Event target element

  res = event.target;
  // returns the element attached to the event. 
  res = event.target.className;
  // returns element classes... i.e testing-click btn blue.
  res = event.target.classList;
  // returns a list of all the classes in an element.

  event.target.innerText = 'Changed on button click';
  // Changes button text on click.

  // TimeStamp
  res = event.timeStamp; // returns timestamp of click.

  // Coordinates of event relative to the window.
  res = event.clientY;
  res = event.clientX;

  // Coordinates of event relative to the the element itself.
  res = event.offsetY;
  res = event.offsetX;

  console.log(res);
}