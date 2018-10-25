import React from 'react';
import { shallow } from 'enzyme';
import Weather from './SearchBox';

describe('TaskManager component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Weather />);
  });

  it('renders without crashing', () => {
    expect(wrapper.exists()).toEqual(true);
  });

  it('contains tasks list', () => {});
});
