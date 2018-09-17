import React from 'react';
import AankopenLijst from '../components/aankopenLijst';
import AankopenLijstFilter from './aankopenLijstFilter';

const Dashboard = () => {
    return(
        <div>
            <AankopenLijstFilter/>
            <AankopenLijst/>
        </div>
    );
}

export default Dashboard; 