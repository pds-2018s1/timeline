import React from 'react'
import './Matches.css'
import classNames from 'classnames'

class Matches extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      matchSelected: undefined
    }
  }

  onMatchSelected = (match) => 
    this.setState({matchSelected: match})

  isSelected = (match) =>
    this.state.matchSelected === match

  render = () => {
    return (
      <div>
        <h3 className="title">Unirse a Partidas</h3>
        <ul className="listOfMatches">
          {this.props.matches.map(m => <a onClick={() => this.onMatchSelected(m)} key={m.id} 
            href="#" className={classNames('matchLink', {'matchLinkSelected' : this.isSelected(m)})} >{m.name} <span className="matchSize">{m.size} Jugadores</span></a>)}  
        </ul>
        <button className="joinMatchButton" type="submit" name="submit"
          onClick={() => this.props.startGame(this.state.matchSelected.name, this.state.matchSelected.matchSize)}>
          Unirse
        </button>
      </div>
    )

  }

}

export default Matches
