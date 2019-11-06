import React from 'react';
import { shallow } from 'enzyme';
import Artist from './Artist';

describe('Artist component', () => {
  it('renders Artist', () => {
    const wrapper = shallow(<Artist name='Tom Petty' />);
    expect(wrapper).toMatchSnapshot();
  });
});
