import React from 'react'
<<<<<<< HEAD
import CreateMatch from '../../containers/CreateMatch'
=======
import CreateMatch from '../CreateMatch/CreateMatch'
>>>>>>> development
import Matches from '../Matches/Matches'
import CardsManagement from '../CardsManagement/CardsManagement'
import './Home.css'

const Home = ({name}) => (
  <div className="home">
    <div className="greet">Hola {name}</div>
    <div className="sectionContainer">
      <div className="section"><CreateMatch /></div>
      <div className="section"><Matches /></div>
      <div className="section"><CardsManagement /></div>
    </div>
  </div>
)

export default Home