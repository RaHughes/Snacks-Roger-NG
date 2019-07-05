// Variable Guesser Range
var minRange = document.querySelector('#min-input').value;
var maxRange = document.querySelector('#max-input').value;
var updateBtn = document.querySelector('.guesser-range-button')

// Variable Guesser Challenger
var nameOne = document.querySelector('#name-one').value;
var nameTwo = document.querySelector('#name-two').value;
var guessOne = document.querySelector('#guess-one').value;
var guessTwo = document.querySelector('#guess-two').value;
var submitBtn = document.querySelector('.guesser-challenger-buttons-guess');

// Variable Results Lastest Score

// Function Guesser Range
updateBtn.addEventListener('click', function() {
  updateMinMax();
  document.querySelector('.span-one').innerHTML = minRange
  document.querySelector('.span-two').innerHTML = maxRange
})

function updateMinMax() {
  minRange = document.querySelector('#min-input').value;
  maxRange = document.querySelector('#max-input').value;
}

// Function Guesser Challenger
submitBtn.addEventListener('click', function () {
	getNameGuess();
	console.log(nameOne, nameTwo);
	document.querySelector('#current-challenger-one').innerHTML = nameOne;
	document.querySelector('#current-challenger-two').innerHTML = nameTwo;
	document.querySelector('.guesser-score-current-current-guess-num-one').innerHTML = guessOne;
	document.querySelector('.guesser-score-current-current-guess-num-two').innerHTML = guessTwo;
});

function getNameGuess() {
	nameOne = document.querySelector('#name-one').value;
    nameTwo = document.querySelector('#name-two').value;
    guessOne = document.querySelector('#guess-one').value;
    guessTwo = document.querySelector('#guess-two').value; 
};
