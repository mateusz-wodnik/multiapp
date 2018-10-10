import React from 'react';
import { shallow } from 'enzyme';
import Task from './Task';

describe('Task component', () => {

    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<Task />);
    });

    it('renders without crashing', () => {
        expect(wrapper.exists()).toEqual(true);
    });
});
