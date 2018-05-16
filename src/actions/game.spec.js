import { cards } from '../model/constants'
import { startGame, cardSelected, cardPlacedInTimeline, fetchCards } from '../actions/game'
import { TEST_URL } from './fetch-utils'
import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import nock from 'nock'
const mockStore = configureStore([thunk])


describe('Game actions', () => {
    describe('select card', () => {
        it('CARD_SELECTED, selecciona bien la carta', () => {
        const card = {fact: {name:"bla", year: "1900"}}
        expect(cardSelected(card)).toEqual({
            type: 'CARD_SELECTED',
            selectedCard: card
        })
    })
       /* it('buscar las cartas del server', async () => {
            nock(TEST_URL)
            .get('/cards')
            .reply(200, {
                status: 'ok', 
                data: [{ id: 1, text: 'hola' }]
            })
            
            const store = mockStore()
            
            await store.dispatch(fetchCards())
            
            expect(store.getActions()).toEqual([
            { type: 'LOADED_CARDS', cards: [{ id: 1, text: 'hola' }] }
            ])
        })*/
})
//TODO: falta hacer test de las otras 2 acciones
})