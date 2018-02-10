import React from 'react'
import { shallow } from 'enzyme'
import Routes from './Routes'

it('The routes should render correctly.', () => {
  const tree = shallow(<Routes />)
  expect(tree).toMatchSnapshot()
})
