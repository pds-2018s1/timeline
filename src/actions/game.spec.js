import { cardSelected, loadCards } from '../actions/game'

describe('Game actions', () => {
    describe('select card', () => {
        it('CARD_SELECTED, selecciona bien la carta', () => {
        const card = {fact: {name:"bla", year: "1900"}}
        expect(cardSelected(card)).toEqual({
            type: 'CARD_SELECTED',
            selectedCard: card
        })
    })

    it('LOAD_CARDS, cargar cartas', () => {
        const _cards = [{name:"h", year:"90"}, {name:"j", year:"100"}]
        expect(loadCards(_cards)).toEqual({
            type: 'LOADED_CARDS',
            cards : _cards
        })
    })
})
})