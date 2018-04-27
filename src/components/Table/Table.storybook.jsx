import React from 'react';
import { storiesOf } from '@storybook/react';
import Table from './Table'
import storeCreator from "../../storeCreator"
import { Provider } from 'react-redux'

storiesOf('Table', module)
  .addDecorator(story => <Provider store={storeCreator()}>{story()}</Provider>)
    .add('Tablero inicial del juego, dos jugadores', () => {
        const timeline = [ { fact:{name: "Revolucion francesa", year: 1789} } ]
        const playerHand = [ 
            { fact:{name: "Revolución Rusa", year: 1400} },
            { fact:{name: "Revolución Francesa", year: 1400} },
            { fact:{name: "Descubrimiento de America", year: 1400} },
            { fact:{name: "Invencion de la radio", year: 1400} },
            { fact:{name: "Invencion del automovil", year: 1400} },
            { fact:{name: "Invencion del automovil", year: 1400} }
        ]

        const player1 = {name:"Juan", playerHand:playerHand}
        const player2 = {name:"Marta", playerHand:playerHand}
        const player3 = {name:"Laura", playerHand:playerHand}
        const opponents = [player2,player3]

        const deck = {quantity:50}

        return <Table player={player1} opponents={opponents} timeline={timeline} deck={deck}/>
    })

    .add('Table juego avanzado', () => {
        const timeline = [ 
                { fact:{name: "Revolución Rusa", year: 1400} },
                { fact:{name: "Revolución Francesa", year: 1400} },
                { fact:{name: "Descubrimiento de America", year: 1400} },
                { fact:{name: "Invencion de la radio", year: 1400} },
                { fact:{name: "Invencion del automovil", year: 1400} },
                { fact:{name: "Inicio primera guerra mundial", year: 1400} },
                { fact:{name: "Caida del muro de Berlin", year: 1400} },
                { fact:{name: "Caida del imperio romano", year: 1400} },
                { fact:{name: "Caida de Constantinopla", year: 1400} },
                { fact:{name: "Invencion de la penicilina", year: 1400} }
              ]

        const playerHand = [ 
            { fact:{name: "Revolución Rusa", year: 1400} }
        ]

        const player1 = {name:"Juan", playerHand:playerHand}
        const player2 = {name:"Marta", playerHand:playerHand}
        const player3 = {name:"Laura", playerHand:playerHand}
        const player4 = {name:"Laura", playerHand:playerHand}
        const player5 = {name:"Laura", playerHand:playerHand}
        const player6 = {name:"Laura", playerHand:playerHand}
        const player7 = {name:"Laura", playerHand:playerHand}
        
        const opponents = [player2,player3,player4,player5,player6,player7]

        const deck = {quantity:5}

        return <Table player={player1} opponents={opponents} timeline={timeline} deck={deck}/>


    })

    // .add('Tablero con muchas cartas en la mano', () => {

    //     const timeline = {
    //         playedCards : [ 
    //             { fact:{name: "Revolución Rusa", year: 1400} },
    //             { fact:{name: "Revolución Francesa", year: 1400} },
    //             { fact:{name: "Caida de Constantinopla", year: 1400} },
    //             { fact:{name: "Invencion de la penicilina", year: 1400} }
    //          ]
    //     }

    //     const playerHand = [ 
    //         { fact:{name: "Revolución Rusa", year: 1400} },
    //         { fact:{name: "Revolución Francesa", year: 1400} },
    //         { fact:{name: "Descubrimiento de America", year: 1400} },
    //         { fact:{name: "Invencion de la radio", year: 1400} },
    //         { fact:{name: "Invencion del automovil", year: 1400} },
    //         { fact:{name: "Inicio primera guerra mundial", year: 1400} },
    //         { fact:{name: "Caida del muro de Berlin", year: 1400} },
    //         { fact:{name: "Caida del imperio romano", year: 1400} },
    //         { fact:{name: "Caida de Constantinopla", year: 1400} },
    //         { fact:{name: "Invencion de la penicilina", year: 1400} }
    //     ]

    //     const player1 = {name:"Juan", playerHand:playerHand}
    //     const player2 = {name:"Marta", playerHand:playerHand}
    //     const player3 = {name:"Laura", playerHand:playerHand}
    //     const player4 = {name:"Laura", playerHand:playerHand}
    //     const player5 = {name:"Laura", playerHand:playerHand}
    //     const player6 = {name:"Laura", playerHand:playerHand}
    //     const player7 = {name:"Laura", playerHand:playerHand}
        
    //     const opponents = [player2,player3,player4,player5,player6,player7]

    //     const deck = {quantity:5}

    //     return <Table player={player1} opponents={opponents} timeline={timeline} deck={deck}/>
    // })
