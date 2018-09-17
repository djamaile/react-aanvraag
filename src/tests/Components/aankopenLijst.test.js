import React from 'react';
import {shallow} from 'enzyme';
import { AankopenLijst } from '../../components/aankopenLijst';
import {aankopen} from '../fixtures/dummydata';


  
  test('should render ExpenseList with empty message', () => {
    const wrapper = shallow(<AankopenLijst aankopen={[]} />);
    expect(wrapper.props().aankopen).toMatchSnapshot();
  });