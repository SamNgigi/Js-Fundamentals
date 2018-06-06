// retrieve the element
const add_button = document.getElementById("add");
console.log();


add_button.addEventListener("click", function (event) {
  event.preventDefault;
  // grabbing svg circle and path
  const circle = document.querySelector('#add circle');
  const path = document.querySelector('#add path');
  // add_button.childNodes[1].className.baseVal = ''
  // adding a class to an svg
  circle.setAttribute('class', 'circle');
  path.setAttribute('class', 'plus');
  // console.log(circle);

  // Removing the svg classes after animation ends
  circle.addEventListener("animationend", function () {
    console.log('Worked');
    circle.removeAttribute('class');
    path.removeAttribute('class');
  }, false)


})