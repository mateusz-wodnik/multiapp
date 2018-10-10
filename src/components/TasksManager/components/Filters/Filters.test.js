import React from 'react';
import { shallow } from 'enzyme';
import Filters from './Filters';

describe('Filters component', () => {

    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<Filters />);
    });

    it('renders without crashing', () => {
        expect(wrapper.exists()).toEqual(true);
    });
});
