import React from 'react'

import Table from '../../containers/Table'
import GameLobby from '../../containers/GameLobby'

const Game = ({gameStarted, winner, ended}) => {
  if(gameStarted && !ended){
    return ( 
      <div className="game">
        <Table />
      </div>
    )
   } else if (ended){
   return ( <div className="game">
        <div>Ganador: {winner.name}</div>
       
      </div>)
  }else{
    return <GameLobby/>
  }
}

export default Game