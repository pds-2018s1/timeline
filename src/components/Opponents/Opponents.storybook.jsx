import React from 'react'
import { storiesOf } from '@storybook/react'
import Opponents from './Opponents'

storiesOf('Opponents' , module) 

    .add('un oponente unicamente', () => {
        const opponents = [{
            name : "Jugador 2",
            playerHand : [ 
                { fact:{name: "a", year: 1200} },
                { fact:{name: "b", year: 1300} },
                { fact:{name: "c", year: 1400} },
                { fact:{name: "d", year: 1500} },
                { fact:{name: "e", year: 1600} }
            ]
        }]
        return <Opponents opponents={opponents} />
    })

    .add('siete oponentes', () => {
        const opponents = [
            {
                name : "Jugador 2",
                playerHand : [ 
                    { fact:{name: "a", year: 1200} },
                    { fact:{name: "b", year: 1300} },
                    { fact:{name: "c", year: 1400} },
                    { fact:{name: "d", year: 1500} },
                    { fact:{name: "e", year: 1600} }
                ]
            },
            {
                name : "Jugador 3",
                playerHand : [ 
                    { fact:{name: "a", year: 1200} },
                    { fact:{name: "b", year: 1300} },
                    { fact:{name: "c", year: 1400} },
                    { fact:{name: "d", year: 1500} },
                    { fact:{name: "e", year: 1600} }
                ]
            },
            {
                name : "Jugador 4",
                playerHand : [ 
                    { fact:{name: "a", year: 1200} },
                    { fact:{name: "b", year: 1300} },
                    { fact:{name: "c", year: 1400} },
                    { fact:{name: "d", year: 1500} },
                    { fact:{name: "e", year: 1600} }
                ]
            },
            {
                name : "Jugador 5",
                playerHand : [ 
                    { fact:{name: "a", year: 1200} },
                    { fact:{name: "b", year: 1300} },
                    { fact:{name: "c", year: 1400} },
                    { fact:{name: "d", year: 1500} },
                    { fact:{name: "e", year: 1600} }
                ]
            },
            {
                name : "Jugador 6",
                playerHand : [ 
                    { fact:{name: "a", year: 1200} },
                    { fact:{name: "b", year: 1300} },
                    { fact:{name: "c", year: 1400} },
                    { fact:{name: "d", year: 1500} },
                    { fact:{name: "e", year: 1600} }
                ]
            },
            {
                name : "Jugador 7",
                playerHand : [ 
                    { fact:{name: "a", year: 1200} },
                    { fact:{name: "b", year: 1300} },
                    { fact:{name: "c", year: 1400} },
                    { fact:{name: "d", year: 1500} },
                    { fact:{name: "e", year: 1600} }
                ]
            }
        ]
        return <Opponents opponents={opponents} />
    })


  

  