import { tap, always, range, pipe, without, xprod, map, zipObj, take, splitEvery } from 'ramda'
import shuffle from 'shuffle-array'


/*TODO: agregar JSON con 220 cartas*/


/**players tiene el jugador (identificado con un nro) y sus cartas */
export const START_GAME = 'START_GAME'
export const startGame = (initialCard, players, turn) => ({
  type: START_GAME,
  initialCard,
  players,
  turn
})