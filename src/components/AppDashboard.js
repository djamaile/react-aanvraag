import React from 'react';
import AankopenLijst from '../components/aankopenLijst';
import AankopenLijstFilter from './aankopenLijstFilter';
import AanvraagOverzicht from './AppAanvraagOverzicht';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';


const styles = theme => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing.unit * 2,
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    button: {
        margin: theme.spacing.unit,
      },
      input: {
        display: 'none',
      },
  });
  

const Dashboard = (props) => {
    const {classes} = props;
    return(
        <div>  
            <div className={classes.root}>
                <Grid container spacing={24}>
                    <Grid item xs={4}>
                        
                    </Grid>
                    <Grid item xs={4}>
                        <AankopenLijstFilter/>
                        <AanvraagOverzicht/>
                        <AankopenLijst/>
                    </Grid>
                    <Grid item xs={4}>
                    </Grid>
                </Grid>
            </div>
        </div>
    );
}

Dashboard.propTypes = {
    classes: PropTypes.object.isRequired,
  };

export default withStyles(styles)(Dashboard); 