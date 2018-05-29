import React from "react"
import { shallow } from 'enzyme'

import WaitingForMatch from "./WaitingForMatch"

{
  it("despliega el cartel para esperar la partida", () => {
      const matchSize = "4"
      const message = shallow(<WaitingForMatch matchSize={matchSize} />)
      expect(message.find('#waitingForMatchGenericMessage').text()).toEqual("Esperando a llenar la mesa para comenzar el juego.")
      expect(message.find('#remainingPlayers').text()).toEqual("1 de 4 jugadores listos...")
  })

}