import React from "react"
import { shallow } from 'enzyme'

import Player from "./Player"
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
    expect(respuesta.find('div.text').text()).toEqual("Juan")
})

}