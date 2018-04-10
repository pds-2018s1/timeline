import React from "react"
import { shallow } from 'enzyme'

import Player from "./Player"
import PlayerHand from "../PlayerHand/PlayerHand";
{
it("renderiza correctamente el nombre", () => {
    const name = "Juan"
    const cards = [
        {name: "Independencia de Argentina", year: "1816"},
        {name: "Independencia de Argentina", year: "1816"},
        {name: "Independencia de Argentina", year: "1816"},
        {name: "Independencia de Argentina", year: "1816"},
        {name: "Independencia de Argentina", year: "1816"}
    ]
    const player = shallow(<Player name={name}
        playerHand={cards} />)
    expect(player.find('div.name').text()).toEqual("Juan")
})

//var cómo medir esto
/*it("renderiza correctamente la cantidad de cartas", () => {
    const name = "Juan"
    const cards = [
        {name: "Independencia de Argentina", year: "1816"},
        {name: "Independencia de Argentina", year: "1816"},
        {name: "Independencia de Argentina", year: "1816"},
        {name: "Independencia de Argentina", year: "1816"},
        {name: "Independencia de Argentina", year: "1816"}
    ]
    const player = shallow(<Player name={name}
        playerHand={cards} />)
        expect(player.find(PlayerHand.cards).length).toBe(3)
})*/

}