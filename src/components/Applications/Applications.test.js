import * as React from 'react';
import { shallow } from 'enzyme';
import Applications from './Applications';

jest.mock('./api');

describe('Applications', () => {
  it('should render correctly', () => {
    const component = shallow(<Applications />);
    expect(component).toMatchSnapshot();
  });
});

// Testing with hooks isn't something I'm familiar with at this point
// I would have tested this document for the following:
//
// 1. Check that on load, getApplications is called with the correct params
// 2. Simulate a button press to load more, check getApplications called correct params again
// 3. Check it renders correctly with data, simulate a state change and check snapshot is correct
// 4. Check snapshot is correct for loading state
