import React from 'react';
import { storiesOf } from '@storybook/react';
import Table from './Table'
import storeCreator from "../../storeCreator"
import { Provider } from 'react-redux'

storiesOf('Table', module)
  .addDecorator(story => <Provider store={storeCreator()}>{story()}</Provider>)
    .add('Tablero inicial del juego, dos jugadores', () => {
        const playedCards = [ {name: "Revolucion francesa", year: 1789, image:"https://bit.ly/2IQDdoX" } ]
        const playerHand = [ 
            {_id:1, name: "Revolución Rusa", year: 1400, image:"https://bit.ly/2IQDdoX"},
            {_id:2, name: "Revolución Francesa", year: 1400, image:"https://bit.ly/2IQDdoX"},
            {_id:3, name: "Descubrimiento de America", year: 1400, image:"https://bit.ly/2IQDdoX"},
            {_id:4, name: "Invencion de la radio", year: 1400, image:"https://bit.ly/2IQDdoX"},
            {_id:5, name: "Invencion del automovil", year: 1400, image:"https://bit.ly/2IQDdoX"},
            {_id:6, name: "Invencion del automovil", year: 1400, image:"https://bit.ly/2IQDdoX"}
        ]

        const player1 = {name:"Juan", playerHand:playerHand}
        const player2 = {name:"Marta", playerHand:playerHand}
        const player3 = {name:"Laura", playerHand:playerHand}
        const opponents = [player2,player3]

        const deck = {quantity:50}

        return <Table player={player1} opponents={opponents} timeline={playedCards} deck={deck}/>
    })

    .add('Table juego avanzado', () => {
        const timeline = [ 
                {_id:1, name: "Revolución Rusa", year: 1400, image:"https://bit.ly/2IQDdoX"},
                {_id:2, name: "Revolución Francesa", year: 1400, image:"https://bit.ly/2IQDdoX"},
                {_id:3, name: "Descubrimiento de America", year: 1400, image:"https://bit.ly/2IQDdoX"},
                {_id:4, name: "Invencion de la radio", year: 1400, image:"https://bit.ly/2IQDdoX"},
                {_id:5, name: "Invencion del automovil", year: 1400, image:"https://bit.ly/2IQDdoX"},
                {_id:6, name: "Inicio primera guerra mundial", year: 1400, image:"https://bit.ly/2IQDdoX"},
                {_id:7, name: "Caida del muro de Berlin", year: 1400, image:"https://bit.ly/2IQDdoX"},
                {_id:8, name: "Caida del imperio romano", year: 1400, image:"https://bit.ly/2IQDdoX"},
                {_id:9, name: "Caida de Constantinopla", year: 1400, image:"https://bit.ly/2IQDdoX"},
                {_id:10, name: "Invencion de la penicilina", year: 1400, image:"https://bit.ly/2IQDdoX"}
              ]

        const playerHand = [ 
            {name: "Revolución Rusa", year: 1400, image:"https://bit.ly/2IQDdoX"}
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