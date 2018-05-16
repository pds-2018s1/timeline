import React from 'react'
import './Matches.css'
import classNames from 'classnames'
import { fetchMatches } from '../../actions/game';

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

  componentDidMount() {
    const { fetchMatches } = this.props
    fetchMatches()
  }

  render = () => {
    return (
      <div>
        <h3 className="title">Unirse a Partidas</h3>
        <ul className="listOfMatches">
          {this.props.matches.map(m => <a onClick={() => this.onMatchSelected(m)} key={m._id} 
            href="#" className={classNames('matchLink', {'matchLinkSelected' : this.isSelected(m)})} >{m.name} <span className="matchSize">{m.size} Jugadores</span></a>)}  
        </ul>
        <button className="joinMatchButton" type="submit" name="submit"
          onClick={() => this.props.joinGame(this.state.matchSelected._id)}>
          Unirse
        </button>
      </div>
    )

  }

}

export default Matches
