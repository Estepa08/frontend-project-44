import readlineSync from 'readline-sync'
import { askUserName } from '../src/cli.js'

const ROUNDS_TO_WIN = 3
const MIN_NUMBER = 1
const MAX_NUMBER = 100
const NUMBERS_COUNT = 2

const operations = {
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
  '*': (a, b) => a * b,
}

const getRandomOperator = () => {
  const ops = Object.keys(operations)
  const index = Math.floor(Math.random() * ops.length)
  return ops[index]
}

const generateNumbers = count => (
  Array.from({ length: count }, () =>
    Math.floor(Math.random() * (MAX_NUMBER - MIN_NUMBER + 1)) + MIN_NUMBER)
)

const generateQuestionAndAnswer = () => {
  const operator = getRandomOperator()
  const numbers = generateNumbers(NUMBERS_COUNT)
  const correctAnswer = numbers.reduce(operations[operator])
  return {
    question: numbers.join(` ${operator} `),
    answer: String(correctAnswer),
  }
}

const finishGame = (isWinner, userName) => {
  console.log(isWinner
    ? `Congratulations, ${userName}!`
    : `Let's try again, ${userName}!`)
}

export const brainCalc = () => {
  const userName = askUserName()
  console.log('What is the result of the expression?')

  let correctAnswers = 0

  while (correctAnswers < ROUNDS_TO_WIN) {
    const { question, answer } = generateQuestionAndAnswer()
    console.log(`Question: ${question}`)
    const userInput = readlineSync.question('Your answer: ')

    if (userInput === answer) {
      console.log('Correct!')
      correctAnswers++
    }
    else {
      console.log(`'${userInput}' is wrong answer ;(. Correct answer was '${answer}'.`)
      return finishGame(false, userName)
    }
  }

  finishGame(true, userName)
}
