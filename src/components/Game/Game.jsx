import React from 'react'

import './Game.css'

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