import React from 'react'
import './WaitingForMatch.css'

const WaitingForMatch = ({matchSize}) => (
  <div id="waitingForMatch">
    <div id="waitingForMatchGenericMessage">Esperando a llenar la mesa para comenzar el juego.</div>
    <div id="remainingPlayers">1 de {matchSize} jugadores listos...</div>
  </div>
)

export default WaitingForMatch