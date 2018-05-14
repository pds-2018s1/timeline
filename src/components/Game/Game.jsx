import React from 'react'

import Table from '../../containers/Table'
import GameLobby from '../../containers/GameLobby'
import Player from '../Player/Player'
import Winner from '../Winner/Winner'
import Home from '../Home/Home'
//import CardsList from '../CardsList/CardsList';
import CardsList from '../../containers/CardsList'

const Game = ({ gameStarted, winner, loggedIn, name, administrate }) => {
  if (gameStarted && !winner) {
    return (
      <div className="game">
        <Table />
      </div>
    )
  } else if (winner) {
    return (<Winner name={winner.name} />)
  } else if (loggedIn) {
    if (administrate){
      return (<CardsList/>)
    }
    else return (<Home name={name}/>)
  } else {
    return <GameLobby />
  }
}

export default Game