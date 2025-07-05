const MIN_NUMBER = 1
const MAX_NUMBER = 100

const isPrime = (num) => {
  if (num < 2) return false
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false
  }
  return true
}

export const brainPrime = {
  intro: 'Answer "yes" if given number is prime. Otherwise answer "no".',

  generateQuestionAndAnswer: () => {
    const number = Math.floor(Math.random() * (MAX_NUMBER - MIN_NUMBER + 1)) + MIN_NUMBER
    const correctAnswer = isPrime(number) ? 'yes' : 'no'
    return {
      question: number.toString(),
      answer: correctAnswer,
    }
  },

  validateAnswer: userAnswer => ['yes', 'no'].includes(userAnswer),

  isCorrectAnswer: (userAnswer, correctAnswer) => userAnswer === correctAnswer,
}
