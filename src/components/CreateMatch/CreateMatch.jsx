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

  isFormValid = () => (
    this.state.matchName && this.state.matchSize && this.state.matchSize > 1 && this.state.matchSize < 9
  )

  render() {
    return (
      <div>
        <h3 className="createMatchTitle">Crear partida nueva</h3>
        <input className="block newMatchInput" type="text" name="matchName" id="newMatchName"
          placeholder="Nombre de la partida" onChange={this.handleNameChange}/>
        <input className="block newMatchInput" type="number" min="2" max="8" name="matchSize" id="newMatchSize" onChange={this.handleNumberChange}/>
        <button className="block createMatchButton" disabled={!this.isFormValid()} type="submit" name="submit" id="newMatchSubmit"
          onClick={() => this.props.startGame(this.state.matchName, this.state.matchSize)}>
          Crear partida
        </button>
      </div>
    )
  }

} 

export default CreateMatch