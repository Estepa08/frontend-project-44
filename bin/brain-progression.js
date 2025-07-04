#!/usr/bin/env node
import { runGame } from '../src/index.js'
import { askUserName } from '../src/cli.js'
import { brainProgression } from '../src/games/progression-game.js'

runGame(
  askUserName,
  brainProgression.generateQuestionAndAnswer,
  brainProgression.isCorrectAnswer,
  brainProgression.intro,
  brainProgression.validateAnswer,
)
