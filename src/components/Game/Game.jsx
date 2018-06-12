import React from 'react'

import Table from '../../containers/Table'
import GameLobby from '../../containers/GameLobby'
import Winner from '../Winner/Winner'
import Home from '../Home/Home'
import CardsList from '../../containers/CardsList'
import WaitingForMatch from '../WaitingForMatch/WaitingForMatch'
import './Game.css'

const Game = props => {
  return <div className="main">{resolveComponent(props)}</div>
}

const resolveComponent = ({
  gameStarted,
  winner,
  loggedIn,
  name,
  administrate,
  matchSize,
  waitingForMatch,
  matches,
  startGame,
  joinGame,
  fetchMatches
}) => {
  if (gameStarted && !winner) {
    return (
      <div className="game">
        <Table />
      </div>
    )
  } else if (winner) {
    return <Winner name={winner.name} />
  } else if (loggedIn) {
    if (administrate) {
      return <CardsList />
    }
    if (waitingForMatch) {
      return <WaitingForMatch matchSize={matchSize} />
    } else
      return (
        <Home
          name={name}
          matches={matches}
          startGame={startGame}
          joinGame={joinGame}
          fetchMatches={fetchMatches}
        />
      )
  } else {
    return <GameLobby />
  }
}

export default Game
