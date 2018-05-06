import React from "react"
import { shallow } from 'enzyme'

import Discard from "./Discard"

{
it("renderiza la cantidad de cartas desechadas", () => {
    const quantity = "50"
    
    const discard = shallow(<Discard quantity={quantity} />)
    expect(discard.find('div.number').text()).toEqual("50")
})

    
}