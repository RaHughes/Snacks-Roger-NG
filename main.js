

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
var guessTwoInput = document.getElementById('#guess-two');
var submitBtn = document.querySelector('.guesser-challenger-buttons-guess');
var resetBtn = document.querySelector('.guesser-challenger-buttons-reset')
var clearBtn = document.querySelector('.guesser-challenger-buttons-clear');
var guessInputs = document.querySelectorAll('guess-one','guess-two')
// Variable Results Lastest Score

// Function Guesser Range
updateBtn.addEventListener('click', function() {
  updateMinMax();
  randomNum(minRange, maxRange);
  document.querySelector('.span-one').innerHTML = minRange
  document.querySelector('.span-two').innerHTML = maxRange
})

clearBtn.addEventListener('click', function(){
  document.querySelector('#guess-one').value = ''
  document.querySelector('#guess-two').value = ''
  clearBtn.disabled = true;
  clearBtn.style.backgroundColor='#d0d2d3';
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
  console.log('Reset button is working?')
  resetBtn.disabled = true;
  resetBtn.style.backgroundColor='#d0d2d3';
});

// Button disable functionality
clearBtn.disabled = true;
document.getElementById('guess-one').addEventListener('keypress', function () {
    clearBtn.style.backgroundColor='#6e6e6e';
    clearBtn.disabled = false;
});
document.getElementById('guess-two').addEventListener('keypress', function () {
    clearBtn.style.backgroundColor='#6e6e6e';
    clearBtn.disabled = false;
});
// I tried to create a for loop for this: ------------
// for (var i=0; i<guessInputs.length; i++){
//   console.log(guessInputs[i])
//   document.getElementById(guessInputs[i]).addEventListener('keypress', function () {
//     clearBtn.style.backgroundColor='#6e6e6e';
//     clearBtn.disabled = false;
//     });
// }
resetBtn.disabled = true;
document.getElementById('name-one').addEventListener('keypress', function () {
    resetBtn.style.backgroundColor='#6e6e6e';
    resetBtn.disabled = false;
});
document.getElementById('name-two').addEventListener('keypress', function () {
    resetBtn.style.backgroundColor='#6e6e6e';
    resetBtn.disabled = false;
});
document.getElementById('min-input').addEventListener('keypress', function () {
    resetBtn.style.backgroundColor='#6e6e6e';
    resetBtn.disabled = false;
});
document.getElementById('max-input').addEventListener('keypress', function () {
    resetBtn.style.backgroundColor='#6e6e6e';
    resetBtn.disabled = false;
});


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
    min = parseInt(min);
    max = parseInt(max);
    randoNum = Math.floor(Math.random() * (max - min) + min);
    console.log(randoNum)
    if(randoNum === 0) {
      randoNum = randoNum + 1;
    } 
    console.log('randoNum: ', randoNum);
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