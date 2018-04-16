import { tap, always, range, pipe, without, xprod, map, zipObj, take, splitEvery } from 'ramda'
import shuffle from 'shuffle-array'


/*TODO: agregar JSON con 220 cartas*/

export const START_GAME = 'START_GAME'
export const startGame = (initialCard, playersState, turn) => ({
  type: START_GAME,
  initialCard,
  playersState,
  turn
})