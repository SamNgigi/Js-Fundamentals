const color = 'blue';

switch (color) {
  case 'red':
    console.log('Color is black');
    break

  case 'blue':
    console.log('Color is blue');
    break;

  default:
  console.log('Color is white');
    break;

} // returns blue

switch (new Date().getDay()) {
  case 0:
  // Has to start from 0 because date is 0 based.
    day = 'Sunday'
    break;
  case 1:
    day = 'Monday'
    break;
  case 2:
    day = 'Tueday'
    break;
  case 3:
    day = 'Wednesday'
    break;
  case 4:
    day = 'Thursday'
    break;
  case 5:
    day = 'Friday'
    break;
  case 6:
    day = 'Saturday'
    break;

  default:
    break;
}
console.log(`Today is ${day}`); // returns Wednesday.
