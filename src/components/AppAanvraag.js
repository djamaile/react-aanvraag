import React from 'react';
import AanvraagFromulier from './AanvraagFormulier';
import {connect} from 'react-redux';
import {addAankoop} from '../actions/aankopen';

export class Aanvraag extends React.Component{
    onSubmit =(aankoop) => {
        this.props.onSubmit(aankoop);
        this.props.history.push('/');
    }
    render(){
        return(
            <div>
                <p>Dit is een aanvraag</p>
                <AanvraagFromulier 
                  onSubmit={this.onSubmit}
                />
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    onSubmit: (aankoop) => dispatch(addAankoop(aankoop))
});

export default connect(undefined, mapDispatchToProps)(Aanvraag);