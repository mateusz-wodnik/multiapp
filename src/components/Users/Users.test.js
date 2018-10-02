import React from 'react';
import { shallow } from 'enzyme';
import Users from './Users';
import mock from './mock.data.json';

describe('Users list component', () => {
  const list = mock;
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Users list={list} />);
  });

  it('renders without crashing', () => {
    expect(wrapper.exists()).toEqual(true);
  });

  it('contains header', () => {
    wrapper = shallow(<Users />);
    expect(wrapper.exists('.header')).toEqual(true);
  });

  it('contains content', () => {
    wrapper = shallow(<Users />);
    expect(wrapper.exists('.content')).toEqual(true);
  });
});
