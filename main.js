// Variable Guesser Range
var minRange = document.querySelector('#min-input').value;
var maxRange = document.querySelector('#max-input').value;
var updateBtn = document.querySelector('.guesser-range-button')
var randoNum 

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
  randomNum(minRange, maxRange);
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
  compareResults1(randoNum, guessOne);
  compareResults2(randoNum, guessTwo);
  console.log('type of:', typeof(guessOne))
});


function getNameGuess() {
	  nameOne = document.querySelector('#name-one').value;
    nameTwo = document.querySelector('#name-two').value;
    guessOne = document.querySelector('#guess-one').value;
    guessTwo = document.querySelector('#guess-two').value; 
};


function randomNum(min, max) {
    console.log(min, max)
    randoNum = Math.floor(Math.random() * (max - min) + min);
    if(randoNum === 0) {
      randoNum = randoNum + 1;
    }
    console.log(randoNum);
    return randoNum;
}

  function compareResults1(randomNumber, userGuess) {
    userGuess = parseInt(userGuess)
    console.log('type of line 63:', typeof(guessOne))
    if(userGuess === randomNumber) {
      document.querySelector('.result-one').innerHTML = 'BOOM';
    } else if(userGuess > randomNumber) {
      document.querySelector('.result-one').innerHTML = 'That\'s too high!';
    } else if(userGuess < randomNumber) {
      document.querySelector('.result-one').innerHTML = 'That\'s too low!';
    }
  }

  function compareResults2(randomNumber, userGuess) {
    userGuess = parseInt(userGuess)
    if(userGuess === randomNumber) {
      document.querySelector('.result-two').innerHTML = 'BOOM';
    } else if(userGuess > randomNumber) {
      document.querySelector('.result-two').innerHTML = 'That\'s too high!';
    } else if(userGuess < randomNumber) {
      document.querySelector('.result-two').innerHTML = 'That\'s too low!';
    }
  }