import { DELETE_CARD, ERROR_LOADING_CARDS, LOAD_CARDS, ADMINISTRATE, START_GAME, CARD_SELECTED, CARD_PLACED_IN_TIMELINE, LOGIN } from '../actions/game'
import { cards } from '../model/constants'

const initialState = {
    turn: "",
    player: {
      playerHand: null
    },
    loggedIn: false,
    opponents: [],
    timeline: [],
    gameStarted: false,
    deck: cards,
    discard: {quantity: 0},
    selectedCard: null,
    winner: null,
    administrate: false,
    cards: []
  }

/**Los turnos serán por nro de jugador.. desde 0 hasta...... (en principio arranca el 0) */
export const game = (state = initialState, action) => {
    switch (action.type) {
      case LOGIN: 
        return {
          ...state,
          player: action.player,
          loggedIn: true
        }
      case LOAD_CARDS: return {
          ...state,
          cards: action.cards
        }
      case DELETE_CARD: return {
          ...state,
          cards: state.cards.filter(i => i._id !== action.id)
        }  
      case ADMINISTRATE: 
        return {
          ...state,
          administrate: true
        }  
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
          selectedCard: null,
          winner: action.winner
        } 
      default: return state
    } 
}

