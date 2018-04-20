import React from 'react'
import './GameLobby.css'

class GameLobby extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      playerName: ""
    }
  }

  click = () => {
    console.log("click!")
    this.props.startGame(this.state.playerName)
  }

  render() {
    return (
      <div className="gameLobby">
        <div>Game lobby</div>
        <input type="text" name="playerName" placeholder="ingrese su nombre" />
        <button type="submit" name="submit" onClick={this.click}>Comenzar juego!</button>
      </div>
    )
  }
}

export default GameLobby