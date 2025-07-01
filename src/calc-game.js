import readlineSync from 'readline-sync'
import { askUserName } from '../src/cli.js'

const ROUNDS_TO_WIN = 3
const MIN_NUMBER = 1
const MAX_NUMBER = 100

const getRandomOperator = () => {
  const operators = ['+', '-', '*']
  return operators[Math.floor(Math.random() * operators.length)]
}

const calculate = (num1, num2, operator) => {
  switch (operator) {
    case '+': return num1 + num2
    case '-': return num1 - num2
    case '*': return num1 * num2
    default: throw new Error(`Unknown operator: ${operator}`)
  }
}

const generateQuestionAndAnswer = () => {
  const num1 = Math.floor(Math.random() * MAX_NUMBER) + MIN_NUMBER
  const num2 = Math.floor(Math.random() * MAX_NUMBER) + MIN_NUMBER
  const operator = getRandomOperator()
  const correctAnswer = calculate(num1, num2, operator)
  return {
    question: `${num1} ${operator} ${num2}`,
    answer: String(correctAnswer),
  }
}

const finishGame = (isWinner, userName) => {
  console.log(isWinner
    ? `Congratulations, ${userName}!`
    : `Let's try again, ${userName}!`)
}

const brainCalc = () => {
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

export { brainCalc }
