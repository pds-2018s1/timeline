import { tap, always, range, pipe, without, xprod, map, zipObj, take, splitEvery } from 'ramda'
import shuffle from 'shuffle-array'




/*TODO: agregar JSON con 220 cartas*/

const playerHand = [ 
  { fact:{name: "Revolución Rusa", year: 1400} },
  { fact:{name: "Revolución Francesa", year: 1400} },
  { fact:{name: "Descubrimiento de America", year: 1400} },
  { fact:{name: "Invencion de la radio", year: 1400} },
  { fact:{name: "Invencion del automovil", year: 1400} },
  { fact:{name: "Invencion del automovil", year: 1400} }
]

const card =  {fact:{name: "Invencion del automovil", year: 1400}}

const time = {playedCards: [card]}

const player1 = {name:"Juan", playerHand:playerHand}
const player2 = {name:"Juan1", playerHand:playerHand}
const player3 = {name:"Juan2", playerHand:playerHand}
const player4 = {name:"Juan3", playerHand:playerHand}
const player5 = {name:"Juan4", playerHand:playerHand}
const player6 = {name:"Juan5", playerHand:playerHand}

const opps = [player1, player2, player3, player4, player5, player6]


/**players tiene el jugador (identificado con un nro) y sus cartas */
export const START_GAME = 'START_GAME'
export const startGame = (initialCard, players, turn) => ({
  type: START_GAME,
  initialCard,
  players,
  turn
})


export const startNewGame = () => startGame( {fact:{name: "Revolución Rusa", year: 1400}}, opps, 0 )