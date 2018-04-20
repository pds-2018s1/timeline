import React from 'react'

import './Game.css'

import Table from '../../containers/Table'
import GameLobby from '../../containers/GameLobby'

const Game = ({gameStarted}) => {
  if(gameStarted){
    return ( 
      <div className="game">
        <div>
          <Table />
        </div>
      </div>
    )
  }else{
    return <GameLobby/>
  }
}

export default Game