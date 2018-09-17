import React from 'react';
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';
import Dashboard from '../components/AppDashboard';
import Aanvraag from '../components/AppAanvraag';
import Edit from '../components/AppEdit';
import Header from '../components/AppHeader';
import Help from '../components/AppHelp';
import NotFound from '../components/AppNotfound';

const AppRouter = () =>(
    <BrowserRouter>
        <div>
            <Header/>
            <Switch>
                <Route path="/" component={Dashboard} exact={true} />
                <Route path="/aanvraag" component={Aanvraag}/>
                <Route path="/edit/:id" component={Edit}/>
                <Route path="/Help" component={Help}/>
                <Route component={NotFound}/>
            </Switch>
        </div>   
    </BrowserRouter>
);

export default AppRouter;
