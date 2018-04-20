import React from 'react'
import './GameLobby.css'

class GameLobby extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      playerName: ""
    }
  }

  handleChange = (event) =>
    this.setState({playerName: event.target.value})
  

  render() {
    return (
      <div className="gameLobby">
        <div>Game lobby</div>
        <input type="text" name="playerName" placeholder="ingrese su nombre" onChange={this.handleChange}/>
        <button type="submit" name="submit" 
          onClick={() => this.props.startGame(this.state.playerName)}>
          Comenzar juego!</button>
      </div>
    )
  }
}

export default GameLobby