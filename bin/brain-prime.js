#!/usr/bin/env node
import { runGame } from '../src/index.js'
import { askUserName } from '../src/cli.js'
import { brainPrime } from '../src/games/prime-game.js'

runGame(
  askUserName,
  brainPrime.generateQuestionAndAnswer,
  brainPrime.isCorrectAnswer,
  brainPrime.intro,
  brainPrime.validateAnswer,
)
