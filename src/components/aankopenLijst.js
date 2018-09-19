import React from 'react';
import {connect} from 'react-redux';
import AankoopLijstItem from './aankoopLijstItem';
import selectAankopen from '../selecters/aankopen';

export const AankopenLijst = (props) => (
    <div>
      {
        props.aankopen.length === 0 ? (
          <p>Geen aanvraag</p>
        ) : (
            props.aankopen.map((aankoop) => {
              return <AankoopLijstItem key={aankoop.id} {...aankoop} />;
            })
          )
      }
    </div>
  );

const mapStateToProps = (state) => {
    return {
        aankopen: selectAankopen(state.aankopen, state.filters)
    };
};

export default connect(mapStateToProps)(AankopenLijst);
