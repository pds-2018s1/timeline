/*TODO: agregar JSON con 220 cartas*/

export const START_GAME = 'START_GAME'
export const CARD_SELECTED = 'CARD_SELECTED'
export const CARD_PLACED_IN_TIMELINE = 'CARD_PLACED_IN_TIMELINE'
export const CARD_REJECTED_FROM_TIMELINE = 'CARD_REJECTED_FROM_TIMELINE'

export const startGame = (playerName) => (dispatch, getState) => {
  const {deck} = getState()
  //TODO mezclar el mazo
  dispatch(({
      type: START_GAME,
      player : {
        name:playerName, 
        playerHand:deck.slice(0,5)
      },
      deck: deck.slice(7,deck.length),
      timeline: deck.slice(5,6)    
    }))
}

export const cardSelected = (card) => ({
  type: CARD_SELECTED,
  selectedCard: card
})

export const cardPlacedInTimeline = (cardWithRequiredIndex) => ({
  type: CARD_PLACED_IN_TIMELINE,
  cardWithRequiredIndex
})

export const cardRejectedFromTimeline = () => ({
  type: CARD_REJECTED_FROM_TIMELINE
})