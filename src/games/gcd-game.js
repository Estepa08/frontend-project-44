const MIN_NUMBER = 1
const MAX_NUMBER = 100

const generatePairNumbers = () => {
  const result = []
  for (let i = 0; i < 2; i++) {
    result.push(Math.floor(Math.random() * (MAX_NUMBER - MIN_NUMBER + 1)) + MIN_NUMBER)
  }
  return result
}

export const getGreatestCommonDivisor = (a, b) => {
  while (b !== 0) {
    const temp = b
    b = a % b
    a = temp
  }
  return a
}

export const brainGreatestCommonDivisor = {
  intro: 'Find the greatest common divisor of given numbers.',
  generateQuestionAndAnswer: () => {
    const numbers = generatePairNumbers()
    const correctAnswer = getGreatestCommonDivisor(numbers[0], numbers[1])
    return {
      question: `${numbers[0]} ${numbers[1]}`,
      answer: String(correctAnswer),
    }
  },
  isCorrectAnswer: (userAnswer, correctAnswer) => userAnswer === correctAnswer,
}
