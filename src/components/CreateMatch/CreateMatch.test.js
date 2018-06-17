import React from 'react'
import { shallow } from 'enzyme'
import CreateMatch from './CreateMatch'

{
  it('Renderiza todos los componentes', () => {
    const createMatch = shallow(<CreateMatch />)
    expect(createMatch.find('h3.createMatchTitle').text()).toEqual(
      'Crear partida nueva'
    )
    expect(createMatch.find('input.newMatchInput')).toHaveLength(2)
    const button = createMatch.find('button.createMatchButton')
    expect(button.text()).toEqual('Crear partida')
  })

  it('No permite iniciar una partida si faltan valores')

  it('No permite iniciar partida si la cantidad de jugadores no es valida')
}
