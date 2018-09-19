import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';
import configureStore from '../src/store/configure-store';
import AppRouter from './routers/AppRouter';
import {addAankoop} from '../src/actions/aankopen';
import {setTextFilter} from '../src/actions/filters';
import getAankopen from '../src/selecters/aankopen';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import moment, { now } from 'moment';

const store = configureStore();
console.log("testing");
store.dispatch(addAankoop({description: "Macbook pro", totaal: 1500, note: "Voor mijn verjaardag", aangemaakt:1537194096134}));
store.dispatch(addAankoop({description: "Iphone XS Max", totaal: 1660,  note: "Graag een nieuwe werktelefoon",aangemaakt:1537093095134}));
store.dispatch(addAankoop({description: "HP Laptop", totaal: 750,  note: "Werk laptop is kapot",aangemaakt:1537003095134}));

const state = store.getState();
const alleAankopen = getAankopen(state.aankopen, state.filters);
console.log(alleAankopen);

const jsx = (
    <Provider store={store}>
        <AppRouter/>
    </Provider>
);
ReactDOM.render(jsx, document.getElementById('app'));