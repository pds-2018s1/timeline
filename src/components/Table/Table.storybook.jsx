import React from 'react';
import { storiesOf } from '@storybook/react';

import Table from './Table'

storiesOf('Table', module)
  
    .add('Tablero inicial del juego', () => {
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

        const name1 = "Juan"
        const player1 = {name:name1, playerHand:playerHand}
        const players = [player1]

        return <Table timeline={timeline} players={players} />
    })




