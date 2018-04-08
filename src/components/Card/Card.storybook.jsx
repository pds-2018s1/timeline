import React from 'react';
import { storiesOf } from '@storybook/react';

import Card from "./Card"

storiesOf('Card', module)

  .add('mostrar año', () => {
    const fact = { name: "Creación de la bandera",  year: "1812"}
    const show = true
    return <Card fact={fact} showingInfo={show} />
  })


  .add('no mostrar año', () => {
    const fact = { name: "Creación de la bandera",  year: "1812"}
    const show = false
    return <Card fact={fact} showingInfo={show} />
  })


  .add('no mostrar año, seleccionable', () => {
    const fact = { name: "Creación de la bandera",  year: "1812"}
    const show = false
    const seleccionable = true
    return <Card fact={fact} showingInfo={show} seleccionable = {seleccionable}/>
  })


 