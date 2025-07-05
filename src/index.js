import readlineSync from 'readline-sync'
import { askUserName } from './cli.js'
import { brainCalc } from './games/calc-game.js'
import { brainEven } from './games/even-game.js'
import { brainGreatestCommonDivisor } from './games/gcd-game.js'
import { brainPrime } from './games/prime-game.js'
import { brainProgression } from './games/progression-game.js'

export const ROUNDS_TO_WIN = 3

export const finishGame = (isWinner, userName) => {
  console.log(isWinner ? `Congratulations, ${userName}!` : `Let's try again, ${userName}!`)
}

export const runGame = (game) => {
  const userName = askUserName()
  console.log(game.intro)

  let correctAnswers = 0

  while (correctAnswers < ROUNDS_TO_WIN) {
    const { question, answer } = game.generateQuestionAndAnswer()
    console.log(`Question: ${question}`)
    const userAnswer = readlineSync.question('Your answer: ')

    if (game.isCorrectAnswer(userAnswer, answer)) {
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

export {
  brainCalc,
  brainEven,
  brainGreatestCommonDivisor,
  brainPrime,
  brainProgression,
}
