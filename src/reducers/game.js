// import { pipe, mergeDeepLeft, adjust, range, mapObjIndexed, prop, equals } from 'ramda'
import { START_GAME, CARD_SELECTED, CARD_PLACED_IN_TIMELINE, CARD_REJECTED_FROM_TIMELINE } from '../actions/game'

import { cards } from '../model/constants'

const initialState = {
    turn: "",
    player: {
      playerHand: null
    },
    timeline: [
      {fact: { name: "a fact3", year: "1500"}},
      {fact: { name: "a fact4", year: "2500"}},
    ],
    gameStarted: false,
    deck: cards,
    discard: {quantity: 0},
    selectedCard: null,
    winner: null
  }

/**Los turnos serán por nro de jugador.. desde 0 hasta...... (en principio arranca el 0) */
export const game = (state = initialState, action) => {
    switch (action.type) {
      case START_GAME: 
        return {
          ...state,
          player: action.player,
          turn: action.player.name,
          gameStarted: true
        }
      case CARD_SELECTED:
        return {
          ...state,
          selectedCard: action.selectedCard
        }
      case CARD_PLACED_IN_TIMELINE:

        //Inserts the new card in the timeline using a card as a reference of the index where the new card should be
        const index = action.cardWithRequiredIndex? state.timeline.indexOf(action.cardWithRequiredIndex) : state.timeline.length
        const newTimeline = state.timeline.slice()
        newTimeline.splice(index, 0, state.selectedCard)

        //If this is the last card, the player is the winner
        const hasWon = state.player.playerHand.length === 1

        return {
          ...state,
          player: {
            ...state.player,
            playerHand: state.player.playerHand.filter( card => card.fact.name !== state.selectedCard.fact.name),
          }, 
          timeline: newTimeline,
          selectedCard: null,
          winner: hasWon? state.player.name : null
        }
      case CARD_REJECTED_FROM_TIMELINE:

        const plHand = state.player.playerHand.filter( card => card.fact.name !== state.selectedCard.fact.name)
        plHand.push(state.deck[0]) //Se le da la primera carta del mazo al jugador
        return {
          ...state,
          selectedCard: null,
          player: {
            ...state.player,
            playerHand: plHand
          }, 
          discard: {quantity: state.discard.quantity + 1},
          deck: state.deck.slice(1,state.deck.length)
        }
      default: return state
    } 
}

