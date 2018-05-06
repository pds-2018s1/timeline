import { cards } from '../model/constants'
import { startGame, cardSelected, cardPlacedInTimeline } from '../actions/game'

describe('Game actions', () => {
    describe('select card', () => {
        it('CARD_SELECTED, selecciona bien la carta', () => {
        const card = {fact: {name:"bla", year: "1900"}}
        expect(cardSelected(card)).toEqual({
            type: 'CARD_SELECTED',
            selectedCard: card
        })
    })
})
//TODO: falta hacer test de las otras 2 acciones
})