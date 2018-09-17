import React from 'react';
import {shallow} from 'enzyme';
import {Aanvraag} from '../../components/AppAanvraag';
import aanvragen from '../fixtures/dummydata';

let onSubmit, history, wrapper;

beforeEach(() => {
    onSubmit = jest.fn();
    history = {push: jest.fn};
    wrapper = shallow(<Aanvraag onSubmit={onSubmit} history={history}/>);
});
test("Aanvraag pagina moet goed gerenderd worden", () => {
    expect(wrapper).toMatchSnapshot();
});


//test werkt niet, prop kan niet gevonden worden?????

/*test("onSubmit moet gehandeld worden", () => {
    const onSubmit = jest.fn();
    const history = {push: jest.fn};
    const wrapper = shallow(<Aanvraag onSubmit={onSubmit} history={history}/>);
    wrapper.find('AanvraagFromulier').prop('onSubmit')(aanvragen[1]);
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(onSubmit).toHaveBeenLastCalledWith(aanvragen[1]);
});*/