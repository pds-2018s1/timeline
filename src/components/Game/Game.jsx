import React from 'react'

import Table from '../../containers/Table'
import GameLobby from '../../containers/GameLobby'
import Player from '../Player/Player'
import Winner from '../Winner/Winner'

const Game = ({gameStarted, winner}) => {
  if(gameStarted && !winner){
    return ( 
      <div className="game">
        <Table />
      </div>
    )
   } else if (winner){

    return (

        <Winner name={winner.name}/>

    )
    } else {
    return <GameLobby/>
    }
}

export default Game