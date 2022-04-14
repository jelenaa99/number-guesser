const submitBtn = document.querySelector('.btn-check');
const guessInput = document.querySelector('.guess-input');
const messageParagraph = document.querySelector('.message');
const numberParagraph = document.querySelector('.number');
const restartBtn = document.querySelector('.btn-again');
const scoreLabel = document.querySelector('.score');
const highscoreLabel = document.querySelector('.highscore');

let randomNumber = Math.floor(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;


const gameSettings = () => {
    let inputNumber = Number(guessInput.value);
    numberParagraph.textContent = inputNumber;
    if(!inputNumber) {
        messageParagraph.textContent = 'enter a number';
    } else if (inputNumber === randomNumber) {
        messageParagraph.textContent = 'you guessed it!';
        submitBtn.disabled = true;
        highscore += score;
        highscoreLabel.textContent = highscore;
    } else if (inputNumber > randomNumber) {
        score--;
        scoreLabel.textContent = score;
        messageParagraph.textContent = 'the guess is too high!'
    } else if (inputNumber < randomNumber) {
        score--;
        scoreLabel.textContent = score;
        messageParagraph.textContent = 'the guess is too low!';
    } 

    if (!score) {
        messageParagraph.textContent = 'GAME OVER!';
        submitBtn.disabled = true;
        numberParagraph.textContent = randomNumber;
        numberParagraph.style.border = '4px solid red';
    }
}

submitBtn.addEventListener('click', gameSettings);

const gameOver = () => {
    score = 20;
    scoreLabel.textContent = 20;
    guessInput.value = '';
    numberParagraph.textContent = '';
    submitBtn.disabled = false;
    messageParagraph.textContent = 'start guessing...';
    numberParagraph.style.border = '1px solid #000';
    numberParagraph.textContent = '?';
    randomNumber = Math.floor(Math.random() * 20) + 1;
}

restartBtn.addEventListener('click', gameOver);

console.log(randomNumber);


