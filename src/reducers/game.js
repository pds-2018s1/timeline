// import { pipe, mergeDeepLeft, adjust, range, mapObjIndexed, prop, equals } from 'ramda'
import { START_GAME, CARD_SELECTED, CARD_PLACED_IN_TIMELINE } from '../actions/game'

const initialState = {
    turn: "pepito",
    player: {
      playerHand: null
    },
    timeline: [
      {fact: { name: "a fact3", year: "a year"}},
      {fact: { name: "a fact4", year: "a year"}},
    ],
    gameStarted: false,
    deck: {quantity: 50},
    selectedCard: null
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
        return {
          ...state,
          player: {
            ...state.player,
            playerHand: state.player.playerHand.filter( card => card.fact.name !== state.selectedCard.fact.name),
          }, 
          timeline: state.timeline.concat(state.selectedCard),
          selectedCard: null
        }
      default: return state
    }
}

