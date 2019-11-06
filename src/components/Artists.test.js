import React from 'react';
import { shallow } from 'enzyme';
import Artists from './Artists';

describe('Artists component', () => {
  it('renders Artists', () => {
    const wrapper = shallow(<Artists artistArray={[{ id: 'Tom Petty' }, { id: 'Frank Zappa' }]} />);
    expect(wrapper).toMatchSnapshot();
  });
});
