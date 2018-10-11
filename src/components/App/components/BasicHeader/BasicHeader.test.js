import React from 'react';
import { shallow } from 'enzyme';
import BasicHeader from './BasicHeader';

describe('TaskManager component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<BasicHeader />);
  });

  it('renders without crashing', () => {
    expect(wrapper.exists()).toEqual(true);
  });

  it('contains tasks list', () => {});
});
