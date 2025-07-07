import { getRandomNumber } from '../utils.js'

const MIN_START = 1
const MAX_START = 50
const MIN_STEP = 1
const MAX_STEP = 10
const MIN_LENGTH = 5
const MAX_LENGTH = 10

const generateProgression = (start, step, length) => {
  const progression = []
  for (let i = 0; i < length; i++) {
    progression.push(start + i * step)
  }
  return progression
}

export const brainProgression = {
  intro: 'What number is missing in the progression?',

  generateQuestionAndAnswer: () => {
    const start = getRandomNumber(MIN_START, MAX_START)
    const step = getRandomNumber(MIN_STEP, MAX_STEP)
    const length = getRandomNumber(MIN_LENGTH, MAX_LENGTH)

    const progression = generateProgression(start, step, length)
    const hiddenIndex = Math.floor(Math.random() * progression.length)
    const correctAnswer = progression[hiddenIndex]

    const question = progression
      .map((num, index) => (index === hiddenIndex ? '..' : num))
      .join(' ')

    return {
      question,
      answer: String(correctAnswer),
    }
  },
  isCorrectAnswer: (userAnswer, correctAnswer) => userAnswer === correctAnswer,
}
