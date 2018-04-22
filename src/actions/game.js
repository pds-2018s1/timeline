/*TODO: agregar JSON con 220 cartas*/

export const START_GAME = 'START_GAME'
export const CARD_SELECTED = 'CARD_SELECTED'

export const startGame = (playerName) => ({
  type: START_GAME,
  player : {name:playerName, playerHand:[
    {fact : {name:"something", year:"a year"}},
    {fact : {name:"something else", year:"another year"}}
  ]},
})

export const selectedCard = (card) => ({
  type: CARD_SELECTED,
  selectedCard: card
})