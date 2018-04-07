import React from "react"
import { shallow } from 'enzyme'

import Timeline from './Timeline'
import Card from '../Card/Card'

it("Despliega una carta", () => {
    const cards = [{name: "Independencia de Argentina", year: "1816"}]
   
    const timeline = shallow(<Timeline playedCards={cards} />)
    expect(timeline.find(Card).length).toBe(1)
})

it("Despliega tres carta", () => {
    const cards = [
        {name: "Independencia de Argentina", year: "1816"},
        {name: "Independencia de Argentina", year: "1816"},
        {name: "Independencia de Argentina", year: "1816"}
    ]
    
    const timeline = shallow(<Timeline playedCards={cards} />)
    expect(timeline.find(Card).length).toBe(3)
})
