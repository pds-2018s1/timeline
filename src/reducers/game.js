import { pipe, mergeDeepLeft, adjust, range, mapObjIndexed, prop, equals } from 'ramda'
import { START_GAME } from '../actions/game'


const initialState = {
    turn : 0
  }

/**Los turno serán por nro de jugador.. desde 0 hasta...... (en principio arranca el 0) */
export const game = (state = initialState, action) => {
    switch (action.type) {
      case START_GAME: return {
        turn : action.turn,
        players : action.players,
        timeline: action.initialCard
      }
      default: return state
    }
}

