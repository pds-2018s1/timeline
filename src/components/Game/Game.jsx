import React from 'react'

import Table from '../../containers/Table'
import GameLobby from '../../containers/GameLobby'
import Winner from '../Winner/Winner'
import Home from '../Home/Home'

const Game = ({ gameStarted, winner, loggedIn, name }) => {
  if (gameStarted && !winner) {
    return (
      <div className="game">
        <Table />
      </div>
    )
  } else if (winner) {
    return (<Winner name={winner.name} />)
  } else if (loggedIn) {
    return (<Home name={name}/>)
  } else {
    return <GameLobby />
  }
}

export default Game