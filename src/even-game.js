import readlineSync from 'readline-sync';
import { askUserName } from '../src/cli.js';

const isEven = (num) => num % 2 === 0;
const ROUNDS_TO_WIN = 3;
const MIN_NUMBER = 1;
const MAX_NUMBER = 100;

const brainEven = () => {
  const userName = askUserName();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  let correctAnswers = 0;

  while (correctAnswers < ROUNDS_TO_WIN) {
    const number = Math.floor(Math.random() * (MAX_NUMBER - MIN_NUMBER + 1)) + MIN_NUMBER;
    console.log(`Question: ${number}`);
    const userAnswer = readlineSync.question('Your answer: ')

    if (!['yes', 'no'].includes(userAnswer)) {
      console.log(`'${userAnswer}' is invalid input. Expected 'yes' or 'no'.`);
      return finishGame(false, userName);
    }

    const correctAnswer = isEven(number) ? 'yes' : 'no';
    if (userAnswer !== correctAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      return finishGame(false, userName);
    }

    correctAnswers++;
    console.log('Correct!');
  }

  finishGame(true, userName);
};

const finishGame = (isWinner, userName) => {
  console.log(isWinner 
    ? `Congratulations, ${userName}!`
    : `Let's try again, ${userName}!`);
};
export { brainEven } ;