// Range
var minRange = document.querySelector('#min-input').value;
var maxRange = document.querySelector('#max-input').value;

var updateBtn = document.querySelector('.guesser-range-button')
var minRangeUpdate = document.querySelector('.span-one');


updateBtn.addEventListener('click', function() {
  updateMinMax();
  document.querySelector('.span-one').innerHTML = minRange
  document.querySelector('.span-two').innerHTML = maxRange
})

function updateMinMax() {
  minRange = document.querySelector('#min-input').value;
  maxRange = document.querySelector('#max-input').value;
}