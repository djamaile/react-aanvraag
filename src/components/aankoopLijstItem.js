import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import moment from 'moment';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';

const styles = theme => ({
    root: {
      flexGrow: 1,
      maxWidth: 600,
      padding: theme.spacing.unit * 2,
    },
    image: {
      width: 128,
      height: 128,
    },
    img: {
      margin: 'auto',
      display: 'block',
      maxWidth: '100%',
      maxHeight: '100%',
    },
});

const AankoopLijstItem = ({description, totaal, aangemaakt, id,note}) => {
    return(        
        <div>
            <Paper className="item-root" id="Stooopid">
                <Grid container spacing={16}>
                    <Grid item>
                    <ButtonBase className="item-image">
                        <img className="item-img" alt="complex" src="https://via.placeholder.com/128x128" />
                    </ButtonBase>
                    </Grid>
                    <Grid item xs={12} sm container>
                    <Grid item xs container direction="column" spacing={16}>
                        <Grid item xs>
                        <Typography gutterBottom variant="subheading">
                            Beschrijving: {description}
                        </Typography>
                        <Typography gutterBottom>Aangemaakt: {moment(aangemaakt).format('Do MMMM, YYYY')}</Typography>
                        <Typography gutterBottom>Note: {note}</Typography>
                        <Typography color="textSecondary">ID: {id}</Typography>
                        </Grid>
                        <Grid item>
                        <Link to={`/edit/${id}`}>
                            <Typography style={{ cursor: 'pointer' }}>
                                Aanpassen
                            </Typography>
                        </Link>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <Typography variant="subheading">€{totaal}</Typography>
                    </Grid>
                    </Grid>
                </Grid>
            </Paper>
    </div>
    );
}

AankoopLijstItem.propTypes = {
    classes: PropTypes.object.isRequired,
};

const AankoopLijstItemStyle = withStyles(styles)(AankoopLijstItem)

export default connect()(AankoopLijstItemStyle);



