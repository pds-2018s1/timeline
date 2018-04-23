// import { pipe, mergeDeepLeft, adjust, range, mapObjIndexed, prop, equals } from 'ramda'
import { START_GAME, CARD_SELECTED, CARD_PLACED_IN_TIMELINE, CARD_REJECTED_FROM_TIMELINE } from '../actions/game'

const initialState = {
    turn: "pepito",
    player: {
      playerHand: null
    },
    timeline: [
      {fact: { name: "a fact3", year: "1500"}},
      {fact: { name: "a fact4", year: "2500"}},
    ],
    gameStarted: false,
    deck: {quantity: 50},
    discard: {quantity: 0},
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

        //Inserts the new card in the timeline using a card as a reference of the index where the new card should be
        const index = action.cardWithRequiredIndex? state.timeline.indexOf(action.cardWithRequiredIndex) : state.timeline.length -1
        const newTimeline = state.timeline.slice()
        newTimeline.splice(index, 0, state.selectedCard)

        return {
          ...state,
          player: {
            ...state.player,
            playerHand: state.player.playerHand.filter( card => card.fact.name !== state.selectedCard.fact.name),
          }, 
          timeline: newTimeline,
          selectedCard: null
        }
      case CARD_REJECTED_FROM_TIMELINE:
        return {
          ...state,
          selectedCard: null,
          player: {
            ...state.player,
            playerHand: state.player.playerHand.filter( card => card.fact.name !== state.selectedCard.fact.name),
          }, 
          discard: {quantity: state.discard.quantity + 1}
        }
      default: return state
    } 
}

