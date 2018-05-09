import React from 'react'
import CreateMatch from '../CreateMatch/CreateMatch'
import Matches from '../Matches/Matches'
import CardsManagement from '../CardsManagement/CardsManagement'

const Home = ({name}) => (
  <div>
    <div>Hola {name}</div>
    <CreateMatch />
    <Matches />
    <CardsManagement />
  </div>
)

export default Home