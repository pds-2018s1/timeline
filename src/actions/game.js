import { insert } from 'ramda'
import { shuffle } from '../model/util'
export const START_GAME = 'START_GAME'
export const CARD_SELECTED = 'CARD_SELECTED'
export const CARD_PLACED_IN_TIMELINE = 'CARD_PLACED_IN_TIMELINE'
export const LOGIN = 'LOGIN'

export const login = (playerName) => ({
  type: LOGIN,
  player: {
    name: playerName
  }
})

export const startGame = () => (dispatch, getState) => {
  const {deck, player} = getState()
  //TODO mezclar el mazo
  const mixedDeck = shuffle(deck)
  dispatch(({
      type: START_GAME,
      player : {
        ...player, 
        playerHand:mixedDeck.slice(0,5)
      },
      deck: mixedDeck.slice(7,deck.length),
      timeline: mixedDeck.slice(5,6)    
    }))
}

export const cardSelected = (card) => ({
  type: CARD_SELECTED,
  selectedCard: card
})

export const cardPlacedInTimeline = (previousCard) => (dispatch,getState) => {
  const { selectedCard, timeline, deck, discard, player } = getState()
  if(!selectedCard) return;

  let newTimeline = timeline.slice() 
  let newDeck = deck
  let newDiscard = discard
  let newPlayerHand = player.playerHand.slice()
  let winner = null

  const year = selectedCard.fact.year
  const prevYear = previousCard ? parseInt(previousCard.fact.year) : Number.NEGATIVE_INFINITY
  const prevCardIndex = previousCard ? timeline.indexOf(previousCard) : -1
  const nextCard = prevCardIndex < timeline.length - 1 ? timeline[prevCardIndex + 1] : null
  const nextYear = nextCard ? parseInt(timeline[prevCardIndex + 1].fact.year) : Number.POSITIVE_INFINITY

  newPlayerHand = newPlayerHand.filter( c => c.fact.name !== selectedCard.fact.name)
  if (prevYear < year && nextYear > year) {
    newTimeline = insert(prevCardIndex + 1, selectedCard, newTimeline)
    if (newPlayerHand.length <1){
      winner = player
    }
  }else {
    newPlayerHand.push(deck[0])
    newDeck = newDeck.slice(1,newDeck.length)
    newDiscard = {quantity: newDiscard.quantity + 1}
  }

  dispatch(({
    type: CARD_PLACED_IN_TIMELINE,
    timeline: newTimeline,  
    deck: newDeck,
    discard: newDiscard,
    playerHand: newPlayerHand,
    winner: winner
  }))
}
