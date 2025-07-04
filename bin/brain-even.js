#!/usr/bin/env node
import { runGame } from '../src/index.js'
import { askUserName } from '../src/cli.js'
import { brainEven } from '../src/games/even-game.js'

runGame(
  askUserName,
  brainEven.generateQuestionAndAnswer,
  brainEven.isCorrectAnswer,
  brainEven.intro,
  brainEven.validateAnswer,
)
