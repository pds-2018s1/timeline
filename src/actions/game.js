/*TODO: agregar JSON con 220 cartas*/

export const START_GAME = 'START_GAME'
export const CARD_SELECTED = 'CARD_SELECTED'
export const CARD_PLACED_IN_TIMELINE = 'CARD_PLACED_IN_TIMELINE'

export const startGame = (playerName) => ({
  type: START_GAME,
  player : {name:playerName, playerHand:[
    {fact : {name:"something", year:"a year"}},
    {fact : {name:"other fact", year:"another year"}}
  ]},
})

export const selectedCard = (card) => ({
  type: CARD_SELECTED,
  selectedCard: card
})

export const cardPlacedInTimeline = () => ({
  type: CARD_PLACED_IN_TIMELINE
})