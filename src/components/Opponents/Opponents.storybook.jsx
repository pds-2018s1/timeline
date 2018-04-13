import React from 'react'
import { storiesOf } from '@storybook/react'
import Opponents from './Opponents'

storiesOf('Opponents' , module) 

    .add('un oponente unicamente', () => {
        const opponents = [{
            name : "Jugador 2",
            playerHand : [ 
                { fact:{name: "Revolución Rusa", year: 1400} },
                { fact:{name: "Revolución Francesa", year: 1400} },
                { fact:{name: "Descubrimiento de America", year: 1400} },
                { fact:{name: "Invencion de la radio", year: 1400} },
                { fact:{name: "Invencion del automovil", year: 1400} }
            ]
        }]
        return <Opponents opponents={opponents} />
    })

    .add('siete oponentes', () => {
        const opponents = [
            {
                name : "Jugador 2",
                playerHand : [ 
                    { fact:{name: "Revolución Rusa", year: 1400} }
                ]
            },
            {
                name : "Jugador 3",
                playerHand : [ 
                    { fact:{name: "Revolución Rusa", year: 1400} },
                    { fact:{name: "Revolución Francesa", year: 1400} }
                ]
            },
            {
                name : "Jugador 4",
                playerHand : [ 
                    { fact:{name: "Revolución Rusa", year: 1400} },
                    { fact:{name: "Revolución Francesa", year: 1400} },
                    { fact:{name: "Descubrimiento de America", year: 1400} }
                ]
            },
            {
                name : "Jugador 5",
                playerHand : [ 
                    { fact:{name: "Revolución Rusa", year: 1400} },
                    { fact:{name: "Revolución Francesa", year: 1400} },
                    { fact:{name: "Descubrimiento de America", year: 1400} },
                    { fact:{name: "Invencion de la radio", year: 1400} }
                ]
            },
            {
                name : "Jugador 6",
                playerHand : [ 
                    { fact:{name: "Revolución Rusa", year: 1400} },
                    { fact:{name: "Revolución Francesa", year: 1400} },
                    { fact:{name: "Descubrimiento de America", year: 1400} },
                    { fact:{name: "Invencion de la radio", year: 1400} },
                    { fact:{name: "Invencion del automovil", year: 1400} },
                ]
            },
            {
                name : "Jugador 7",
                playerHand : [ 
                    { fact:{name: "Revolución Rusa", year: 1400} },
                    { fact:{name: "Revolución Francesa", year: 1400} },
                    { fact:{name: "Descubrimiento de America", year: 1400} },
                    { fact:{name: "Invencion de la radio", year: 1400} },
                    { fact:{name: "Invencion del automovil", year: 1400} },
                    { fact:{name: "Invencion del automovil", year: 1400} }
                ]
            }
        ]
        return <Opponents opponents={opponents} />
    })


  

  