// import { pipe, mergeDeepLeft, adjust, range, mapObjIndexed, prop, equals } from 'ramda'
import { START_GAME } from '../actions/gameLobby'


const initialState = {
    turn : 0,
    player : null,
    timeline: [{fact: "a fact", year: "a year"}],
    gameStarted: false,
    deck: {quantity: 50} 
  }

/**Los turnos serán por nro de jugador.. desde 0 hasta...... (en principio arranca el 0) */
export const game = (state = initialState, action) => {
    console.log("dispatching" + action.type)
    switch (action.type) {
      case START_GAME: 
        console.log("starting............")
        return {
          ...state,
          player : action.player,
          gameStarted: true
        }
      default: return state
    }
}

