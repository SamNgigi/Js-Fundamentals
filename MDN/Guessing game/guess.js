// Alt + Shift + 0 ---> Vertically or Horizontally Splits window.
/* 
  Generating a random number between 1 - 100.
  We add 1 to include 100
*/
const random_number = Math.floor(Math.random() * 100) + 1;
console.log(random_number);

// Result displayed after guesses.
const guesses = document.querySelector('.guesses');
const game_over = document.querySelector('.game-over');
const low_or_hi = document.querySelector('.low-or-hi');
const container = document.querySelector('.container');
// Form actions
let guess = document.querySelector('.guess-input');
console.log(guess.value);

const submit = document.querySelector('.submit');

// Paragraphs display
const reset_paragraphs = document.querySelectorAll('.result-paragraphs p');
// console.log(reset_paragraphs.length);

// For counting the turns
let guess_count = 1;
let resetButton;

// Function that checks the guess and returns appropriate message.
function checkGuess(event) {
  event.preventDefault();
  // I don't know why the assigned elements are not working.
  const player_guess = Number(document.querySelector('.guess-input').value);
  console.log(player_guess);


  if (guess_count === 1) {
    guesses.textContent = 'Previous guesses: ';
  }
  guesses.textContent += player_guess + ' ';

  if (player_guess === random_number) {
    game_over.textContent = "!!!CONGRATULATIONS!!! You got it right!";
    game_over.style.backgroundColor = 'green';
    game_over.style.color = 'white';
    gameOver()
  } else if (guess_count === 4) {
    game_over.textContent = 'GAME OVER!';
    document.querySelector('.guess-input').blur();
    gameOver()
  } else {
    game_over.textContent = 'Try Again.';
    game_over.style.backgroundColor = 'red';
    if (player_guess < random_number) {
      low_or_hi.textContent = "Last guess was too low."
    } else if (player_guess > random_number) {
      low_or_hi.textContent = "Last guess was too high."
    }
  }

  guess_count++;
  guess = '';
  document.querySelector('.guess-input').focus();
  // guess.focus(); Seems the focus() only works with the document object itself.
}
// Triggering the checkGuess logic.
submit.addEventListener('click', checkGuess);

// Disabling guess submittion and displaying the reset button. 
function gameOver() {
  guess.disabled = true;
  submit.disabled = true;

  reset_button = document.createElement('button')
  reset_button.className = 'mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored reset';
  reset_icon = document.createElement('i');
  reset_icon.className = 'material-icons';
  reset_icon.textContent = 'repeat';
  reset_button.appendChild(reset_icon);
  container.appendChild(reset_button);
  reset_button.addEventListener('click', resetGame);
}

// Resetting the game
function resetGame() {
  guess_count = 1;


  for (let i = 0; i < reset_paragraphs.length; i++) {
    reset_paragraphs[i].textContent = '';
  }

  reset_button.parentNode.removeChild(reset_button);

  guess.disabled = true;
  submit.disabled = true;
  guess.value = ''
  document.querySelector('.guess-input').focus();

  game_over.style.backgroundColor = 'white';

  random_number = Math.floor(Math.random() * 100) + 1;
}