import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import moment from 'moment';

const AankoopLijstItem = ({dispatch,description, totaal, aangemaakt, id, update}) => (
    <div>
        <Link to={`/edit/${id}`}>
            <h4>Description: {description}</h4>
        </Link>
        <p>Bedrag: €{totaal}</p>
        <p>Aangemaakt: {moment(aangemaakt).format('Do MMMM, YYYY')}</p>
    </div>
);

export default connect()(AankoopLijstItem);



