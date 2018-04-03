
import React from "react"
import { shallow } from 'enzyme'

import Card from "./Card"
{
it("renderiza el hecho", () => {
    const fact = {name: "Independencia de Argentina", year: "1816"}
    const show = true
    
    const respuesta = shallow(<Card fact={fact} showingInfo={show} />)
    expect(respuesta.find('div.text').text()).toEqual("Independencia de Argentina")
})
}