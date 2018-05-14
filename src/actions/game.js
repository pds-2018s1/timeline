import { insert } from 'ramda'
import { isoFetch, postWithJSONBody, deleteRequest, putRequestWithJSONBody } from './fetch-utils'
import { shuffle } from '../model/util'
import { resolve } from 'path';
export const START_GAME = 'START_GAME'
export const CARD_SELECTED = 'CARD_SELECTED'
export const CARD_PLACED_IN_TIMELINE = 'CARD_PLACED_IN_TIMELINE'
export const LOGIN = 'LOGIN'
export const ADMINISTRATE = 'ADMINISTRATE'
export const FETCH_CARDS = 'FETCH_CARDS'
export const LOAD_CARDS = 'LOADED_CARDS'
export const ERROR_LOADING_CARDS = 'ERROR_LOADING_CARDS'
export const DELETE_CARD = 'DELETE_CARD'
export const ADD_CARD = 'ADD_CARD'


export const login = (playerName) => ({
  type: LOGIN,
  player: {
    name: playerName
  }
})



export const localAddCard = card => ({
  type: ADD_CARD,
  card
})
export const addCard = (name, year, img, group) => async dispatch => {
  const card = { name: name, year: year, group: group, img:img }
  const response = await isoFetch('/cards', postWithJSONBody(card))
  const r = await response.json()
  console.log(r)
  dispatch(localAddCard(r.data))
}


export const loadCards = cards => ({ type: LOAD_CARDS, cards })

export const errorLoading = error => ({ type: ERROR_LOADING_CARDS, error })


export const localDeleteCard = id => ({
  type: DELETE_CARD,
  id
})
export const deleteCard = id => async dispatch => {
  await isoFetch(`/cards/${id}`, deleteRequest())
  dispatch(localDeleteCard(id))
}

export const fetchCards = () => async dispatch => {
  try {
    const response = await isoFetch('/cards')
    if (response.status !== 200) {
      dispatch(errorLoading(`Server error ${response.status}`))
    } else {
      const json = await response.json()
      dispatch(loadCards(json))
    }
  } catch (err) {
    dispatch(errorLoading(err))
  }
}

export const administrate = () => ({
  type: ADMINISTRATE
})

export const startGame = () => (dispatch, getState) => {
  const {deck, player} = getState()
  //TODO mezclar el mazo
  const mixedDeck = shuffle(deck)
  dispatch(({
      type: START_GAME,
      player : {
        ...player, 
        playerHand:mixedDeck.slice(0,5)
      },
      deck: mixedDeck.slice(7,deck.length),
      timeline: mixedDeck.slice(5,6)    
    }))
}

export const cardSelected = (card) => ({
  type: CARD_SELECTED,
  selectedCard: card
})

export const cardPlacedInTimeline = (previousCard) => (dispatch,getState) => {
  const { selectedCard, timeline, deck, discard, player } = getState()
  if(!selectedCard) return;

  let newTimeline = timeline.slice() 
  let newDeck = deck
  let newDiscard = discard
  let newPlayerHand = player.playerHand.slice()
  let winner = null

  const year = selectedCard.fact.year
  const prevYear = previousCard ? parseInt(previousCard.fact.year) : Number.NEGATIVE_INFINITY
  const prevCardIndex = previousCard ? timeline.indexOf(previousCard) : -1
  const nextCard = prevCardIndex < timeline.length - 1 ? timeline[prevCardIndex + 1] : null
  const nextYear = nextCard ? parseInt(timeline[prevCardIndex + 1].fact.year) : Number.POSITIVE_INFINITY

  newPlayerHand = newPlayerHand.filter( c => c.fact.name !== selectedCard.fact.name)
  if (prevYear < year && nextYear > year) {
    newTimeline = insert(prevCardIndex + 1, selectedCard, newTimeline)
    if (newPlayerHand.length <1){
      winner = player
    }
  }else {
    newPlayerHand.push(deck[0])
    newDeck = newDeck.slice(1,newDeck.length)
    newDiscard = {quantity: newDiscard.quantity + 1}
  }

  dispatch(({
    type: CARD_PLACED_IN_TIMELINE,
    timeline: newTimeline,  
    deck: newDeck,
    discard: newDiscard,
    playerHand: newPlayerHand,
    winner: winner
  }))
}
