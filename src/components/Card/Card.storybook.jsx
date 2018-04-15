import React from 'react';
import { storiesOf } from '@storybook/react';

import Card from "./Card"

storiesOf('Card', module)

  .add('mostrar año', () => {
    const fact = { name: "Creación de la bandera",  year: "1812"}
    return <Card fact={fact} showingInfo={true}/>
  })

  .add('carta con text muy largo', () => {
    const fact = {name: "La division de Yugoslavia en Bosnia Herzegovina, Croacia, Macedonia, Montenegro, Serbia y Slovenia"}
    return <Card fact={fact} showingInfo={true} />
  })

  .add('no mostrar año', () => {
    const fact = { name: "Fin de la segunda guerra mundial",  year: "1812"}
    return <Card fact={fact} showingInfo={false} />
  })


  .add('no mostrar año, seleccionable', () => {
    const fact = { name: "Creación de la bandera",  year: "1812"}
    return <Card fact={fact} showingInfo={false} seleccionable={true} />
  })

  .add('carta seleccionada', () => {
    const fact = { name: "Creación de la bandera",  year: "1812"}
    return <Card fact={fact} showingInfo={false} seleccionable={true} />
  })

 