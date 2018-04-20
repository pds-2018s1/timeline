// import { pipe, mergeDeepLeft, adjust, range, mapObjIndexed, prop, equals } from 'ramda'
import { START_GAME } from '../actions/gameLobby'


const initialState = {
    turn: "pepito",
    player: null,
    timeline: [
      {fact: { name: "a factt", year: "a year"}},
      {fact: { name: "a fact2", year: "a year"}},
      {fact: { name: "a fact3", year: "a year"}},
      {fact: { name: "a fact4", year: "a year"}},
    ],
    gameStarted: false,
    deck: {quantity: 50} 
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
      default: return state
    }
}

