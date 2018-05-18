import React from "react"
import { shallow } from 'enzyme'

import Timeline from './Timeline'
import Card from '../../containers/Card'

it("Despliega una carta", () => {
    const cards = [{_id: 1, name: "Independencia de Argentina", year: "1816"}]
    
    const timeline = shallow(<Timeline playedCards={cards}/>)
    expect(timeline.find(Card).length).toBe(1)
})

it("Despliega tres carta", () => {
    const cards = [
        {_id: 1, name: "Independencia de Argentina", year: "1816"},
        {_id: 2, name: "Independencia de Uruguay", year: "1825"},
        {_id: 3, name: "Independencia de Bolivia", year: "1825"}
    ]
    
    const timeline = shallow(<Timeline playedCards={cards} />)
    expect(timeline.find(Card).length).toBe(3)
})
