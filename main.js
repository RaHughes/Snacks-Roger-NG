

// Variable Guesser Range
var minRange = document.querySelector('#min-input').value;
var minRangeAlert = document.querySelector('.min');
var minRangeText = document.querySelector('.guesser-range-input-one');
var maxRange = document.querySelector('#max-input').value;
var maxRangeAlert = document.querySelector('.max');
var maxRangeText = document.querySelector('.guesser-range-input-two');
var updateBtn = document.querySelector('.guesser-range-button')
var randoNum 

// Variable Guesser Challenger
var spanOne = document.querySelector('.span-one').value;
console.log('line 11: ', spanOne)
var spanTwo = document.querySelector('.span-two').value;
var nameOne = document.querySelector('#name-one').value;
var nameTwo = document.querySelector('#name-two').value;
var nameOneAlert = document.querySelector('.name-one-alert');
var gcneOne = document.querySelector('.guesser-challenger-name-error-one');
var nameTwoAlert = document.querySelector('.name-two-alert');
var gcneTwo = document.querySelector('.guesser-name-error-two');
var guessOne = document.querySelector('#guess-one').value;
var gcgeOne = document.querySelector('.guesser-number-error-one')
var guessTwo = document.querySelector('#guess-two').value;
var gcgeTwo = document.querySelector('.guesser-number-error-two')
var guessOneAlert = document.querySelector('.guess-one-alert');
var guessTwoAlert = document.querySelector('.guess-two-alert');
var guessTwoInput = document.getElementById('#guess-two');
var submitBtn = document.querySelector('.guesser-challenger-buttons-guess');
var resetBtn = document.querySelector('.guesser-challenger-buttons-reset');
var addToReset = document.querySelector('.guesser-challenger-buttons-reset');
var clearBtn = document.querySelector('.guesser-challenger-buttons-clear');
var addToClear = document.querySelector('.guesser-challenger-buttons-clear');
var guessInputs = document.querySelectorAll('guess-one','guess-two');
var guessCount = 0;
var startTime;
var timeElapsed;
var timerOn = false;
// Variable Results Lastest Score
var results = document.querySelector('.results');

// Function Guesser Range
updateBtn.addEventListener('click', function() {
  updateMinMax();
  checkRangeInput()
  randomNum(minRange, maxRange);
  document.querySelector('.span-one').innerHTML = minRange
  document.querySelector('.span-two').innerHTML = maxRange
  updateBtn.disabled = true;
  updateBtn.style.backgroundColor='#d0d2d3';
  updateBtn.classList.remove('clear');
})

clearBtn.addEventListener('click', function(){
  document.querySelector('#guess-one').value = ''
  document.querySelector('#guess-two').value = ''
  clearBtn.disabled = true;
  clearBtn.style.backgroundColor='#d0d2d3';
  addToClear.classList.remove('clear');
  guessOneAlert.classList.remove('guess-error-one');
  guessTwoAlert.classList.remove('guess-error-two');
  gcgeOne.classList.remove('gcge-one');
  gcgeTwo.classList.remove('gcge-two'); 
  console.log('clear button is working!')
});

resetBtn.addEventListener('click', function() {
  document.querySelector('#guess-one').value = ''
  document.querySelector('#guess-two').value = ''
  document.querySelector('#min-input').value = ''
  document.querySelector('#max-input').value = ''
  document.querySelector('#name-one').value = ''
  document.querySelector('#name-two').value = ''
  document.querySelector('.result-one').innerHTML = 'result'
  document.querySelector('.result-two').innerHTML = 'result'
  document.querySelector('#current-challenger-one').innerHTML = 'Challenger 1 name'
  document.querySelector('#current-challenger-two').innerHTML = 'Challenger 2 name'
  document.querySelector('.guesser-score-current-current-guess-num-one').innerHTML = '0'
  document.querySelector('.guesser-score-current-current-guess-num-two').innerHTML = '0'
  document.querySelector('.span-one').innerHTML = '1'
  document.querySelector('.span-two').innerHTML = '100'
  console.log('Reset button is working?')
  resetBtn.disabled = true;
  resetBtn.style.backgroundColor='#d0d2d3';
  addToReset.classList.remove('reset');
  guessOneAlert.classList.remove('guess-error-one');
  guessTwoAlert.classList.remove('guess-error-two');
  nameOneAlert.classList.remove('name-error-one');
  nameTwoAlert.classList.remove('name-error-two');
  gcgeOne.classList.remove('gcge-one');
  gcgeTwo.classList.remove('gcge-two');
  gcneOne.classList.remove('gcne-one');
  gcneTwo.classList.remove('gcne-two');
  minRangeAlert.classList.remove('min-range-alert')
  maxRangeAlert.classList.remove('min-range-alert')
  minRangeText.classList.remove('gcne-one')
  maxRangeText.classList.remove('gcne-one')
  disableButtons();
  randomNum(minRange, maxRange);
  
});

