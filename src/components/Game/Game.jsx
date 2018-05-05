import React from 'react'

import Table from '../../containers/Table'
import GameLobby from '../../containers/GameLobby'
import Player from '../Player/Player'
import Winner from '../Winner/Winner'

const Game = ({gameStarted, winner, ended}) => {
  if(gameStarted && !ended){
    return ( 
      <div className="game">
        <Table />
      </div>
    )
   } else if (ended){

    return (

        <Winner name={winner.name}/>

    )
    } else {
    return <GameLobby/>
    }
}

export default Game