import React from 'react';
import {shallow} from 'enzyme'; 
import AanvraagFormulier from '../../components/AanvraagFormulier';
import aanvragen from '../fixtures/dummydata';

test('Een correcte formulier moet gerendert worden', () => {
    const wrapper = shallow(<AanvraagFormulier/>);
    expect(wrapper).toMatchSnapshot();
});

test("Een error voor verkeerde waarden", () => {
    const wrapper = shallow(<AanvraagFormulier/>);
    expect(wrapper).toMatchSnapshot();
    wrapper.find('form').simulate('submit', {
        preventDefault: () => {}
    });
    expect(wrapper.state('error').length).toBeGreaterThan(0);
    expect(wrapper).toMatchSnapshot();
});

test("Moet een description geplaats worden op input change", () => {
    const value = 'New Description'
    const wrapper = shallow(<AanvraagFormulier/>);
    wrapper.find('input').at(0).simulate('change', {
        target: {value}
    });
    expect(wrapper.state('description')).toBe(value);
});

test("Moet een description geplaats worden op input change", () => {
    const value = 'New Note'
    const wrapper = shallow(<AanvraagFormulier/>);
    wrapper.find('textarea').simulate('change', {
        target: {value}
    });
    expect(wrapper.state('note')).toBe(value);
});

test("Mag geen invalide waarden zetten", () => {
    const value = '12.1223';
    const wrapper = shallow(<AanvraagFormulier/>);
    wrapper.find('input').at(1).simulate('change', {
        target: {value}
    });
    expect(wrapper.state('totaal')).toBe('');
});

test("Test voor onSubmit prop (valid form submission bro)", () => {
    const onSubmitSpy = jest.fn();
    const wrapper = shallow(<AanvraagFormulier aankoop={aanvragen[0]} onSubmit={onSubmitSpy}/>);
    wrapper.find('form').simulate('submit', {
        preventDefault: () => {}
    });
    expect(wrapper.state('error')).toBe('');
    expect(onSubmitSpy).toHaveBeenLastCalledWith({
        description: aanvragen[0].description, 
        totaal: aanvragen[0].totaal,
        note: aanvragen[0].note, 
        aangemaakt: aanvragen[0].aangemaakt
    });
});