function disableButtons() {
  if(resetBtn.disabled = true) {
  clearBtn.disabled = true;
  clearBtn.style.backgroundColor='#d0d2d3';
  addToClear.classList.remove('clear');
  guessOneAlert.classList.remove('guess-error-one');
  guessTwoAlert.classList.remove('guess-error-two');
  gcgeOne.classList.remove('gcge-one');
  gcgeTwo.classList.remove('gcge-two'); 
  console.log('clear button is working!')
  }
}
// Range Error
function checkRangeInput() {
  if(parseInt(minRange) >= parseInt(maxRange)) {
    minRangeAlert.classList.add('min-range-alert')
    maxRangeAlert.classList.add('min-range-alert')
    minRangeText.classList.add('gcne-one')
    maxRangeText.classList.add('gcne-one')
  }
}
// Guess Counter Function
function guessCounter() {
  guessCount += 1
  console.log('guessCount: ', guessCount)
}

// Button disable functionality

function clearBtnDisable(){
  addToClear.classList.add('clear');
    clearBtn.style.backgroundColor='#6e6e6e';
    clearBtn.disabled = false;
}

var guesserChallangerParent = document.querySelector('.guesser-challenger')
var guesserRangeParent = document.querySelector('.guesser-range')
clearBtn.disabled = true;
guesserChallangerParent.addEventListener('keypress', function(event){
  if (event.target.id === 'guess-one' || event.target.id === 'guess-two'){
      clearBtnDisable();
  }
})

function resetBtnDisable() {
  addToReset.classList.add('reset');
    resetBtn.style.backgroundColor='#6e6e6e';
    resetBtn.disabled = false;
}
resetBtn.disabled = true;
updateBtn.disabled = true;
guesserChallangerParent.addEventListener('keypress', function(event){
  if (event.target.id === 'name-one' || event.target.id === 'name-two'){
      resetBtnDisable();
  }
})

guesserRangeParent.addEventListener('keypress', function(event){
  if (event.target.id === 'min-input' || event.target.id === 'max-input'){
      resetBtnDisable();
      updateBtnDisable();
  }
})

function updateBtnDisable() {
  updateBtn.classList.add('clear');
  updateBtn.style.backgroundColor='#6e6e6e';
  updateBtn.disabled = false;
}

function updateMinMax() {
  minRange = document.querySelector('#min-input').value;
  maxRange = document.querySelector('#max-input').value;
}

// Function Guesser Challenger
submitBtn.addEventListener('click', function () {
  getNameGuess();
  checkInputFields();
  // console.log('line 121', nameOne.length, nameTwo.length);
if ((parseInt(guessOne) >= parseInt(minRange)) && (parseInt(guessOne) <= parseInt(maxRange)) && 
    (parseInt(guessTwo) >= parseInt(minRange)) && (parseInt(guessTwo) <= parseInt(maxRange)) &&
    (nameOne.length > 0) && (nameTwo.length > 0)) {
    document.querySelector('#current-challenger-one').innerHTML = nameOne;
    document.querySelector('#current-challenger-two').innerHTML = nameTwo;
    document.querySelector('.guesser-score-current-current-guess-num-one').innerHTML = guessOne;
    document.querySelector('.guesser-score-current-current-guess-num-two').innerHTML = guessTwo;
    compareResults1(randoNum, guessOne);
    compareResults2(randoNum, guessTwo);
    checkForWinner(randoNum, guessOne, guessTwo);
    guessCounter();
    if (timerOn === false){
      startTime = Date.now();
      timerOn = true
    }
    console.log('line 119 - timerOn: ', timerOn)
};
});

