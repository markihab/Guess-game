'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const reduceScore = function () {
  score--;
  document.querySelector('.score').textContent = score;
};

const doChangesToBody = function (bodyColor, textContext, width, secretNumber) {
  document.querySelector('body').style.backgroundColor = bodyColor;
  document.querySelector('.message').textContent = textContext;
  document.querySelector('.number').style.width = width;
  document.querySelector('.number').textContent = secretNumber;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  //when there is no input
  if (!guess) {
    document.querySelector('.message').textContent =
      'No Number was selected 🤦‍♀️';
    // when guess is coreect
  } else if (guess === secretNumber) {
    doChangesToBody('green', 'Correct Guess ❤', '30rem', secretNumber);
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
    // when guess is high
  } else if (guess !== secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        guess > secretNumber ? 'Too high 😁' : 'Too low 😁';
      reduceScore();
    } else {
      document.querySelector('.message').textContent = 'You lost the game';
      document.querySelector('.score').textContent = '0';
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  doChangesToBody('black', 'Start guessing...', '15rem', '?');
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
});
