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

const generateNumbers = (count) => {
  const result = []
  for (let i = 0; i < count; i++) {
    result.push(Math.floor(Math.random() * (MAX_NUMBER - MIN_NUMBER + 1)) + MIN_NUMBER)
  }
  return result
}

export const brainCalc = {
  intro: 'What is the result of the expression?',

  generateQuestionAndAnswer: () => {
    const operator = getRandomOperator()
    const numbers = generateNumbers(NUMBERS_COUNT)
    const correctAnswer = operations[operator](numbers[0], numbers[1])
    return {
      question: numbers.join(` ${operator} `),
      answer: String(correctAnswer),
    }
  },

  isCorrectAnswer: (userAnswer, correctAnswer) => userAnswer === correctAnswer,
}
