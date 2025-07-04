#!/usr/bin/env node
import { runGame } from '../src/index.js'
import { askUserName } from '../src/cli.js'
import { brainGreatestCommonDivisor } from '../src/games/gcd-game.js'

runGame(
  askUserName,
  brainGreatestCommonDivisor.generateQuestionAndAnswer,
  brainGreatestCommonDivisor.isCorrectAnswer,
  brainGreatestCommonDivisor.intro,
)
