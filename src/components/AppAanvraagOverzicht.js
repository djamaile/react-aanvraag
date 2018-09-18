import React from 'react';
import {connect} from 'react-redux';
import aankopen from '../selecters/aankopen';
import totaalbedragen from '../selecters/selectTotaleKosten';

export const AanvraagOverzicht = ({aanvraagAantal, aanvraagTotaal}) =>{
    const aanvraagRes = aanvraagAantal === 1 ?  "aanvraag" : "aanvragen";
    return(
        <div>
            <h3>Op dit moment {aanvraagAantal} {aanvraagRes}, totaal €{aanvraagTotaal}.</h3>
        </div>
    );
};

const mapStateToProps = (state) => {
    const aanwezigeAanvragen = aankopen(state.aankopen, state.filters);
    return{
        aanvraagAantal: aanwezigeAanvragen.length,
        aanvraagTotaal: totaalbedragen(aanwezigeAanvragen)
    };
};

export default connect(mapStateToProps)(AanvraagOverzicht);