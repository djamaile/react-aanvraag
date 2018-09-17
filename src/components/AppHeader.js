import React from 'react';
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';

const Header = () => (
    <header>
        <h1>React Applicatie</h1>
        <NavLink to="/" activeClassName="isActive" exact={true}>Dashboard</NavLink>
        <NavLink to="/aanvraag" activeClassName="isActive">Aanvraag</NavLink>
    </header>
);

export default Header;