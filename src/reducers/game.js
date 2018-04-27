// import { pipe, mergeDeepLeft, adjust, range, mapObjIndexed, prop, equals } from 'ramda'
import { START_GAME, CARD_SELECTED, CARD_PLACED_IN_TIMELINE } from '../actions/game'

import { cards } from '../model/constants'

const initialState = {
    turn: "",
    player: {
      playerHand: null
    },
    opponents: [],
    timeline: [],
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
          gameStarted: true,
          deck: action.deck,
          timeline: action.timeline
        }
      case CARD_SELECTED:
        return {
          ...state,
          selectedCard: action.selectedCard
        }
      case CARD_PLACED_IN_TIMELINE:
        return { 
          ...state,
          timeline: action.timeline,
          deck: action.deck,
          discard: action.discard,
          player: {
            ...state.player,
            playerHand: action.playerHand
          },
          selectedCard: null
        } 
      default: return state
    } 
}

