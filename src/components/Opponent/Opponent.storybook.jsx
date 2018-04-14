import React from 'react'
import { storiesOf } from '@storybook/react';
import Opponent from './Opponent.jsx'

storiesOf('Opponent', module)

    .add('Oponente con una carta sola', () => {
        const hand = [{ fact:{name: "Revolución Rusa", year: 1917} }]
        return <Opponent name="Carlos" playerHand={hand} />
    })

    .add('Oponente con 10 cartas', () => {
        const hand = [
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
        return <Opponent name="Florencia" playerHand={hand} />
    })


