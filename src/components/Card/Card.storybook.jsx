import React from 'react';
import { storiesOf } from '@storybook/react';

import Card from "./Card"

storiesOf('Card', module)

  .add('simple usage', () => {
    const fact = { name: "Creación de la bandera",  year: "1812"}
    return <Card fact={fact} />
  })


 