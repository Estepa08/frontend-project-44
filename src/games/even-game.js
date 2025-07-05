const MIN_NUMBER = 1
const MAX_NUMBER = 100

const isEven = num => num % 2 === 0

export const brainEven = {
  intro: 'Answer "yes" if the number is even, otherwise answer "no".',

  generateQuestionAndAnswer: () => {
    const number = Math.floor(Math.random() * (MAX_NUMBER - MIN_NUMBER + 1)) + MIN_NUMBER
    const answer = isEven(number) ? 'yes' : 'no'
    return {
      question: number.toString(),
      answer,
    }
  },

  validateAnswer: userAnswer => userAnswer === 'yes' || userAnswer === 'no',

  isCorrectAnswer: (userAnswer, correctAnswer) => userAnswer === correctAnswer,
}
