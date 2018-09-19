import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';

const styles = {
    root: {
      flexGrow: 1,
    },
    grow: {
      flexGrow: 1,
    },
    menuButton: {
      marginLeft: -12,
      marginRight: 20,
    },
  };

const Header = (props) => {
    const { classes } = props;
    return (
        <div className={classes.root} id="header">
            <AppBar position="static">
                <Toolbar>
                <Typography variant="title" color="inherit" className={classes.grow}>
                    <NavLink to="/" activeClassName="is-active" exact={true} className="header__title">React Applicatie</NavLink>
                </Typography>
                </Toolbar>
            </AppBar>
        </div>
    );
};

Header.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);