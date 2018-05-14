import React from 'react'
import './CreateMatch.css'

class CreateMatch extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      matchName: "",
      matchSize: undefined
    }
  }

  handleNameChange = (event) =>
    this.setState({matchName: event.target.value})
  
  handleNumberChange = (event) =>
    this.setState({matchSize: event.target.value})

  render() {
    return (
      <div>
        <h3 className="createMatchTitle">Crear partida nueva</h3>
        <input className="block newMatchInput" type="text" name="matchName" 
          placeholder="Nombre de la partida" onChange={this.handleNameChange}/>
        <input className="block newMatchInput" type="number" min="2" max="8" name="matchSize" onChange={this.handleNumberChange}/>
        <button className="block createMatchButton" type="submit" name="submit"
          onClick={() => this.props.startGame(this.state.matchName, this.state.matchSize)}>
          Crear partida
        </button>
      </div>
    )
  }

} 

export default CreateMatch