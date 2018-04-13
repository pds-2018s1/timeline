import React from 'react';
import { storiesOf } from '@storybook/react';

import Table from './Table'

storiesOf('Table', module)
  
    .add('Tablero inicial del juego, dos jugadores', () => {
        const timeline = {
            playedCards : [ { fact:{name: "Revolucion francesa", year: 1789} } ]
        } 

        const playerHand = [ 
            { fact:{name: "a", year: 1200} },
            { fact:{name: "b", year: 1300} },
            { fact:{name: "c", year: 1400} },
            { fact:{name: "d", year: 1500} },
            { fact:{name: "e", year: 1600} }
        ]

        const player1 = {name:"Juan", playerHand:playerHand}
        const player2 = {name:"Marta", playerHand:playerHand}
        const player3 = {name:"Laura", playerHand:playerHand}
        const opponents = [player2,player3]

        const deck = {quantity:50}

        const players = [player1, player2]
        return <Table player={player1} opponents={opponents} timeline={timeline} deck={deck}/>
    })




