#!/usr/bin/env node
import { runGame } from '../src/index.js'
import { askUserName } from '../src/cli.js'
import { brainCalc } from '../src/games/calc-game.js'

runGame(
  askUserName,
  brainCalc.generateQuestionAndAnswer,
  null,
  brainCalc.intro,
  brainCalc.isCorrectAnswer,
)
