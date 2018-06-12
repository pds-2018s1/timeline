import React from 'react'
import { shallow } from 'enzyme'

import Winner from './Winner'
{
  it('renderiza el nombre del ganador', () => {
    const name = 'Marta'

    const winnie = shallow(<Winner name={name} />)
    expect(winnie.find('div.text').text()).toEqual('Marta')
  })
}