function checkInputFields() {
  console.log('checkInputFields working');
  console.log(guessOne, spanOne);
  if(parseInt(guessOne) < parseInt(minRange) || parseInt(guessOne) > parseInt(maxRange) || (guessOne.length === 0)) {
    guessOneAlert.classList.add('guess-error-one')
    // document.querySelector('.guesser-score-current-current-guess-num-one').innerHTML = '0'
    document.querySelector('#guess-one').value = ''
    gcgeOne.classList.add('gcge-one')
  };
  if(parseInt(guessTwo) < parseInt(minRange)|| parseInt(guessTwo) > parseInt(maxRange) || (guessTwo.length === 0)) {
    guessTwoAlert.classList.add('guess-error-two')
    document.querySelector('#guess-two').value = ''
    // document.querySelector('.guesser-score-current-current-guess-num-two').innerHTML = '0'
    gcgeTwo.classList.add('gcge-two')
  };
  if(nameOne.length === 0) {
    nameOneAlert.classList.add('name-error-one')
    document.querySelector('#name-one').value = ''
    gcneOne.classList.add('gcne-one');
  };
  if(nameTwo.length === 0) {
    nameTwoAlert.classList.add('name-error-two')
    document.querySelector('#name-two').value = ''
    gcneTwo.classList.add('gcne-two');
  };
};


function getNameGuess() {
  console.log('Updating values of input fields');
    nameOne = document.querySelector('#name-one').value;
    nameTwo = document.querySelector('#name-two').value;
    guessOne = document.querySelector('#guess-one').value;
    guessTwo = document.querySelector('#guess-two').value; 
};


function randomNum(min, max) {
    min = parseInt(min);
    max = parseInt(max);
    randoNum = Math.floor(Math.random() * (max - min) + min);
    console.log('randoNum: ', randoNum);
}
randomNum(minRange, maxRange);

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

// Function Reults
function checkForWinner(randoNum, guessOne, guessTwo) {
  console.log('Is working', document.querySelector('.result-one').value);
  userGuessOne = parseInt(guessOne);
  userGuessTwo = parseInt(guessTwo);
  if(userGuessOne === randoNum) {
    console.log('line 286: ', startTime)
    getTime(startTime)
    buildCard(nameOne)
    guessCount = 0
    updateRange(minRange, maxRange)
    console.log('Player 1 wins!');
  } 

  if(userGuessTwo === randoNum) {
    getTime(startTime)
    buildCard(nameTwo)
    guessCount = 0
    updateRange(minRange, maxRange)
    console.log('Player 2 wins!');
  }
}

function getTime(timeStart) {
  if (timeStart === undefined){
    timeElapsed = 0
  } else {
  console.log('timeStart: ', timeStart)
  var milliSeconds = Date.now() - timeStart
  var seconds = (Math.floor(milliSeconds/1000))
  var minutes = (seconds/60)
  var minutesWithDec = minutes.toFixed(2)
  timerOn = false
  console.log('minutesWithDec: ', minutesWithDec)
  console.log('timerOn: ', timerOn)
  return timeElapsed = minutesWithDec
  }
}

function updateRange (min, max){
  console.log('line 313: ', max)
  maxRange = parseInt(max);
  minRange = parseInt(min);
  maxRange += 10;
  minRange -=10;
  console.log('line 316: ', minRange, maxRange)
  randomNum(minRange, maxRange)
  console.log('line 318: ', maxRange)
  document.querySelector('.span-one').innerHTML = minRange;
  document.querySelector('.span-two').innerHTML = maxRange;
}

// var xButtonParent = document.querySelector('.results');
// xButtonParent.addEventListener('click', function(event){
//   console.log('I want to take away this box!!')
//   if (event.target.className === 'results-cards-stats-exit-button'){
//     console.log('take away this box!!')
//   }
// })


function buildCard(winner) {
results.insertAdjacentHTML('afterbegin', `
  <section class="results-cards">
    <div class="results-cards-challengers">
      <h4 class="results-cards-challengers challanger-1"> ${nameOne} </h4>
      <p class="results-cards-challengers-vs"> vs </p>
      <h4 class="results-cards-challengers challanger-2"> ${nameTwo} </h4>
    </div>
    <hr class="results-cards-lines">
    <div class="results-cards-winner">
      <p class="results-cards-winner-name">${winner.toUpperCase()}</p>
      <P class="results-cards-winner-winner" >WINNER</P>
    </div class="results-cards-lines">
    <hr class="results-cards-lines">
    <div class="results-cards-stats">
      <p class="results-cards-stats-guesses"><span id="guessNumber">${guessCount.toString()}</span> GUESSES</p>
      <p class="results-cards-stats-minutes"><span id="guessNumber">${timeElapsed}</span> MINUTES</span></p>
      <buttom class="results-cards-stats-exit-button">X</buttom>
    </div>
  </section>`)
};

function removeCard(event) {
  if(event.target.closest('.results-cards-stats-exit-button')) {
    event.target.closest('.results-cards').remove()
  }
}

// Event Listener Results

results.addEventListener('click', removeCard);
// import { html, render } from './lit-html.js';