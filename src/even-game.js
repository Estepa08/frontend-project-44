import readlineSync from 'readline-sync'
import { askUserName } from '../src/cli.js'

const ROUNDS_TO_WIN = 3
const MIN_NUMBER = 1
const MAX_NUMBER = 100

const isEven = num => num % 2 === 0

const generateQuestionAndAnswer = () => {
  const number = Math.floor(Math.random() * (MAX_NUMBER - MIN_NUMBER + 1)) + MIN_NUMBER
  const correctAnswer = isEven(number) ? 'yes' : 'no'
  return {
    question: String(number),
    answer: correctAnswer,
  }
}

const finishGame = (isWinner, userName) => {
  console.log(isWinner
    ? `Congratulations, ${userName}!`
    : `Let's try again, ${userName}!`)
}

const brainEven = () => {
  const userName = askUserName()
  console.log('Answer "yes" if the number is even, otherwise answer "no".')

  let correctAnswers = 0

  while (correctAnswers < ROUNDS_TO_WIN) {
    const { question, answer } = generateQuestionAndAnswer()
    console.log(`Question: ${question}`)
    const userAnswer = readlineSync.question('Your answer: ')

    if (!['yes', 'no'].includes(userAnswer)) {
      console.log(`'${userAnswer}' is invalid input. Expected 'yes' or 'no'.`)
      return finishGame(false, userName)
    }

    if (userAnswer === answer) {
      console.log('Correct!')
      correctAnswers++
    }
    else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'.`)
      return finishGame(false, userName)
    }
  }

  finishGame(true, userName)
}

export { brainEven }
