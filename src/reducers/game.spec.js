import {game} from './game'
import {localAddCard as addCard, login, startGame} from '../actions/game'

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
        cardsList: [{name: 'independencia de  ... ', year: '1987'  }],
        cards: []
    })
  })

  it ('logs in a player', () => {
      const action = login("Juan")
      expect(game(undefined, action)).toEqual({
        turn: "",
        player: {
         name: "Juan"
        },
        loggedIn: true,
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
        cards: [],
        cardsList: []
      })
  })

  /*it ('starts a game', async () => {
      const state = {
        turn: "",
        player: {
         name: "Juan"
        },
        loggedIn: true,
        opponents: [],
        timeline: [],
        gameStarted: false,
        discard: {quantity: 0},
        selectedCard: null,
        winner: null,
        administrate: false,
        matchName: null, 
        matchSize: null,
        matches: [],
        cards: []
      }
      const action = startGame("partida 1", 3)
      expect(game(state, action)).toEqual({
        
            turn: "",
            player: {
             name: "Juan",
             playerHand: expect.any(Array)
            },
            loggedIn: true,
            opponents: [],
            timeline: expect.any(Array),
            gameStarted: true,
            discard: {quantity: 0},
            selectedCard: null,
            winner: null,
            administrate: false,
            matchName: "partida 1", 
            matchSize: 3,
            matches: [],
            cards: expect.any(Array)
           
      })
  })*/
})

