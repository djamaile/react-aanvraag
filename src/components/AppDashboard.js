import React from 'react';
import AankopenLijst from '../components/aankopenLijst';
import AankopenLijstFilter from './aankopenLijstFilter';
import AanvraagOverzicht from './AppAanvraagOverzicht';

const Dashboard = () => {
    return(
        <div>
            <AankopenLijstFilter/>
            <AanvraagOverzicht/>
            <AankopenLijst/>
        </div>
    );
}

export default Dashboard; 