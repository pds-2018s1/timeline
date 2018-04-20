import React from 'react'

import Card from '../Card/Card' 
import "./Timeline.css"

const Timeline = ({playedCards}) => (
        <div className="playedCards">
            {
                playedCards.map(card => <div key={card.fact}><Card fact={card.fact} showingInfo={true}/></div>)
            }
        </div>
    )

export default Timeline