
import React from "react"
import { shallow } from 'enzyme'

import Deck from "./Deck"

{
it("renderiza la cantidad de cartas restantes", () => {
    const quantity = "50"
    
    const deck = shallow(<Deck quantity={quantity} />)
    expect(deck.find('div.number').text()).toEqual("50")
})

    
}