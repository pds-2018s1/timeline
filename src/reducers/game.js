import { LOAD_MATCHES, ADD_CARD, DELETE_CARD, LOAD_CARDS, ADMINISTRATE, START_GAME, CARD_SELECTED, CARD_PLACED_IN_TIMELINE, LOGIN } from '../actions/game'

const initialState = {
    turn: "",
    player: {
      playerHand: null
    },
    loggedIn: false,
    opponents: [],
    timeline: [],
    gameStarted: false,
    cards: [],
    discard: {quantity: 0},
    selectedCard: null,
    winner: null,
    administrate: false,
    matchName: null, //TODO agrupar datos del juego en unico objeto
    matchSize: null,
    matches: [],
    cardsList: []
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
      case DELETE_CARD: return {
          ...state,
          cards: state.cards.filter(i => i._id !== action.id)
        }
      case LOAD_CARDS: return {
          ...state,
          cardsList: action.cards
      }
      case ADD_CARD: return {
        ...state,
        cardsList: state.cardsList.concat(action.card)
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
          cards: action.cards,
          opponents: action.opponents,
          timeline: action.timeline,
          matchName: action.matchName,
          matchSize: action.matchSize
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
          cards: action.cards,
          discard: action.discard,
          player: {
            ...state.player,
            playerHand: action.playerHand
          },
          selectedCard: null,
          winner: action.winner
        }
      case LOAD_MATCHES:
        return {
          ...state,
          matches: action.matches
        }
      default: return state
    } 
}

