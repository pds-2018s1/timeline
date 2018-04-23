import React from 'react'

import './Game.css'

import Table from '../../containers/Table'
import GameLobby from '../../containers/GameLobby'

const Game = ({gameStarted, winner}) => {
  if(gameStarted){
    return ( 
      <div className="game">
        <div>Ganador: {winner}</div>
        <Table />
      </div>
    )
  }else{
    return <GameLobby/>
  }
}

export default Game