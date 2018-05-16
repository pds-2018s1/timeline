import React from 'react'
import CreateMatch from '../CreateMatch/CreateMatch'
import Matches from '../Matches/Matches'
import CardsManagement from '../../containers/CardsManagement'
import './Home.css'

const Home = ({name, matches, joinGame, startGame, fetchMatches}) => (
  <div className="home">
    <div className="greet">Hola {name}</div>
    <div className="sectionContainer">
      <div className="section"><CreateMatch startGame={startGame} /></div>
      <div className="section"><Matches matches={matches} joinGame={joinGame} fetchMatches={fetchMatches}/></div>
      <div className="section"><CardsManagement /></div>
    </div>
  </div>
)

export default Home