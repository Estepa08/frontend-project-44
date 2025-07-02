import readlineSync from 'readline-sync'

export const ROUNDS_TO_WIN = 3

export const finishGame = (isWinner, userName) => {
  console.log(isWinner
    ? `Congratulations, ${userName}!`
    : `Let's try again, ${userName}!`)
}

export const runGame = (
  askUserName,
  generateQuestionAndAnswer,
  isCorrectAnswer,
  introMessage,
  validateAnswer = null,
) => {
  const userName = askUserName()
  console.log(introMessage)

  let correctAnswers = 0

  while (correctAnswers < ROUNDS_TO_WIN) {
    const { question, answer } = generateQuestionAndAnswer()
    console.log(`Question: ${question}`)
    const userAnswer = readlineSync.question('Your answer: ')

    if (validateAnswer && !validateAnswer(userAnswer)) {
      console.log(`'${userAnswer}' is invalid input.`)
      finishGame(false, userName)
      return
    }

    if (isCorrectAnswer(userAnswer, answer)) {
      console.log('Correct!')
      correctAnswers++
    }
    else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'.`)
      finishGame(false, userName)
      return
    }
  }

  finishGame(true, userName)
}
