import { getRandomNumber } from '../utils.js'

const MIN_NUMBER = 1
const MAX_NUMBER = 100
const NUMBERS_COUNT = 2

const operations = {
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
  '*': (a, b) => a * b,
}

const getRandomItem = (array) => {
  const randomIndex = Math.floor(Math.random() * array.length)
  return array[randomIndex]
}

const generateNumbers = (count) => {
  const numbers = []
  for (let i = 0; i < count; i++) {
    const num = getRandomNumber(MIN_NUMBER, MAX_NUMBER)
    numbers.push(num)
  }
  return numbers
}

export const brainCalc = {
  intro: 'What is the result of the expression?',

  generateQuestionAndAnswer: () => {
    const operators = Object.keys(operations)
    const operator = getRandomItem(operators)
    const numbers = generateNumbers(NUMBERS_COUNT)
    const correctAnswer = operations[operator](numbers[0], numbers[1])
    return {
      question: numbers.join(` ${operator} `),
      answer: String(correctAnswer),
    }
  },

  isCorrectAnswer: (userAnswer, correctAnswer) => userAnswer === correctAnswer,
}
