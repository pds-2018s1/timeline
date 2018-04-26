import React from 'react';
import { storiesOf } from '@storybook/react';
import Timeline from './Timeline';
import storeCreator from "../../storeCreator"
import { Provider } from 'react-redux'

storiesOf('Timeline', module)
.addDecorator(story => <Provider store={storeCreator()}>{story()}</Provider>)
    .add('timeline inicial', () => {
        const playedCards = [
            { fact:{name: "Revolucion francesa", year: 1789} }
        ]
        return <Timeline playedCards={playedCards} />
    })

    .add('timeline lleno', () => {
        const playedCards = [
            { fact:{name: "Revolucion francesa", year: 1789} },
            { fact:{name: "Revolucion francesa", year: 1789} },
            { fact:{name: "Revolucion francesa", year: 1789} },
            { fact:{name: "Revolucion francesa", year: 1789} },
            { fact:{name: "Revolucion francesa", year: 1789} },
            { fact:{name: "Revolucion francesa", year: 1789} },
            { fact:{name: "Revolucion francesa", year: 1789} },
            { fact:{name: "Revolucion francesa", year: 1789} },
            { fact:{name: "Revolucion francesa", year: 1789} },
            { fact:{name: "Revolucion francesa", year: 1789} },
            { fact:{name: "Revolucion francesa", year: 1789} },
            { fact:{name: "Revolucion francesa", year: 1789} },
            { fact:{name: "Revolucion francesa", year: 1789} },
            { fact:{name: "Revolucion francesa", year: 1789} },
            { fact:{name: "Revolucion francesa", year: 1789} },
            { fact:{name: "Revolucion francesa", year: 1789} },
            { fact:{name: "Revolucion francesa", year: 1789} },
            { fact:{name: "Revolucion francesa", year: 1789} },
            { fact:{name: "Revolucion francesa", year: 1789} },
            { fact:{name: "Revolucion francesa", year: 1789} },
            { fact:{name: "Revolucion francesa", year: 1789} },
            { fact:{name: "Revolucion francesa", year: 1789} },
            { fact:{name: "Revolucion francesa", year: 1789} }
        ]
        return <Timeline playedCards={playedCards} />
    })
