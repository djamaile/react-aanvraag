import React from 'react';
import {connect} from 'react-redux';
import AanvraagFormulier from './AanvraagFormulier';
import {verwijderAankoop, editAankoop} from '../actions/aankopen';

const Edit = (props) => {
    return (
      <div>
        <AanvraagFormulier
        aankoop={props.aankoop}
        onSubmit={(aankoop) => {
          props.dispatch(editAankoop(props.aankoop.id, aankoop));
          props.history.push('/');
        }}
      />
      <button onClick={() => {
        props.dispatch(verwijderAankoop({ id: props.aankoop.id }));
        props.history.push('/');
      }}>Verwijder</button>
      </div>
    );
  };

  const mapStateToProps = (state, props) => {
    return {
      aankoop: state.aankopen.find((aankoop) => aankoop.id === props.match.params.id)
    };
  };

export default connect(mapStateToProps)(Edit);