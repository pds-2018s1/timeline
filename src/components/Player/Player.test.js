import React from "react"
import { shallow } from 'enzyme'
import Player from "./Player"
{
  it("renderiza correctamente el nombre", () => {
    const name = "Juan"
    const cards = [
      { _id: 1, name: "Independencia de Argentina", year: "1816" },
      { _id: 2, name: "Independencia de Argentina", year: "1816" },
      { _id: 3, name: "Independencia de Argentina", year: "1816" },
      { _id: 4, name: "Independencia de Argentina", year: "1816" },
      { _id: 5, name: "Independencia de Argentina", year: "1816" }
    ]
    const player = shallow(<Player name={name}
      playerHand={cards} />)
    expect(player.find('div.name').text()).toEqual("Juan")
  })

}