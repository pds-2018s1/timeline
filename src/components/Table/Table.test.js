import React from "react"
import { shallow } from 'enzyme'

import Table from './Table'

{
it("renderiza correctamente el nombre del jugador", () => {
    const name = "Juan"
    const playerHand = [
        {name: "Independencia de Argentina", year: "1816"},
        {name: "Independencia de Argentina", year: "1816"},
        {name: "Independencia de Argentina", year: "1816"},
        {name: "Independencia de Argentina", year: "1816"},
        {name: "Independencia de Argentina", year: "1816"}
    ]
    const player1 = {name:name, playerHand: playerHand, turn:false, showPhoto:true}
    const opps = []
    const deck = {quantity:50}
    const turn = 0
    const table = shallow(<Table  player={player1} opponents={opps} timeline = {[]} deck={deck} turn={0}/>)
    //const playerComp = table.findWhere('div.player')
    //expect(playerComp.find('div.name').text()).toEqual("Juan")
    //expect(table.containsAnyMatchingElements('div.player'))
})
}