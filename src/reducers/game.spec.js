import {game} from './game'
import {localAddCard as addCard, login, startGame, cardSelected, localDeleteCard as deleteCard} from '../actions/game'

describe('game reducer', () => {


  it('saves a card', () => {
    const action = addCard({  name: 'independencia de  ... ', year: '1987' })
    expect(game(undefined, action)).toEqual({
        turn: "",
        waitingForMatch: false,
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

  it ('logs in a player', () => {
      const action = login("Juan")
      expect(game(undefined, action)).toEqual({
        turn: "",
        waitingForMatch: false,
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
        cards: []
      })
  })

  it('selects a card', () => {
    const action = cardSelected({name: "Conquista de Pueyrredón", year: "1966"})
    expect(game(undefined, action)).toEqual({
        turn: "",
        waitingForMatch: false,
        player: {
          playerHand: null
        },
        loggedIn: false,
        opponents: [],
        timeline: [],
        gameStarted: false,
        discard: {quantity: 0},
        selectedCard: {name: "Conquista de Pueyrredón", year: "1966"},
        winner: null,
        administrate: false,
        matchName: null, 
        matchSize: null,
        matches: [],
        cards: []
    })
  })

  it('deletes a card', () => {
    const _cards= [{_id: 1, name:"h", year:"90"}, {_id:2, name:"j", year:"100"}]
    const state= {
      turn: "",
      waitingForMatch: false,
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
      cards: _cards
    }
    expect(game(state, deleteCard(1))).toEqual({
      turn: "",
      waitingForMatch: false,
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
      cards: [{_id:2, name:"j", year:"100"}]
    })
  })

  it.skip ('starts a game', async () => {
      let state = {
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
      
      await startGame("partida 1", 3)(action => state = game(state, action), () => state)
      expect(state).toEqual({
        
            turn: "",
            waitingForMatch: false,
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
  })
})

