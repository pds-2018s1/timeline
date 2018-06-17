import React from 'react'

import './PlayerHand.css'
import Card from '../../containers/Card'


const PlayerHand = ({ cards, turn }) => (
  <div className="lista">
    {cards.map(card => (
      <Card
        key={card._id}
        card={card}
        showingInfo={false}
        seleccionable={turn}
      />
    ))}
  </div>
)


export default PlayerHand
