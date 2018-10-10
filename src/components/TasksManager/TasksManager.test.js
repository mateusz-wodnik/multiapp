import React from 'react';
import { shallow } from 'enzyme';
import TasksManager from './TasksManager';

describe('TaskManager component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<TasksManager />);
  });

  it('renders without crashing', () => {
    expect(wrapper.exists()).toEqual(true);
  });

  it('contains tasks list', () => {});
});
