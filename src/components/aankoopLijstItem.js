import React from 'react';
import {Link} from 'react-router-dom';
import {verwijderAankoop, editAankoop} from '../actions/aankopen';
import {connect} from 'react-redux';

const AankoopLijstItem = ({dispatch,description, totaal, aangemaakt, id, update}) => (
    <div>
        <Link to={`/edit/${id}`}>
            <h4>Description: {description}</h4>
        </Link>
        <p>Prijs: {totaal}</p>
        <p>Aangemaakt: {aangemaakt}</p>
    </div>
);

export default connect()(AankoopLijstItem);



