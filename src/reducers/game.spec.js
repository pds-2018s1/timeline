import {game} from './game'
import {localAddCard as addCard} from '../actions/game'

describe('game reducer', () => {


  it('saves a card', () => {
    const action = addCard({  name: 'independencia de  ... ', year: '1987' })
    expect(game(undefined, action)).toEqual({
        turn: "",
        player: {
        playerHand: null
        },
        loggedIn: false,
        opponents: [],
        timeline: [],
        gameStarted: false,
        discard: {quantity: 0},
        selectedCard: null,
        winner: null,
        administrate: false,
        matchName: null, //TODO agrupar datos del juego en unico objeto
        matchSize: null,
        matches: [],
        cards: [{name: 'independencia de  ... ', year: '1987'  }]
    })
  })
})

