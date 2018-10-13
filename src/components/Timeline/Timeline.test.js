import React from 'react';
import { shallow } from 'enzyme';
import Timeline from './Timeline';

describe('TaskManager component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Timeline />);
  });

  it('renders without crashing', () => {
    expect(wrapper.exists()).toEqual(true);
  });

  it('contains tasks list', () => {});
});
