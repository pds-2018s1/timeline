import React from 'react';
import { storiesOf } from '@storybook/react';

import Timeline from './Timeline';

storiesOf('Timeline', module)

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
