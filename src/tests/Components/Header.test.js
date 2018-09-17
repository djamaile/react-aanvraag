import {shallow} from 'enzyme';
import React from 'react';
import toJSON from 'enzyme-to-json';
import Header from '../../components/AppHeader';

test('Header moet goed tevoorschijn komen', () => {
    const wrapper = shallow(<Header/>);
    expect(toJSON(wrapper)).toMatchSnapshot();
});
