import React from 'react'
import { shallow } from 'enzyme'

import Card from './Card'
{
  it('renderiza el hecho', () => {
    const card = { name: 'Independencia de Argentina', year: '1816' }
    const show = true

    const respuesta = shallow(<Card card={card} showingInfo={show} />)
    expect(respuesta.find('div.text').text()).toEqual(
      'Independencia de Argentina'
    )
  })

  it('renderiza el año si showInfo es true', () => {
    const card = { name: 'Independencia de Argentina', year: '1816' }
    const show = true

    const respuesta = shallow(<Card card={card} showingInfo={show} />)
    expect(respuesta.find('div.year').text()).toBe('1816')
  })

  it('no renderiza el año si showInfo es false', () => {
    const card = {
      _id: '1',
      image: '',
      group: '',
      name: 'Independencia de Argentina',
      year: '1816'
    }
    const show = false

    const respuesta = shallow(<Card card={card} showingInfo={show} />)
    expect(respuesta.find('div.year')).toHaveLength(0)
  })
}
