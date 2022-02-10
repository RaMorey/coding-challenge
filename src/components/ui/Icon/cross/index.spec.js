import { shallow } from 'enzyme';
import React from 'react';
import CrossIcon from '.';

describe('CrossIcon component', () => {
  it('renders correctly with default props', () => {
    const component = shallow(<CrossIcon />);
    expect(component).toMatchSnapshot();
  });
});
