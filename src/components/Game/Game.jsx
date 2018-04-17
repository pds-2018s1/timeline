import React from 'react'

import Timeline from '../Timeline/Timeline'
import Player from '../Player/Player'
import Deck from '../Deck/Deck'
import Opponents from '../Opponents/Opponents'
import './Game.css'
import Discard from '../Discard/Discard'
import Table from '../../containers/Table'


const Game = ({onStartGame}) => (

        <div className="game">
          <div>
             <a href="#" onClick={onStartGame}>Iniciar Juego</a>
             <Table />
            
          </div>
        
      </div>
   
)
export default Game